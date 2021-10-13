<template>
<div class="body-2">
  <MainNav />
  <div class="event-detail-container w-container">
    <div class="event-detail-graphic">
      <EventCategoryIcon
        :category="!!event ? event.activityName : ''"
        width="150"
        height="150"
        />
      </div>
    <div class="div-block-36">

      <h1 class="event-detail-heading">{{ event.name }}</h1>
      <div class="action-bar">
        <div class="host-info"><router-link :to="{ name: 'ProviderProfile', params: { id: event.hostId }}"><AvatarImage className="avatar-large" :person="{facebookUid: event.hostFacebookUid, avatar: event.hostAvatar}"/></router-link>
          <div class="host-info-wrapper">
            <div class="hosted-by">Hosted by <router-link :to="{ name: 'ProviderProfile', params: { id: event.hostId }}" class="host">{{ event.hostFirstName }}</router-link> &amp;
            <ChildAges :childAges="event.hostChildAges" singular="kid" plural="kids"/><span v-if="event.participatingParents && event.participatingParents.length > 0"><Participants :participants="event.participatingParents" /></span><span v-else>.</span></div>
            <div v-if="event.hostVerified" class="background-checked-wrapper"><img src="@/assets/check-green.svg" alt="">
              <div class="background-checked">Background Checked</div>
            </div>
          </div>
        </div>
      </div>
      <div class="guests-container">
        <!-- TODO put in participant info when it's available -->
        <router-link
        v-for="participant in event.participatingParents"
        v-bind:key="participant.id"
        :to="{ name: 'ProviderProfile', params: { id: participant.userId }}"
        class="guest-link w-inline-block">
          <AvatarImage
            className="avatar-32"
            :person="{facebookUid: participant.userFacebookUid, avatar: participant.userAvatar}"/>
          <img src="@/assets/check-circle-24.svg" alt="" class="checkmark-green">
        </router-link>
        <div v-if="event.participatingParents.length" class="guests-text">
          <span v-for="(participant, index) in event.participatingParents.slice(0, 3)">
          <router-link
            :to="{ name: 'ProviderProfile', params: { id: participant.userId }}"
            v-bind:key="participant.id">
            {{ capitalize(participant.userFirstName) }}
          </router-link>
          {{ (index===event.participatingParents.length-1) ? '' : ', ' }}
          </span>
          <span v-if="event.participatingParents.length > 3"> and {{ event.participatingParents.length-3 }} more </span> attending.
        </div>
      </div>
      <div class="button-container-event-detail">
        <EditButton class="button-event-detail"
        v-if="hostIsCurrentUser"
        :eventId="eventId"/>
        <RsvpButton
        v-else
        :userParticipating="event.participated"
        :full="event.full"
        :eventId="eventId"
        />
        <ContactHostButton v-if="!hostIsCurrentUser" class="w-inline-block" :eventId="event.id"/>
      </div>
        <!-- Summary info -->

      <ul class="summary-info">
        <li class="summary-list-item"><img src="@/assets/time-black.svg" alt="" class="summary-icon">
          <div class="summary-text">{{ formatDate(event.startsAt) }} at {{ formatTime(event.startsAt) }}–{{ formatTime(event.endsAt) }}</div>
        </li>
        <li v-if="(event.childAgeMinimum || event.childAgeMaximum) && event.maximumChildren" class="summary-list-item"><img src="@/assets/cake-outline-black.svg" alt="" class="summary-icon">
          <div class="summary-text">Ages {{ event.childAgeMinimum }}-{{ event.childAgeMaximum}} ({{ event.maximumChildren }} kids total)</div>
        </li>
        <li class="summary-list-item"><img src="@/assets/location.svg" alt="" class="summary-icon">
          <div class="summary-text"><span  v-if="event.hostNeighborhood">{{ event.hostNeighborhood }} - {{ event.hostLocality || event.hostSublocality }}, </span>{{ event.hostAdminAreaLevel1 }} <span v-if="distance"> - {{ distance }} miles from you</span></div>
        </li>
      </ul>
    </div>

        <!-- Map -->

  <div class="map">
  <GmapMap
    :disableDefaultUI="true"
    :center="{ lat: event.hostFuzzyLatitude, lng: event.hostFuzzyLongitude }"
    :zoom="13"
    :options="mapOptions"
    style="width: 100%; height: 100%;">
    <GmapMarker
      key="1"
      :position="{ lat: event.hostFuzzyLatitude, lng: event.hostFuzzyLongitude }"
      title="Test"
      icon="https://storage.googleapis.com/cottageclass-prod/images/map-radius.png"
      />
    </GmapMap>
  </div>
  <div class="mobile-cards-wrapper">
      <div class="event-specifics-card"><img src="@/assets/about.svg" width="100" height="100" alt="">
        <div class="card-small-text" v-if="event.activityName && event.food">About</div>
        <div class="card-large-text">Who doesn’t love {{ event.activityName }} &amp; {{ event.food }}? </div>
      </div>
      <div v-if="event.houseRules" class="event-specifics-card"><img src="@/assets/house-rules.svg" width="100" height="100" alt="">
        <div class="card-small-text">House Rules</div>
        <div class="card-large-text">{{ event.houseRules }}.</div>
      </div>
      <div v-if="event.hasPet" class="event-specifics-card"><img src="@/assets/pets.svg" width="100" height="100" alt="">
        <div class="card-small-text">Pets</div>
        <div class="card-large-text">{{ event.petDescription }}</div>
      </div>

      <div class="event-specifics-host-card ">
        <router-link :to="{ name: 'ProviderProfile', params: { id: event.hostId }}" class="host">
          <AvatarImage className="avatar-x-large" :person="{facebookUid: event.hostFacebookUid, avatar: event.hostAvatar}"/>
        </router-link>
        <div class="card-small-text">Host</div>
        <div class="card-large-text">
          <router-link :to="{name: 'ProviderProfile', params: {id: event.hostId}}">{{ event.hostFirstName }}</router-link> &amp; <ChildAges :childAges="event.hostChildAges" singular="child" plural="children" />.
        </div>
        <div class="card-small-text-gray">{{ jobText }}</div>
        <div class="card-large-text">
          <p v-for="paragraph in hostBio">{{ paragraph }}</p>
        </div>
        <div v-if="images && images.length>0" class="image-container">
          <div class="divider-1px"></div>
          <div class="card-section-text">Household Photos</div>
          <Images :images="images" />
        </div>
      </div>

      <!-- second RSVP button -->

      <div class="event-specifics-card" v-if="!event.full && !event.participated && !hostIsCurrentUser">
        <div class="card-large-text">Interested in this event?</div>
        <RsvpButton
        class="rsvp-button-bottom"
        :userParticipating="event.participated"
        :full="event.full"
        :eventId="eventId"
        />
      </div>

      <!-- Sharing ask -->

      <div class="event-specifics-card" v-if="!event.full && !event.participated">
        <div v-if="!hostIsCurrentUser" class="card-large-text">Want to help spread the word?</div>
        <div v-else class="card-large-text">Invite others to your playdate!</div>
          <router-link :to="'/event/' + $route.params.id + '/share'" class="rsvp-button-bottom">
            <a class="share-button w-button">INVITE FRIENDS</a>
          </router-link>
      </div>

    </div>
  </div>

