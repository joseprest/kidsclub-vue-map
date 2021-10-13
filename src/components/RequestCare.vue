<template>
<div>
   <MainNav />
  <StyleWrapper styleIs="editing">
    <!-- wrapper for desktop screens -->

    <div class="onb-body">
      <div class="body">
        <div class="content-wrapper user-profile-wrapper">
<!-- the map! -->
  <div class="map-container">
  <GmapMap
    :disableDefaultUI="true"
    :center="currentUserLocation"
    :zoom="mapZoomValue"
    :options="mapOptions"
    style="width: 100%; height: 180px;">
      <GmapMarker
      v-for="person in peopleAvailable"
      :key="person.id"
      :position="person.location"
      :title="person.firstName"
      :icon="person.facebookMapIcon"
      @click="$router.push({name: 'ProviderProfile', params: { id: person.id }})"
      />
    </GmapMap>
  </div>

  <!-- the list -->

  <div class="list-container">
    <RequestCareProviderItem v-for="person in peopleAvailable"
    :person="person"
    :key="person.id"
    />
  </div>
  <!-- share button -->
  <div class="invite-friends-container">
    <h5 class="heading">Want more people you know?</h5>
    <div class="spacer-16"></div>
  <ShareButton
  buttonText="Invite Friends"
  shareTitle="Want to share childcare with me?"
  shareText="I'm sharing childcare with a small circle of parents and friends. If you'd like to join sign up here!"
  shareUrl="https://www.kidsclub.io/"/>
  </div>
          </div></div>
    <br><br>
    <h5 class="google-maps-required-text">Map data &#169; 2018 Google (<a href="https://www.google.com/intl/en-US_US/help/terms_maps.html">terms of use</a> - <a href="https://www.google.com/maps/@40.6782,-73.9442,12z/data=!10m2!1e3!2e10!12b1?rapsrc=apiv3">report a map error</a>)</h5>

 <!-- request care button -->

   <div class="fb-container">
    <router-link to="/request-create" class="fb-button w-inline-block"><span><img src="@/assets/request-care-white.svg" width="24" height="24" alt="" /><span class="fb-button-text">Request care</span></span></router-link>
</div>
  </div>

  </StyleWrapper>
</div>

</template>

<script>
import MainNav from './MainNav.vue'
import RequestCareProviderItem from '@/components/RequestCareProviderItem.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import ShareButton from '@/components/ShareButton.vue'
import networks from '@/assets/network-info.json'
import { mapGetters } from 'vuex'
import * as api from '@/utils/api.js'

export default {
  name: 'RequestCare',
  components: { RequestCareProviderItem, ShareButton, MainNav, StyleWrapper },
  data () {
    return {
      people: [], // gets updated on mount by fetchUsersInNetwork
      networks: networks, // to bring from import into vue model
      mapOptions: { // move this to map component when i separate it.
        'disableDefaultUI': true, // turns off map controls
        'gestureHandling': 'greedy' // allows one finger pan.
      },
      mapZoomValue: 13
    }
  },
  methods: {
    requestCare: function () {
      // stub
      console.log('open request care screen')
    }
  },
  mounted: function () {
    api.fetchUsersWithinDistance(10, this.currentUser.latitude, this.currentUser.longitude).then(res => {
      this.people = res
    })
  },
  computed: {
    peopleAvailable: function () {
      return this.people.filter(person => person.availableMornings || person.availableAfternoons || person.availableEvenings || person.availableWeekends)
    },
    providersSectionTitle: function () {
      return 'People in "' + this.network.name + '"'
    },
    currentUserLocation: function () {
      return { lat: parseFloat(this.currentUser.latitude), lng: parseFloat(this.currentUser.longitude) }
    },
    ...mapGetters(['currentUser'])
  }
}
</script>

<style scoped>

.google-maps-required-text {
  text-align: center;
  margin: 0 auto 0 auto;
  font-weight: normal;
  opacity: .5;
}

.user-profile-wrapper {
  padding-top: 0px !important;
  background-color: #f2f2f2 !important;
  min-height: unset;
}

.invite-friends-container {
  font-family: soleil;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 24px 16px;
  padding: 40px 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
}

.group-title-container {
  padding-top: 24px;
}

.fb-container {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 10px;
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
  background-color: #fff;
  box-shadow: 0 -1px 8px 0 rgba(0, 0, 0, .05);
}

.fb-button {
  text-align: center;
  max-width: 500px;
  width: 100%;
  padding: 12px 24px 12px 16px;
  border-radius: 4px;
  background-color: #64426B;
  color: #fff;
  text-decoration: none;
}

.fb-button:active {
  background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .15));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .15));
}

.fb-button-text {
  margin-left: 12px;
  font-size: 14px;
  text-align: left;
  letter-spacing: 0.4px;
  text-decoration: none;
}

.hideDateTimePlaceholder {
  display: none;
}

.timePlacholderText {
  color: #1c8fe5;
}

.calendar-button-2 {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  width: 56px;
  height: 56px;
  clear: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 100px;
  background-color: #1c8fe5;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

#clock-button {
  position: absolute;
  top: 170px;
  right: 36px;
  z-index: 8;
  filter: drop-shadow(2px 2px 2px #888);
}

select {
  color: #2b8eea;
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  background-color: transparent;
  height: 30px;
  z-index: 1;
  margin-left: auto;
  margin-right: 2px;
  text-transform: uppercase;
}

#time-selected {
  position: absolute;
  top: 190px;
  right: 15px;
  z-index: 8;
  margin-top: -4px;
  color: #1f88e9;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
}

/* Availability container pull this out to component */

.landing-page-v2-h1 {
  margin-top: 0px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
}

.lpv2-choose-time-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
}

.lpv2-choose-time-button-text {
  margin-right: 16px;
  margin-left: 16px;
  color: #1c8fe5;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.div-block-8 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: unset;
  background-color: unset;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.availability-container-v2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 24px 16px;
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
  background-color: #fff;
  text-align: left;
}

@media (max-width: 479px){
  .lpv2-choose-time-button {
    min-width: 100%;
  }
}

h5.heading-2-strong {
margin-top: 0px;
margin-bottom: 0px;
color: rgba(0, 0, 0, .5);
font-size: 13px;
font-weight: 700;
text-align: center;
}

.time-block {
  color: #2b8eea;
  font-size: 16px;
}

.availability-container a {
  text-decoration: none;
}
</style>
