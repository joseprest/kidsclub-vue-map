<template>
  <StyleWrapper styleIs="editing">
    <div class="onb-body" v-if="user">
      <div class="body">
        <div class="content-wrapper user-profile-wrapper">
          <div class="providerp-provider-info-section">
            <a @click="$router.go(-1)" class="providerp-button-back w-inline-block"><img src="../assets/Arrow-Back-2.svg">
            </a><AvatarImage :person="user" className="avatar-large"/>
            <h1 class="providerp-h1">{{ user.firstName }}</h1>
            <div class="providerp-occupation">{{ employmentDescription }}</div>
            <div v-if="user.languages.length" class="languages">{{ languageText }}</div>
            <div class="providerp-member-since">Member since {{ joinedDateFormatted }}</div>
            <div v-if="user && user.childAges && user.childAges.length > 0" class="providerp-children">
                Parent to <ChildAges :childAges="user.childAges" singular="child" plural="children" />.
            </div>

            <div v-if="user.profileBlurb" class="providerp-chat-bubble-container">
              <div class="providerp-chat-bubble-caret"><img src="../assets/chat-bubble-caret.svg"></div>
              <div class="providerp-chat-bubble-primary">
                <div class="blurb">{{ user.profileBlurb }}</div>
              </div>
            </div>
          </div>
          <div class="providerp-provider-info-bullets">
            <ProviderInfo :person="user" />
          </div>
          <div v-if="user && user.images.length > 0" class="group-title-container-2">
            <h5 class="list-title-2">Photos</h5>
            <Images :images="user.images"/>
          </div>
          <div class="group-title-container-2">
            <h5 class="list-title-2"><span v-if="user.neighborhood">Neighborhood: {{ user.neighborhood }}</span><span v-else>Location</span></h5>
          </div>

          <div class="map-container">
            <GmapMap
              :disableDefaultUI="true"
              :center="userLocation"
              :zoom="13"
              :options="mapOptions"
              style="width: 100%; height: 230px;">
                <GmapMarker
                :position="userLocation"
                :title="user.firstName"
                icon="https://storage.googleapis.com/cottageclass-prod/images/map-radius.png"
                />
            </GmapMap>
          </div>
<!-- Positive reviews -->
          <div class="group-title-container-2">
            <h5 class="list-title-2">Great Experiences</h5>
          </div>
<!-- Leave a review -->

          <div class="providerp-post-comment-container"><a :href="'mailto:contact@cottageclass.com?subject=Great experience with ' + user.firstName + ' ' + user.lastInitial + '. (' + user.id + ')&body=(please%20describe%20your%20great%20experience%20here!)'" class="pprofile-compose-button w-inline-block"><img src="../assets/compose.svg" class="image-5"><div class="pprofile-comment-prompt-button-text">Post a great experience</div></a>
            <div class="providerp-book-care-container" v-if="userAvailableSometimes && !isCurrentUser">
              <router-link
              :to="{ name: 'RequestModal', params: { id: user.id }}"
              class="pprovider-book-care-button w-inline-block">
                <img src="../assets/request-care-white.svg"
                ><div class="pprovider-primary-action-text">Request childcare</div>
              </router-link>
            </div>
          </div>
<!-- Negative reviews (concerns) -->
          <div class="group-title-container-2">
            <h5 class="list-title-2">Concerns</h5>
          </div>
  <!-- concern link -->
          <div class="providerp-post-comment-container"><a :href="'mailto:contact@cottageclass.com?subject=Concern re: ' + user.firstName + ' ' + user.lastInitial + '. (' + user.id + ')&body=(please%20detail%20your%20concern%20here)'" class="pprofile-compose-button w-inline-block"><img src="../assets/compose.svg" class="image-5"><div class="pprofile-comment-prompt-button-text">Post a concern</div></a></div>
          <div class="spacer-100px"></div>
        </div>
        <PageActionsFooter class='edit-button'
          v-if="isCurrentUser"
          buttonText="EDIT"
          @click="goToEdit"/>
      </div>
    </div>
  </StyleWrapper>
</template>

<script>
import Images from '@/components/Images.vue'
import AvatarImage from '@/components/base/AvatarImage'
import * as api from '@/utils/api.js'
import networks from '@/assets/network-info.json'
import ChildAges from '@/components/ChildAges.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import moment from 'moment'
import ProviderInfo from '@/components/base/ProviderInfo.vue'
import PageActionsFooter from '@/components/PageActionsFooter.vue'
import { mapGetters } from 'vuex'

import _ from 'lodash'
import languageList from 'language-list'