<!-- Footer -->

 <Footer />

</div>
</template>
<script>
// todo: pass "person" object to AvatarImage

import * as api from '@/utils/api.js'
import AvatarImage from '@/components/base/AvatarImage'
import RsvpButton from './RsvpButton.vue'
import ContactHostButton from './ContactHostButton.vue'
import EditButton from './EditButton.vue'
import MainNav from './MainNav.vue'
import Footer from '@/components/Footer.vue'
import EventCategoryIcon from '@/components/EventCategoryIcon.vue'
import ChildAges from '@/components/ChildAges.vue'
import Participants from '@/components/Participants.vue'
import Images from '@/components/Images.vue'

import * as utils from '@/utils/utils.js'
import { mapGetters } from 'vuex'
import _ from 'lodash'

var moment = require('moment')

export default {
  name: 'EventPage',
  components: {
    AvatarImage,
    RsvpButton,
    ContactHostButton,
    MainNav,
    Footer,
    EventCategoryIcon,
    EditButton,
    ChildAges,
    Participants,
    Images
  },
  data () {
    return {
      event: null,
      eventId: this.$route.params.id,
      mapOptions: {
        'disableDefaultUI': true, // turns off map controls
        'gestureHandling': 'none' // prevents any kind of scrolling
      }
    }
  },
  methods: {
    isToday: function (date) {
      return moment(0, 'HH').diff(date, 'days') === 0
    },
    formatDate: function (date) {
      return moment(date).format('ddd, MMM D, YYYY')
    },
    backgroundColor: function (id) {
      let colors = ['#e82d55', '#0cba52', '#aff0fc', '#fd6f77', '#64426b']
      return colors[id % colors.length]
    },
    formatTime: function (time24) {
      return moment(time24).format('LT')
    },
    fetchEvent: async function () {
      this.event = await api.fetchEvent(this.$route.params.id)
      console.log(this.event)
    },
    capitalize: utils.capitalize
  },
  created: function () {
    this.fetchEvent()
  },
  computed: {
    hostIsCurrentUser: function () {
      return this.currentUser && this.event.hostId === this.currentUser.id
    },
    distance: function () {
      if (this.currentUser) {
        return api.distanceHaversine(this.event.hostFuzzyLatitude, this.event.hostFuzzyLongitude, this.currentUser.latitude, this.currentUser.longitude)
      } else {
        return null
      }
    },
    jobText: function () {
      const employer = this.event.hostEmployer
      const position = this.event.hostJobPosition
      if (employer) {
        if (position) {
          return position + ', ' + employer
        } else {
          return employer
        }
      } else {
        if (position) {
          return position
        } else {
          return ''
        }
      }
    },
    images: function () {
      return this.event.hostImages
    },
    hostBio: function () {
      return this.event.hostBlurb
    },
    ...mapGetters(['currentUser'])
  }

}
</script>

