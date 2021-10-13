<!--
This is the map view of a list of events
 -->

<template>
  <div class="container">
    <div v-if="showSelector" class="top-container">
      <router-link
      v-if="showNavigation"
      :to="{name: 'Events'}"
      class="back-button w-inline-block">
        <img src="../assets/arrow-back-black.svg">
      </router-link>
      <p class="distance-selector">Within
        <select v-model="maximumDistanceFromUserInMiles">
          <option v-for="distance in distanceOptions">{{distance}}</option>
        </select> miles
      </p>
      <a
      v-if="showNavigation"
      @click="switchType"
      class="toggle-button w-inline-block">
        <div>{{ otherType }}</div>
      </a>

    </div>
    <div
    v-show="type==='map'"
    class="map-wrapper"
    @click="mapClick">
    <a
     v-if="showNavigation || !isMobile"
     href=""
     @click.prevent="searchButtonClick"
     class="map-button-1 w-button">
     Search this area
     </a>
      <GmapMap
      class="google-map"
      ref="mapRef"
      :disableDefaultUI="true"
      :center="{ lat: 40.689587754466, lng: -73.9978254887843 }"
      :zoom="13"
      :options="mapOptions"
      style="width: 100%; height: 100%;">
      </GmapMap>
    </div>
    <div
    v-if="type==='list'"
    class="list-container w-container">
      <EventList
        class="list"
        :events="events"
        :noEventsMessage="noEventsMessage"
      />
    </div>
  </div>
</template>

<script>
import maps from '@/mixins/maps'
import screen from '@/mixins/screen'
import EventList from '@/components/EventList.vue'
import _ from 'lodash/fp'

const DISTANCE_OPTIONS = [ 1, 2, 5, 10, 20, 50 ]

export default {
  name: 'EventListMap',
  props: ['events', 'center'],
  mixins: [ maps, screen ],
  components: { EventList },
  data () {
    return {
      map: null,
      type: 'map',
      maximumDistanceFromUserInMiles: DISTANCE_OPTIONS[2],
      circles: []
    }
  },
  methods: {
    mapClick () {
      if (this.isMobile && this.$router.currentRoute.name === 'Events') {
        this.$router.push({ name: 'EventsDetail' })
      }
    },
    switchType () {
      this.type = this.otherType
    },
    updateEvents: async function () {
      this.map = await this.$refs.mapRef.$mapPromise

      // clear existing markers
      // https://developers.google.com/maps/documentation/javascript/examples/marker-remove
      for (let circle of this.circles) {
        circle.setMap(null)
      }
      this.circles = []

      const that = this
      for (let event of _.reverse(this.events)) {
        const circle = that.addCircle(
          { lat: event.hostFuzzyLatitude, lng: event.hostFuzzyLongitude },
          0.2,
          that.map
        )
        if (circle) {
          that.circles.push(circle)
          circle.addListener('click', function () {
            that.$router.push({ name: 'EventPage', params: { id: event.id } })
          })
        }
      }
    },
    setZoomLevelForMaxDistance: async function () {
      const minDim = Math.min(this.$refs.mapRef.$el.clientHeight, this.$refs.mapRef.$el.clientWidth)
      const pixelRadius = minDim / 2
      const map = await this.$refs.mapRef.$mapPromise
      const desiredMetersPerPixel = this.maximumDistanceFromUserInMiles * 1609.34 / pixelRadius
      let zoom = Math.floor(this.zoomLevelForScale(desiredMetersPerPixel, map))
      zoom = Math.min(Math.max(zoom, 0), 20) // ensure it's in the range of acceptable zooms
      map.setZoom(zoom)
    },
    searchButtonClick: async function () {
      const map = await this.$refs.mapRef.$mapPromise
      this.$emit('maxDistanceSet', { center: map.center, miles: this.maximumDistanceFromUserInMiles }) // this should get the zoom level from the actual map
    }
  },
  computed: {
    otherType: function () {
      if (this.type === 'map') {
        return 'list'
      }
      if (this.type === 'list') {
        return 'map'
      }
      throw Error('Type is neither list nor map')
    },
    showNavigation: function () {
      return this.$router.currentRoute.name === 'EventsDetail'
    },
    centerLatLng: function () {
      return this.latlng(this.center.lat, this.center.lng)
    },
    distanceOptions: () => DISTANCE_OPTIONS,
    mapOptions: function () {
      return {
        'disableDefaultUI': true, // turns off map controls
        'gestureHandling': 'greedy'
      }
    },
    showSelector: function () {
      return (this.$router.currentRoute.name === 'Events' && !this.isMobile) ||
             (this.$router.currentRoute.name === 'EventsDetail')
    }
  },
  watch: {
    events: function () {
      this.updateEvents()
    },
    maximumDistanceFromUserInMiles: async function () {
      const map = await this.$refs.mapRef.$mapPromise
      this.setZoomLevelForMaxDistance()
      this.$emit('maxDistanceSet', { center: map.center, miles: this.maximumDistanceFromUserInMiles })
    }
  },
  mounted: async function () {
    const map = await this.$refs.mapRef.$mapPromise
    if (this.events && this.events.length) {
      // draw in events if they are already loaded
      this.updateEvents()
    }
    map.setCenter(this.centerLatLng)
    this.setZoomLevelForMaxDistance()
  }
}
</script>

<style scoped lang="scss">
.distance-selector {
  text-align: center;
  margin: 10px;
}

select {
  appearance: menulist;
  --webkit-appearance: menulist;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
}

.map-wrapper {
  height: 412px;
  min-width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: #fff;  
}

.map-button-1 {
  position: absolute;
  top: 0%;
  z-index: 1000;
  width: auto;
  margin-top: 12px;
  padding: 12px 16px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  border: 1px solid #1f88e9;
  border-radius: 4px;
  background-color: #1f88e9;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, .4);
  opacity: 0.9;
  font-weight: 400;
  text-align: center;
}

.map-button-1:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.map-button-1:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

@media (max-width: 991px) {
  .map-wrapper {
    height: 200px;
    flex: 1;
  }

  .top-container {
    display: flex;
    flex-direction: row;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  }

  .back-button {
    display: flex;
    padding-left: 10px;
  }

  .toggle-button {
    display: flex;
    color: #1f88e9;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    width: 66px;
    height: 48px;
    font-size: 13px;
    text-align: center;
    border-left: 1px solid rgba(0, 0, 0, .04);
    align-items: center;
    div {
      margin: auto;
    }
  }
  .list-container {
    flex: 1;
    overflow-y: scroll
  }
}
</style>
