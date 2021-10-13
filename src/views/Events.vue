<template>
  <div class="body">
    <MainNav />
    <div class="content-section background-01">
      <div class="divider-2px"></div>
      <div class="top-container w-container">
        <h1 class="title">Find nearby playdates</h1>
        <div class="page-subtitle">The hosts of the playdates below are looking to meet other nearby parents. <strong>RSVP, or reach out &amp; introduce yourself</strong>.</div>
      </div>
      <div class="main-container">
        <div class="map-list-container">
          <EventListMap
            class="map"
            :events="events"
            @maxDistanceSet="updateEventsForZoomLevel($event)"
            :center="center"
          />
          <div class="list-container w-container">
            <EventList
              class="list"
              :events="events"
              :noEventsMessage="noEventsMessage"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import EventList from '@/components/EventList.vue'
import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'
import EventListMap from '@/components/EventListMap.vue'
import { fetchEvents } from '@/utils/api.js'
import { mapGetters } from 'vuex'

var moment = require('moment')

export default {
  name: 'Events',
  components: { EventList, MainNav, Footer, EventListMap },
  data () {
    return {
      maximumDistanceFromUserInMiles: '5',
      showAllButtonText: 'Show all playdates',
      showShowAllButton: false,
      noEventsMessage: 'Sorry, there are no upcoming playdates in your area'
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
      'distanceFromCurrentUser', 'currentUser', 'isAuthenticated', 'events'
    ])
  },
  watch: {
    maximumDistanceFromUserInMiles: function () {
      this.fetchEventsWithinDistance()
    }
  },
  methods: {
    updateEventsForZoomLevel: async function (e) {
      this.$store.dispatch('fetchUpcomingEventsWithinDistance', { miles: e.miles, lat: e.center.lat(), lng: e.center.lng() })
    },
    isToday: function (date) {
      return moment(0, 'HH').diff(date, 'days') === 0
    },
    formatDate: function (date) {
      return moment(date).format('dddd, MMM Do')
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
    if (this.isAuthenticated) {
      this.fetchEventsWithinDistance()
    } else {
      this.fetchAllUpcomingEvents()
    }
  }
}
</script>

<style scoped>

.body {
  all: unset;
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
}

.page-subtitle {
  font-size: 15px;
  line-height: 19px;
}

.map-list-container {
  display: flex;
  flex-direction: row-reverse;
  margin-right: auto;
  margin-left: auto;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 36px;
  font-weight: bold;
}

a {
  color: #000;
  text-decoration: none;
}

.button {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
  color: white;
}

.button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.body {
  overflow: visible;
  background-color: #fff;
  font-family: soleil, sans-serif;
}

.content-section {
  display: block;
  margin-top: 0px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
}

.content-section.background-01 {
  background-color: #f6f6f6;
}

.divider-2px {
  width: 100%;
  height: 2px;
  background-color: #f3f3f3;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.events-list-wrapper {
  width: 100%;
}

.event-date-section-tittle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 68px;
  margin-bottom: 16px;
  padding: 16px 16px 16px 0px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
}

.date-title {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}

.bold-text {
  color: #ff6550;
}

.more-link {
  color: #1f88e9;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
}

.body-2 {
  background-color: #f6f6f6;
}

.list-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 568px;
  min-height: 100px;
  padding-right: 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: transparent;
}

.date-text-wrapper {
  padding-left: 16px;
}

.event-date-section-more-events {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  padding: 16px 16px 16px 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
}

.map {
  position: sticky;
  top: 32px;
  display: block;
  width: 320px;
  height:438px;
  clear: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.top-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 32px;
  padding-bottom: 24px;
  padding-left: 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.main-container {
  position: relative;
  min-height: 800px;
  display: flex;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

@media (max-width: 991px) {
  .map {
    position: relative;
    top: 0;
    width: 100%;
    height: 200px;
    cursor:s-resize;
  }
  .list-container {
    width:100%;
    padding-top: 20px;
    padding-right: 0px;
    padding-bottom: 128px;
  }
  .map-list-container {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .main-container {
    padding: 0px;
  }
}

</style>
