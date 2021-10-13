<template>
<div class="body">
  <div class="heading-section">
    <div class="heading-content">
      <h1 class="h1">Request received!</h1>
      <p class="subtitle">We'll be in touch! For a faster response, choose up to {{ maxRecipients }} people to receive your request instantly. (They're all typically available {{ hourSelected }} {{ daySelected }}s.)</p>
    </div><router-link :to="{name: 'Events'}" class="button-back w-inline-block"></router-link>
  </div>
  <div class="list-container">
     <div
     v-for="person in peopleAvailable"
     class="list-item"
     @click="toggleSelected(person.id)"
     >
      <div class="avatar-container"><AvatarImage :person="person" className="image-2" /></div>
      <div class="info-container">
        <h5 class="heading">{{ person.firstName }} {{ person.lastInitial}}. </h5>
        <div class="text-block-3">
          <span class="caption" v-if="person.children.length">Parent to <span v-for="(child, index) in person.children"><span class="child">{{ child.firstName }} <span class="black-50">({{ child.age }})</span></span><span v-if="(index < person.children.length - 1)">, </span>
</span>
</span>
</div>
<!--
        <div class="text-block-2">TODO: insert distance here</div>
      -->
      </div>
      <div class="checkbox-container">
        <span
        class="checkbox-unselected w-inline-block">
        <img
        :src="require(`../assets/${checkImage(isSelected(person.id))}`)"
        class="check-unselected">
      </span>
    </div>
    </div>
    </div>
   <div class="fb-container">
    <div
    @click="submitRequests"
    class="fb-button w-inline-block"
    v-bind:style="{ backgroundColor: buttonColor}"
    >
    <span>
      <img src="@/assets/request-care-white.svg" width="24" height="24" alt="" />
      <span class="fb-button-text">{{ buttonText }}</span>
    </span>
  </div>
  </div>
</div>
</template>

<script>
// todo: filter by availability
// todo: send meessages
// todo: what if there are no people available then in their network? we should make sure there is availability for everys slot

import networks from '@/assets/network-info.json'
import * as Token from '@/utils/tokens.js'
import * as api from '@/utils/api.js'
import AvatarImage from '@/components/base/AvatarImage'
import { mapGetters } from 'vuex'
var moment = require('moment')

export default {
  components: { AvatarImage },
  props: ['dateTimeSelected'],
  data () {
    return {
      people: [],
      peopleSelected: [],
      networks: networks,
      maxRecipients: 3,
      messagesUnsent: null,
      errorSending: false
    }
  },
  methods: {
    toggleSelected: function (id) {
      if (this.isSelected(id)) {
        this.peopleSelected = this.peopleSelected.filter((anId) => anId !== id)
      } else if (this.peopleSelected.length < this.maxRecipients) {
        this.peopleSelected.push(id)
      }
    },
    isSelected: function (id) {
      return this.peopleSelected.includes(id)
    },
    checkImage: function (boolean) {
      if (boolean) {
        return 'check-circle-24.svg'
      } else {
        return 'check-circle-24-gray.svg'
      }
    },
    submitRequests: function () {
      this.messagesUnsent = this.peopleSelected.length
      this.buttonText = 'Sending...'
      this.peopleSelected.map(id => this.submitRequestTo(this.people.find(person => person.id === id)))
    },
    submitRequestTo: function (person) {
      this.startProxySessionAndSendIntroMessage(person).then(data => {
        this.messagesUnsent = this.messagesUnsent - 1
      }, err => {
        console.log(err.stack)
        this.errorSending = true
      })
    },
    messageToProvider: function (provider) {
      return 'Hi ' + provider.firstName + '!! It\'s ' + this.currentUser.firstName + ' from ' + this.network.name + '. I\'m looking for care on ' + this.dateTimeFormatted + '. I saw you were often available at that time, and I was wondering if this might work? Let me know and thanks! \ud83c\udf08\u26a1\ud83e\udd84'
    },
    testApi: function (provider) {
      console.log([
        this.currentUser.id,
        parseInt(provider.id),
        this.messageToProvider(provider)
      ])
    },
    startProxySessionAndSendIntroMessage: function (provider) {
      // init twilio proxy session
      // only provider should get message welcoming them to proxy session
      return api.initProxySession(
        this.currentUser.id,
        parseInt(provider.id),
        this.messageToProvider(provider),
        null // don't send acknowledgement messages because we don't want them to receive multiple messages in this case.
      )
    }
  },
  mounted: function () {
    api.fetchUsersInNetwork(this.network.stub).then(res => {
      this.people = res.filter(person => person.id !== this.currentUser.id)
      this.currentUser = res.find(person => person.id === this.currentUser.id)
    })
  },
  watch: {
    messagesUnsent: function () {
      if (this.messagesUnsent === 0) {
        this.$emit('messagesSent')
      }
    },
    errorSending: function () {
      if (this.errorSending === true) {
        alert('Oops, there was an error sending your requests. Try again?')
      }
    }
  },
  computed: {
    buttonText: function () {
      return 'Send requests'
    },
    messageToFirstProvider: function () {
      return this.messageToProvider(this.people[0])
    },
    timeFormatted: function () {
      return moment(this.dateTimeSelected).format('h:mma')
    },
    dateTimeFormatted: function () {
      return moment(this.dateTimeSelected).format('dddd, MMMM Do,') + ' at ' + this.timeFormatted
    },
    daySelected: function () {
      return moment(this.dateTimeSelected).format('dddd')
    },
    hourSelected: function () {
      return moment(this.dateTimeSelected).format('ha')
    },
    buttonColor: function () {
      let green = '#00be41'
      let gray = '#e5e5e5'
      if (this.peopleSelected.length > 0) {
        return green
      } else {
        return gray
      }
    },
    network: function () {
      let networkId = Token.currentUserNetworkCode(this.$auth)
      return this.networks.find(network => network.stub === networkId)
    },
    peopleAvailable: function () {
      let h = moment(this.dateTimeSelected).hour()
      let d = moment(this.dateTimeSelected).day()
      if (d === 6 || d === 0) {
        return this.people.filter(person => person.availableWeekends)
      } else if (h > 7 && h <= 14) {
        return this.people.filter(person => person.availableMornings)
      } else if (h > 14 && h <= 18) {
        return this.people.filter(person => person.availableAfternoons)
      } else if (h > 18 || h <= 7) {
        return this.people.filter(person => person.availableEvenings)
      } else {
        return []
      }
    },
    ...mapGetters([ 'currentUser' ])
  }
}
</script>