export default {
  name: 'ProviderProfile',
  components: { Images, AvatarImage, ChildAges, StyleWrapper, ProviderInfo, PageActionsFooter },
  data () {
    return {
      user: null,
      networks: networks,
      mapOptions:
       { // move this to map component when i separate it.
         'disableDefaultUI': true, // turns off map controls
         'gestureHandling': 'none' // prevents any kind of scrolling
       }
    }
  },
  methods: {
    goToEdit: function () {
      this.$router.push({ name: 'ProfileEdit' })
    }
  },
  mounted: async function () {
    this.user = await api.fetchUser(this.$route.params.id)
  },
  computed: {
    employmentDescription: function () {
      const position = this.user.jobPosition
      const employer = this.user.employer
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
    network: function () {
      let networkId = 'brooklyn-events'
      return this.networks.find(network => network.stub === networkId)
    },
    userAvailableSometimes: function () {
      return this.user.availableEvenings || this.user.availableMornings || this.user.availableAfternoons || this.user.availableWeekends
    },
    userLocation: function () {
      return { lat: parseFloat(this.user.fuzzyLatitude), lng: parseFloat(this.user.fuzzyLongitude) }
    },
    joinedDateFormatted: function () {
      return moment(this.user.createdAt).format('MMMM, YYYY')
    },
    isCurrentUser: function () {
      if (!this.currentUser) { return false }
      return this.currentUser.id.toString() === this.$route.params.id.toString()
    },
    languageText: function () {
      const languageCodes = this.user.languages
      const languages = _.map(languageCodes, languageList().getLanguageName)
      return 'Speaks ' + [languages.slice(0, -1).join(', '), _.last(languages)].join(' and ')
    },
    ...mapGetters([ 'currentUser' ])
  }
}

</script>
<style scoped>

.avatar-large {
  border-radius: 50%;
  width: 100px;
}

.user-profile-wrapper {
  padding-top: 0px !important;
  background-color: #f2f2f2 !important;
}

.body {
  font-family: soleil, sans-serif;
  padding-bottom: 100px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

.times-container {
  width: 100%;
}

.time {
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 4px 6px;
  clear: none;
  border-radius: 2px;
  background-color: rgba(100, 66, 107, .2);
}

.time-tags {
  margin-top: 1px;
  color: #64426b;
  font-size: 9px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.03px;
}

a {
  text-decoration: none;
}

img {
  display: inline-block;
}

.list-container {
  margin-top: 16px;
}

.image {
  width: 40px;
  height: 40px;
  border-radius: 100px;
}

.black-50 {
  color: rgba(0, 0, 0, .5);
}

.button {
  border-radius: 4px;
  background-color: #000;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.spacer-16 {
  width: 16px;
  height: 16px;
}

.map-container {
  position: relative;
}

.list-info-1 {
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  text-align: left;
}

.map {
  height: 250px;
}

.div-block {
  height: 100px;
}

.group-title-container {
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 10px;
  background-color: #f2f2f2;
}

.list-title {
  margin-top: 0px;
  margin-bottom: 0px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

.button-text {
  padding-left: 0px;
  color: #1f88e9;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
}

.div-block-3 {
  margin-top: 9px;
  padding: 11px 16px;
  border-style: none;
  border-color: #000;
  border-radius: 16px;
  background-color: #ddeefb;
}

.text-block-3 {
  font-size: 12px;
  line-height: 15px;
}

.text-span {
  font-weight: 700;
}

.small-text-black-40 {
  margin-top: 7px;
  color: rgba(0, 0, 0, .4);
  font-size: 11px;
}

.link-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #1f88e9;
  font-weight: 700;
}

.time-block {
  color: #2b8eea;
  font-size: 16px;
}

.image-3 {
  padding-left: 9px;
}

.tags-container {
  display: block;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.tag {
  display: inline-block;
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 4px 6px;
  clear: none;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .1);
}

.small-text-upper-black-40 {
  margin-top: 1px;
  color: rgba(0, 0, 0, .4);
  font-size: 10px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.03px;
  text-transform: uppercase;
}

.times-container {
  width: 100%;
}

.time {
  display: inline-block;
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 4px 6px;
  clear: none;
  border-radius: 2px;
  background-color: rgba(100, 66, 107, .2);
}

.small-text-upper-purple {
  color: #64426b;
  font-size: 9px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.03px;
  text-transform: none;
}

.image-tag {
  margin-top: 1px;
  margin-right: 6px;
}

.image-time {
  margin-top: 2px;
  margin-right: 6px;
}

.time-group-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.spacer-300px {
  height: 300px;
}

.list-title-2 {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
}

.group-title-container-2 {
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 16px;
  padding-left: 16px;
  background-color: #f2f2f2;
}

.text-block-5 {
  font-weight: 400;
}

.text-block-6 {
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
}

.div-block-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 85vh;
  margin-top: 24px;
  padding-right: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
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

.div-block-5 {
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

.providerp-button-back {
  width: 24px;
  height: 24px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.providerp-provider-info-section {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px 16px 32px;
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
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}

.providerp-avatar {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}

.providerp-h1 {
  margin-top: 8px;
  margin-bottom: 2px;
  font-size: 20px;
  line-height: 30px;
}

.text-span-2 {
  color: rgba(0, 0, 0, .25);
}

.text-span-3 {
  color: rgba(0, 0, 0, .25);
}

.providerp-occupation, .providerp-member-since, .languages {
  max-width: 500px;
  margin-top: 0px;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

.providerp-children {
  max-width: 500px;
  margin-bottom: 12px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  text-align: center;
}

.providerp-chat-bubble-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 500px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.providerp-chat-bubble-caret {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.providerp-chat-bubble-primary {
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #f3f3f3;
}

.providerp-provider-info-bullets {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}

.providerp-background-check-badge {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 500px;
  background-color: rgba(12, 186, 82, .2);
}

.background-check-text {
  margin-top: 1px;
  color: #0dba52;
  font-size: 10px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.checkmark-image {
  margin-right: 8px;
}

.providerp-background-check-badge-container {
  margin-bottom: 6px;
}

.providerp-avatar-name-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.providerp-post-comment-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}

.spacer-100px {
  height: 100px;
}

.providerp-book-care-container {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-style: none;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1) #000 #000;
  background-color: #fff;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, .08);
}

.pprovider-book-care-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 8px 20px 8px 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: #deedfc;
}

.pprovider-primary-action-text {
  margin-left: 8px;
  color: #1f88e9;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
}

.pprofile-compose-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 8px 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f2f2f2;
}

.pprofile-comment-prompt-button-text {
  margin-top: -2px;
  margin-left: 8px;
  color: rgba(0, 0, 0, .4);
}

.image-5 {
  opacity: 0.3;
}

.check-in-button {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 500;
  margin-right: 168px;
  padding-top: 11px;
  padding-bottom: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(31, 136, 233, .08);
  border-radius: 4px;
  background-color: #deedfc;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
  color: #1f88e9;
  font-size: 13px;
  line-height: 14px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-2 {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 500;
  margin-right: 120px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(31, 136, 233, .08);
  border-radius: 4px;
  background-color: #1f88e9;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
  color: #fff;
  font-size: 13px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-6 {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 58px;
  padding: 9px 15px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.check-in-button-6-text {
  margin-left: 9px;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.text-span-4 {
  font-size: 10px;
  font-weight: 400;
}

.check-in-button-7 {
  position: absolute;
  top: 16px;
  right: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 168px;
  padding: 9px 15px;
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
  border-radius: 4px;
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.check-in-button-7-text {
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-7-image {
  margin-bottom: 4px;
  opacity: 1;
}

.text-span-5 {
  color: hsla(0, 0%, 100%, .5);
  font-size: 10px;
  line-height: 15px;
}

.check-in-button-8 {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 128px;
  margin-bottom: 61px;
  padding: 9px 15px 11px;
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
  border-radius: 4px;
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.text-span-6 {
  color: hsla(0, 0%, 100%, .5);
  font-size: 10px;
}

.check-in-button-8-image {
  margin-bottom: 4px;
  opacity: 1;
}

.check-in-button-8-text {
  margin-top: -5px;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-9 {
  position: absolute;
  top: 16px;
  right: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 65px;
  margin-bottom: 145px;
  padding: 9px 15px 11px;
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
  border-radius: 4px;
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.check-in-button-9-text {
  margin-top: -1px;
  border-radius: 4px;
  color: #fff;
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.avatar-name-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-right: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.div-block-6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 30vh;
  padding: 32px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.image-6 {
  opacity: 0.5;
}

.image-7 {
  margin-top: 1px;
  opacity: 0.5;
}

.text-block-7 {
  line-height: 14px;
  text-align: center;
}

.div-block-7 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.div-block-8 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.providerp-background-check-badge-container2 {
  margin-top: 8px;
  margin-bottom: 6px;
}

@media (max-width: 479px) {
  .tag {
    clear: both;
  }

  .time {
    clear: both;
  }

  .providerp-provider-info-section {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .providerp-provider-info-bullets {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .providerp-post-comment-container {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .spacer-100px {
    height: 100px;
  }
}

/* Remove inner shadow from inputs on mobile iOS */

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