<style scoped>
a {
  color: #1f88e9;
  text-decoration: none;
}
.rsvp-button-bottom {
  margin-top: 16px;
}

.body-2 {
  font-family: soleil;
}

a.host {
  color: #1f88e9;
  text-decoration: none;
}

a.host:hover {
  text-decoration: underline;
}

body {
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

.scrolling-wrapper-detail {
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: auto;
  min-height: 100px;
  margin-top: 0px;
  padding-left: 32px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  overflow-x: auto;
  overflow: -moz-scrollbars-none;
}

.scrolling-wrapper-detail::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}

.image-container {
  width: 80%;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 55px;
  line-height: 44px;
  font-weight: 700;
  text-align: center;
}

.body {
  background-color: #fff;
  font-family: soleil, sans-serif;
}

.div-block-32 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.invite-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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

.event-detail-container {
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

.divider-1px {
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
}

.footer-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 112px 32px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer {
  background-color: #fff;
  background-image: url('https://storage.googleapis.com/cottageclass-prod/images/footer-bottom-image-2.svg');
  background-position: 50% -82%;
  background-size: auto;
  background-repeat: no-repeat;
}

.footer-link {
  color: grey;
  text-decoration: none;
}

.footer-link-list-item {
  margin-right: 6px;
  margin-bottom: 0px;
  margin-left: 6px;
  color: #818181;
  list-style-type: none;
}

.footer-unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 21px;
  padding-left: 0px;
}

.footer-social-unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0px;
}

.footer-social-list-item {
  margin-right: 6px;
  margin-left: 6px;
  list-style-type: none;
}

.terms-list-item {
  margin-right: 6px;
  margin-bottom: 8px;
  margin-left: 6px;
  color: #c49696;
  list-style-type: none;
}

.terms-unordered-list {
  position: static;
  bottom: -1px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  padding-left: 0px;
}

.terms-link {
  color: #fff;
  font-size: 11px;
  text-align: center;
  text-decoration: none;
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

.unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0px;
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
  list-style-type: none;
}

.event-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
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
  min-width: 180px;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.avatar-small {
  border-radius: 50%;
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
  line-height: 17px;
}

.share-button {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
  color: #fff;
}

.share-button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.share-button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
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