<style scoped>

.body {
  font-family: soleil, sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  height: 100vh;
}

a {
  text-decoration: none;
}

.navbar {
  z-index: 5000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ffc8c8;
}

.menu-button {
  position: fixed;
  left: 14px;
  top: 16px;
  z-index: 1000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0px;
  margin-bottom: 0px;
  padding: 8px;
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
  border-radius: 1000px;
  background-color: #fff;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, .2);
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}

.menu-button.w--open {
  z-index: 1000;
  border-radius: 1000px;
  background-color: #fff;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .08);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.top-line {
  height: 2px;
  background-color: #000;
}

.nav-menu {
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  padding: 72px 0px 3px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  background-color: #fff;
  background-image: url('../assets/cc-logo-horiz-blue.svg');
  background-position: 50% 23px;
  background-size: 130px;
  background-repeat: no-repeat;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, .2);
  opacity: 0.96;
}

.menu-icon-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 24px;
  height: 24px;
  padding: 6px 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  background-color: transparent;
}

.mid-line {
  height: 2px;
  background-color: #000;
}

.bottom-line {
  height: 2px;
  background-color: #000;
}

.bottom-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, .04);
}

.map-container {
  position: relative;
}

.div-spacer {
  height: 45px;
}

.title-bar {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 1000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  width: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: none;
  border-width: 1px;
  border-color: hsla(0, 0%, 100%, .1);
  background-color: rgba(31, 136, 233, .8);
  background-image: none;
  background-size: auto;
  background-repeat: repeat;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
}

.button-back {
  position: absolute;
  left: 0px;
  top: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 56px;
  height: 56px;
  margin-top: 0px;
  margin-bottom: 8px;
  margin-left: 0px;
  padding: 18px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  background-image: url('../assets/close-x-white.svg');
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  color: #1f88e9;
}

.button-back:active {
  background-color: hsla(0, 0%, 100%, .2);
  background-image: url('../assets/close-x-white.svg');
  background-size: 20px;
}

.button-next {
  position: static;
  display: block;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 0px;
  padding: 10px 12px;
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
  border: 1px none #000;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: none;
  color: #64426b;
}

.button-next:active {
  background-color: #64426b;
  color: #fff;
}

.button-next-text {
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.h1 {
  margin-top: 0px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.3px;
}

.step-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
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

.step-text {
  margin-bottom: 12px;
  margin-left: 10px;
}

.image {
  margin-left: -13px;
}

.heading-content {
  margin-bottom: 0px;
  color: #fff;
}

.heading-section {
  position: relative;
  padding: 36px 32px 32px;
  background-color: #1d8be7;
}

.subtitle {
  margin-bottom: 8px;
  color: #fff;
  font-size: 13px;
  line-height: 21px;
  text-align: center;
}

.body {
  padding-bottom: 73px;
  background-color: #1f88e9;
}

.list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  background-color: #fff;
}

.image-2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.list-info-1 {
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  text-align: left;
}

.black-50 {
  color: rgba(0, 0, 0, .5);
}

.text-block-2 {
  color: #0cba52;
  font-size: 10px;
}

.heading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  color: #000;
  font-size: 16px;
  text-align: left;
}

.avatar-container {
  min-width: 40px;
}

.checkbox-container {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.info-container {
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}

.text-block-3 {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, .5);
}

.checkbox-unselected {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-width: 56px;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  color: #1f88e9;
}

.checkbox-unselected:active {
  background-color: rgba(0, 0, 0, .1);
}

.checkbox-selected {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 56px;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  color: #1f88e9;
}

.checkbox-selected:active {
  background-color: rgba(0, 0, 0, .1);
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

@media (max-width: 479px) {
  .title-bar {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .fb-button {
    width: 100%;
    padding-bottom: 17px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .fb-button-text {
    font-weight: 400;
  }
}

</style>
