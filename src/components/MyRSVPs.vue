<template>
  <div class="body">
    <MainNav />
    <div class="content-section background-01">
      <div class="divider-2px"></div>
      <div class="content-container-4 w-container">
        <h1 class="h1-display">My RSVP'ed events</h1>
        <EventList
            :events="events"
            :noEventsMessage="noEventsMessage"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'
import EventList from '@/components/EventList.vue'
import * as api from '@/utils/api.js'
import { mapGetters } from 'vuex'

var moment = require('moment')

export default {
  name: 'MyRSVPs',
  components: { MainNav, Footer, EventList },
  props: ['limitTo'],
  data () {
    return {
      events: null,
      showAllButtonText: 'Show all playdates',
      showShowAllButton: false
    }
  },
  computed: {
    noEventsMessage: () => 'You aren\'t scheduled for any playdates.  Check out some <a href="home">upcoming playdates near you</a>.',
    ...mapGetters(['currentUser', 'isAuthenticated'])
  },
  methods: {
    limitNumberOfEvents: function (events) {
      if (this.limitTo) {
        return events.slice(0, parseInt(this.limitTo))
      } else {
        return events
      }
    },
    isToday: function (date) {
      return moment(0, 'HH').diff(date, 'days') === 0
    },
    formatDate: function (date) {
      return moment(date).format('dddd, MMM Do')
    },
    fetchMyUpcomingParticipatingEvents: function () {
      api.fetchUpcomingParticipatingEvents(this.currentUser.id).then(res => {
        this.events = res
      })
    }
  },
  mounted: function () {
    this.fetchMyUpcomingParticipatingEvents()
  }
}
</script>

<style scoped>
select {
  appearance: menulist;
  --webkit-appearance: menulist;
}

.image-8 {
  margin-bottom: 0;
}

.body {
  all: unset;
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 55px;
  line-height: 44px;
  font-weight: 700;
  text-align: center;
}

a {
  color: #000;
  text-decoration: none;
}

.body {
  overflow: visible;
  background-color: #fff;
  font-family: soleil, sans-serif;
}

.image-2 {
  margin-right: 17px;
  float: left;
  opacity: 0.8;
}

.h1-display {
  margin-bottom: 24px;
  line-height: 66px;
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

.content-container-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 112px 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.image-261 {
  max-width: 90%;
}

.image-262 {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
}

.image-263 {
  min-width: 80px;
  margin-right: 8px;
  margin-left: 8px;
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

.content-container-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 112px 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.content-container-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 32px 32px 112px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
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

.image-264 {
  width: 40px;
  background-color: #fff;
}

.image-265 {
  width: 40px;
}

@media (max-width: 991px) {
  .h1-display {
    font-size: 32px;
    line-height: 42px;
  }

  .content-container-2 {
    padding-top: 100px;
    padding-bottom: 128px;
  }

  .image-263 {
    min-width: 50px;
  }

  .content-container-3 {
    padding-top: 100px;
    padding-bottom: 128px;
  }

  .content-container-4 {
    padding-bottom: 128px;
  }
}

@media (max-width: 767px) {
  .body {
    padding-bottom: 100px;
  }

  .h1-display {
    font-size: 28px;
    line-height: 34px;
  }

  .content-container-2 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .image-263 {
    min-width: 40px;
  }

  .date-title {
    font-size: 22px;
    line-height: 26px;
  }

  .content-container-3 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .content-container-4 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .event-date-section-tittle {
    margin-top: 52px;
  }

  .content-container-2 {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .image-261 {
    max-width: 100%;
  }

  .date-title {
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }

  .content-container-3 {
    padding: 64px 16px;
  }

  .content-container-4 {
    padding: 64px 16px;
  }

  .image-264 {
    width: 32px;
  }

  .image-265 {
    width: 32px;
  }

  .action-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-top: 24px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
</style>
