<template>
<router-link :to="{ name: 'EventPage', params: { id: event.id }}">
  <li class="event-list-item">
      <div class="event-list-item-graphic" :style="{ backgroundColor: backgroundColor(index)}">
        <EventCategoryIcon :category="event.activityName" width="100" height="100" />
      </div>
      <div class="event-list-item-content">
        <div v-if="images.length > 0" class="spacer w-hidden-main w-hidden-medium"></div>
        <router-link
          :to="{ name: 'EventPage', params: { id: event.id }}"
          class="link-block-4 w-inline-block">
          <h2 class="event-heading">{{ event.name }}</h2>
        </router-link>
        <div class="event-summary">
          <div class="event-time">
            {{ formatDate(event.startsAt) }}, {{ formatTime(event.startsAt) }} – {{ formatTime(event.endsAt) }}
          </div>
          <div class="event-ages">
            Ages {{event.childAgeMinimum}}-{{event.childAgeMaximum}} ({{event.maximumChildren}} kids total)
          </div>
          <div class="event-location">
            {{ event.hostNeighborhood || event.hostLocality || event.hostAdminAreaLevel1 }}
            <span>{{ distanceDescription }}</span>
          </div>
        </div>
        <div v-if="images.length > 0" class="scrolling-wrapper">
          <img
          v-for="image in images"
          :src="image" alt="" class="event-household-photo">
        </div>
        <div class="action-bar">
          <div class="host-container">
            <div class="host-info">
            <router-link :to="{ name: 'ProviderProfile', params: { id: event.hostId }}">
              <AvatarImage class="avatar-small" :person="{facebookUid: event.hostFacebookUid, avatar: event.hostAvatar}" />
            </router-link>
            <div class="text-block">
              Hosted by
            <router-link
              :to="{ name: 'ProviderProfile', params: { id: event.hostId }}"
              class="host-name link">
                {{ event.hostFirstName }}
            </router-link> &amp;
            <ChildAges :childAges="event.hostChildAges" singular="kid" plural="kids"/>.
          </div>
          </div>

          <div class="host-meta" v-if="employmentDescription || event.hostVerified">
            <div class="host-occupation">{{employmentDescription}}</div>
            <div class="background-checked-wrapper" v-if="event.hostVerified">
              <img src="@/assets/check-green.svg" alt="">
              <div class="background-checked">Background Checked</div>
            </div>
          </div>
        </div>
        <RsvpButton v-if="showRsvpButton" :userParticipating="event.participated" :full="event.full" :eventId="event.id" />
        <EditButton v-if="showEditButton" :eventId="event.id" />
        </div>
      </div>
    </li>
</router-link>
</template>

<script>

import AvatarImage from '@/components/base/AvatarImage'
import RsvpButton from './RsvpButton.vue'
import EditButton from './EditButton.vue'
import EventCategoryIcon from '@/components/EventCategoryIcon.vue'
import ChildAges from '@/components/ChildAges.vue'
import { mapGetters } from 'vuex'

var moment = require('moment')

export default {
  name: 'EventListItem',
  props: ['event', 'index', 'showRsvpButton', 'showEditButton'],
  components: { AvatarImage, RsvpButton, EventCategoryIcon, EditButton, ChildAges },
  methods: {
    backgroundColor: function (index) {
      let colors = ['#e82d55', '#0cba52', '#aff0fc', '#fd6f77', '#64426b']
      return colors[index % colors.length]
    },
    formatTime: function (date) {
      return moment(date).format('LT')
    },
    formatDate: function (date) {
      return moment(date).format('MMM D')
    },
    iconUrl: function (imageName) {
      return require('@/assets/' + imageName)
    },
    iconImage: function (category) {
      switch (category) {
        case 'movie night':
          return 'movie-camera.svg'
        case 'arts & crafts':
          return 'artist-palette.svg'
        case 'games & puzzles':
          return 'chess-pawn.svg'
        case 'board games':
          return 'chess-pawn.svg'
        case 'baking':
          return 'birthday-cake.svg'
        case 'book club':
          return 'books.svg'
        default:
          return 'grinning-face-with-smiling-eyes.svg' // party-popper.svg
      }
    }
  },
  computed: {
    employmentDescription: function () {
      const position = this.event.hostJobPosition
      const employer = this.event.hostEmployer
      if (position && employer) {
        return position + ', ' + employer
      } else if (position) {
        return position
      } else if (employer) {
        return employer
      } else {
        return null
      }
    },
    distanceDescription: function () {
      const distance = this.distanceFromCurrentUser(this.event.hostFuzzyLatitude, this.event.hostFuzzyLongitude)
      if (distance) {
        return `- ${distance} miles from you`
      } else {
        return null
      }
    },
    images: function () {
      return this.event.hostImages
    },
    ...mapGetters([ 'distanceFromCurrentUser' ])
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.delete-event-button {
  padding: 0px 4px;
  margin-bottom: -22px;
  border-radius: 1px;
  background-color: #ff0000;
  text-align: center;
  color: #fff;
}

.delete-event-button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.delete-event-button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.host-name {
  color: #1f88e9;
}

.avatar-small {
  width: 40px;
  height: 40px;
  max-width: 40px;
  border-radius: 50%;
}

.host-meta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-left: 4px solid rgba(0, 0, 0, .15);
}

.host-container {
  padding-right: 24px;
}

.host-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.host-occupation {
  margin-bottom: 4px;
  color: #858585;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
}

.text-block {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 10px;
  line-height: 17px;
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

.body {
  overflow: visible;
  background-color: #fff;
  font-family: soleil, sans-serif;
}

.div-block-32 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.div-block-33 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 99px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 28%;
  margin: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  list-style-type: none;
}

.event-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
}

