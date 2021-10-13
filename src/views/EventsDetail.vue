<!--
This is the mobile-only page that shows an expanded, naviagable map of events
 -->

<template>
  <div class="body">
    <EventListMap
      class="map"
      :events="events"
      @maxDistanceSet="updateEventsForZoomLevel($event)"
      :center="center"
    />
  </div>
</template>

<script>
import EventListMap from '@/components/EventListMap.vue'
import { fetchEvents } from '@/utils/api.js'
import { mapGetters } from 'vuex'

export default {
  name: 'EventsDetail',
  components: { EventListMap },
  data () {
    return {
    }
  },
  computed: {
    center () {
      if (this.currentUser) {
        return { lat: this.currentUser.latitude, lng: this.currentUser.longitude }
      } else {
        return { lat: 40.688309, lng: -73.994639 } // BoCoCa
      }
    },
    ...mapGetters([
      'currentUser', 'isAuthenticated', 'events'
    ])
  },
  methods: {
    updateEventsForZoomLevel: async function (e) {
      this.$store.dispatch('fetchUpcomingEventsWithinDistance', { miles: e.miles, lat: e.center.lat(), lng: e.center.lng() })
    },
    fetchEventsWithinDistance: async function () {
      this.$store.dispatch('fetchUpcomingEventsWithinDistance', {
        miles: this.maximumDistanceFromUserInMiles,
        lat: this.currentUser.latitude,
        lng: this.currentUser.longitude
      })
    },
    fetchAllUpcomingEvents: async function () {
      const res = (await fetchEvents('upcoming', e => e.startsAt)).slice(20)
      this.events = []
      // slice doesn't work here because fetchEvents returns an object
      for (let i = 0; i < 20; i++) {
        this.events.push(res[i])
      }
    }
  },
  mounted: function () {
    if (this.events) return

    if (this.isAuthenticated) {
      this.fetchEventsWithinDistance()
    } else {
      this.fetchAllUpcomingEvents()
    }
  }
}
</script>

<style scoped>
.map {
  height:100%;
  width:100%;
}
.body {
  height: 100vh;
  width: 100%;
}
</style>