.more-link {
  color: #1f88e9;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
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

.host-info-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.hosted-by {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 0px;
  font-size: 15px;
  line-height: 22.4px;
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

.avatar-large {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  max-width: unset;
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

.map {
  height: 300px;
  min-width: 100%;
  background-position: 50% 50%;
  background-size: cover;
}

.event-specifics-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 32px 32px 50px;
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
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
}

.card-large-text {
  width: 80%;
  margin-top: 16px;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
}

.card-small-text {
  margin-top: 8px;
  font-size: 13px;
  line-height: 20px;
}

.card-small-text-gray {
  margin-top: 0px;
  color: #969696;
  font-size: 13px;
  line-height: 20px;
}

.button-bottom-event {
  margin-top: 24px;
  padding: 12px 91px;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
}

.button-bottom-event:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.avatar-x-large {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.mobile-cards-wrapper {
  width: 100%;
}

.unordered-list-2 {
  padding-left: 0px;
  list-style-type: none;
}

.link-block-3 {
  width: 100%;
}

.link-block-4 {
  color: #000;
  text-decoration: none;
}

.link-block-4:hover {
  text-decoration: underline;
}

.button-container-event-detail {
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  width: 100%;
  margin-top: 20px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
}

.button-container-event-detail > * {
  margin-right: 8px;
}
.avatar-32 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.checkmark-green {
  position: absolute;
  left: auto;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 12px;
  height: 12px;
}
.guest-link {
  position: relative;
  margin-right: 4px;
  margin-bottom: 4px;
}
.guests-container {
  width: 100%;
  margin-top: 20px;
}
.event-household-photo {
  max-height: 100px;
  min-height: 100px;
  padding-right: 8px;
}

.card-section-text {
  margin-top: 16px;
  font-size: 11px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-align: center;
}
.event-specifics-host-card p {
  margin-bottom: 28px;
}
.event-specifics-host-card {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 32px 32px 60px;
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
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
}

@media (max-width: 991px) {
  .div-block-32 {
    width: 40%;
    padding: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 0 14px 20px 0 rgba(0, 0, 0, .11);
  }

  .event-detail-container {
    padding-top: 32px;
    padding-bottom: 128px;
  }

  .footer {
    background-position: 50% -84%;
    background-size: auto;
  }

  .unordered-list {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
}

@media (max-width: 767px) {
  .div-block-32 {
    width: 260px;
    margin-right: 32px;
  }

  .event-detail-container {
    padding: 0px 0px 100px;
  }

  .footer-container {
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .footer {
    background-position: 50% -80%;
    background-size: auto;
  }

  .list-item {
    width: auto;
    margin-bottom: 8px;
  }

  .unordered-list {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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

  .card-large-text {
    width: 88%;
  }

  .mobile-cards-wrapper {
    padding-right: 16px;
    padding-left: 16px;
  }

  .button-container-event-detail {
    width: 100%;
    margin-top: 32px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

@media (max-width: 479px) {
  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .event-detail-container {
    padding-bottom: 32px;
    background-color: #f4f4f4;
  }

  .footer-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .footer {
    background-position: 50% 268%;
    background-size: auto;
    display: none;
  }

  .footer-link-list-item {
    margin-bottom: 7px;
  }

  .footer-unordered-list {
    margin-bottom: 26px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .terms-list-item {
    text-align: center;
  }

  .terms-unordered-list {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .terms-link {
    text-align: center;
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

  .button {
    width: 100%;
    margin-top: 20px;
  }

  .div-block-36 {
    padding: 24px;
  }

  .event-detail-heading {
    font-size: 20px;
    line-height: 26px;
  }

  .card-large-text {
    width: 100%;
    font-size: 16px;
    line-height: 26px;
  }

  .button-bottom-event {
    width: 100%;
    margin-top: 20px;
  }

  .button-container-event-detail > * {
    width: 100%;
    margin-right: 0px;
  }

  .button-container-event-detail {
    width: 100%;
    margin-top: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .button-event-detail {
    width: 100%;
    margin-top: 0px;
    margin-left: 8px;
    padding-top: 10px;
    padding-bottom: 11px;
  }
}

</style>