.event-list-item-graphic {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 180px;
  min-width: 200px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #cbcbcb;
}

.event-list-item-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.event-heading {
  margin-top: 0px;
  margin-bottom: 6px;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.5px;
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

.host-info {
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #333;
}

.event-time {
  color: #333;
}

.event-summary {
  color: #333;
}

.event-time {
  margin-bottom: 4px;
  font-size: 13px;
  line-height: 17px;
}

.event-location {
  margin-bottom: 16px;
}

.text-block {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 10px;
  flex: 1;
  line-height: 17px;
}

.event-summary {
  width: 100%;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.body-2 {
  background-color: #f6f6f6;
}

.event-detail-graphic {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 240px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #e82d55;
}

.div-block-36 {
  width: 100%;
  padding: 32px;
  background-color: #fff;
}

.event-detail-heading {
  margin-top: 0px;
  margin-bottom: 6px;
  font-size: 35px;
  line-height: 49px;
  text-align: left;
  letter-spacing: -0.5px;
}

.hosted-by {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 0px;
  font-size: 15px;
  line-height: 22.4px;
}

.summary-info {
  margin-top: 32px;
  padding-left: 0px;
  list-style-type: none;
}

.summary-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.summary-text {
  margin-left: 10px;
}

.link-block-4 {
  color: #000;
  text-decoration: none;
}

.link-block-4:hover {
  text-decoration: underline;
}

.heading-2 {
  margin-top: 0px;
  font-size: 24px;
}

.scrolling-wrapper {
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex !important;
  overflow: hidden;
  width: auto;
  min-height: 100px;
  margin-top: 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}

.scrolling-wrapper::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}

.event-household-photo {
  max-height: 100px;
  min-height: 100px;
  padding-right: 8px;
}

@media (max-width: 991px) {
  .div-block-32 {
    width: 40%;
    padding: 24px 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-top: 1px solid #f4f4f4;
    background-color: #fff;
    box-shadow: 0 14px 20px 0 rgba(0, 0, 0, .11);
  }

  .scrolling-wrapper {
    margin-top: 16px;
  }
}

.background-checked {
  margin-left: 4px;
  padding-left: 0px;
  color: #000;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.background-checked-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}


@media (max-width: 767px) {
  .body {
    padding-bottom: 100px;
  }

  .event-list-item-content {
    position: relative;
    padding: 24px;
  }

  .spacer {
    height: 100px;
    margin-bottom: 12px;
  }

  .div-block-32 {
    width: 260px;
    margin-right: 32px;
  }

  .list-item {
    width: auto;
    margin-bottom: 22px;
  }

  .event-list-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .event-list-item-graphic {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
  }

  .event-detail-graphic {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
  }

  .heading-2 {
    font-size: 20px;
    line-height: 26px;
  }

  .div-block-37 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .scrolling-wrapper {
    position: absolute;
    left: 0px;
    top: 5px;
    margin-top: 16px;
    padding-right: 24px;
    padding-left: 24px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .event-heading {
    font-size: 18px;
    line-height: 25px;
  }

  .action-bar {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .div-block-36 {
    padding: 24px;
  }

  .event-detail-heading {
    font-size: 20px;
    line-height: 26px;
  }

  .heading-2 {
    text-align: center;
  }

  .div-block-37 {
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

}
</style>
