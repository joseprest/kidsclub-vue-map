<template>
  <div class="events-list-wrapper">
    <LoadingSpinner v-if="awaitingEvents"/>
    <p v-if="noEvents" v-html="noEventsMessage"></p>
    <div v-for="(event, index) in events">
      <div
          v-if="showDates && (index === 0 || (formatDate(event.startsAt) !== formatDate(events[index - 1].startsAt)))"
          class="event-date-section-tittle">
        <img src="@/assets/date-outline-white-oval.svg" alt="" class="image-264">
        <div class="date-text-wrapper">
          <div class="date-title">
            <span v-if="isToday(event.startsAt)">
              <strong class="bold-text">Today</strong>,
            </span>
            {{ formatDate(event.startsAt) }}
          </div>
        </div>
      </div>
      <EventListItem
        :event="event"
        :index="index"
        :key="index"
        :showRsvpButton="currentUser === null || currentUser.id !== event.hostId"
        :showEditButton="isAuthenticated && currentUser.id === event.hostId"
        :distance="distanceFromCurrentUser(event.hostFuzzyLatitude,
                                           event.hostFuzzyLongitude)"
      />
    </div>
  </div>
</template>

<script>
import EventListItem from '@/components/EventListItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { mapGetters } from 'vuex'

var moment = require('moment')
export default {
  name: 'EventList',
  components: { EventListItem, LoadingSpinner },
  props: {
    noEventsMessage: {},
    events: {},
    showDates: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    formatDate: function (date) {
      return moment(date).format('dddd, MMM Do')
    },
    isToday: function (date) {
      return moment(0, 'HH').diff(date, 'days') === 0
    }
  },
  computed: {
    awaitingEvents: function () {
      return this.events === null
    },
    noEvents: function () {
      return this.events !== null && this.events.length === 0
    },
    ...mapGetters(['currentUser', 'distanceFromCurrentUser', 'isAuthenticated'])
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
  margin-top: -84px;
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

  .events-list-wrapper {
    margin-top: -48px;
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
}
</style>
