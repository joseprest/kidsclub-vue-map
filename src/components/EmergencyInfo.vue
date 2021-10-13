<template>
<div class="body">
  <div class="title-bar-container">
    <router-link
    :to="{ name: 'Events'}"
    class="title-bar-action-l w-inline-block">
      <img src="../assets/Arrow-Back-2.svg">
    </router-link>
    <h5 class="heading-3">Emergency Contacts</h5><a href="#" class="title-bar-action-2 w-inline-block"></a></div>

 <!-- Note $route.params for pulling in data. I guess I can pull in people again. -->
  <div class="emergency-contact-parent-summary"><AvatarImage :person="person" className="ec-parent-avatar" />
    <h5 class="heading">{{ person.firstName}} {{ person.lastInitial }}.</h5>
    <div class="ec-parent-summary-phone"><a :href="'tel:' + person.phone">{{ person.phone }}</a></div>
    <div class="list-info-1">
      <!-- List children, possibly re-use this component-->
      <span v-for="(child, index) in person.children">{{ child.firstName }} <span class="black-50">{{ child.age }}</span><span v-if="(index < person.children.length - 1)">, </span></span>
    </div>
    <div class="ec-parent-summary-action-button-container">
      <a :href="'sms:' + person.phone" class="ec-parent-summary-button w-inline-block"><img src="../assets/chat.svg"><div class="ec-parent-summary-button-text">Text</div></a>
    <a :href="'tel:' + person.phone" class="ec-parent-summary-button-2 w-inline-block"><img src="../assets/call-green.svg"><div class="ec-parent-summary-button-text-2">Call</div></a></div>
  </div>
  <div class="group-title-container-2" v-if="person.emergencyContacts">
    <h5 class="list-title-2">Other Emergency Contacts</h5>
  </div>
  <!-- Emergency contact info -->
  <div v-for="contact in person.emergencyContacts" class="list-item-4-container">
    <div class="name-and-caption">
      <h5 class="heading contact-name">{{ contact.name }}</h5>
      <h5 class="caption-2">{{ contact.relationship }}</h5>
      <div class="phone-text">{{ contact.phone }}</div>
    </div><a :href="'tel:' + contact.phone" class="list-item-4-action-right w-inline-block"><img src="../assets/call-green.svg" class="image-4"></a>
</div>
  <!-- Doctor contact info -->
  <div v-for="contact in person.doctors" class="list-item-4-container">
    <div class="name-and-caption">
      <h5 class="heading contact-name">{{ contact.name }}</h5>
      <h5 class="caption-2">Physician</h5>
      <div class="phone-text">{{ contact.phone }}</div>
    </div><a :href="'tel:' + contact.phone" class="list-item-4-action-right w-inline-block"><img src="../assets/doctor-2.svg" class="image-4"><img src="../assets/call-green.svg" class="image-4"></a>
</div>
  <!-- Medical info for each kid -->

  <div class="group-title-container-2">
    <h5 class="list-title-2">Medical &amp; Essential Information</h5>
  </div>
  <div class="list-item-5" v-for="child in person.children">
    <h5 class="heading">{{ child.firstName }}</h5>
    <h5 class="caption-2">Age {{ child.age }} | Born {{ child.birthday }}</h5>
    <div class="label-description-block" v-if="child.allergies">
      <div class="text-block-5">Allergies</div>
      <div class="text-block-6">{{ child.allergies }}</div>
    </div>
    <div class="label-description-block" v-if="child.medicalNeeds">
      <div class="text-block-5">Medical Needs</div>
      <div class="text-block-6">{{ child.medicalNeeds }}</div>
    </div>
    <div class="label-description-block" v-if="child.otherNotes">
      <div class="text-block-5">Other Notes</div>
      <div class="text-block-6">{{ child.otherNotes }}</div>
    </div>
  </div>
  <div class="spacer-300px"></div>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</div>
</template>

<script>
// todo
// finish adding phone numbers etc
// add data to json
// add live data here

import * as Token from '@/utils/tokens.js'
import AvatarImage from '@/components/base/AvatarImage'
import * as api from '@/utils/api.js'
import networks from '@/assets/network-info.json'

export default {
  name: 'EmergencyInfo',
  components: { AvatarImage },
  data () {
    return {
      people: [],
      networks: networks
    }
  },
  mounted: function () {
    api.fetchUsersInNetwork(this.network.stub).then(res => {
      this.people = res
    })
  },
  computed: {
    network: function () {
      let networkId = Token.currentUserNetworkCode(this.$auth)
      return this.networks.find(network => network.stub === networkId)
    },
    person: function () {
      return this.people.find(person => person.id === this.$route.params.id) // computes person. this isn't efficient but simplifies interaction with the API.
    }
  }
}
</script>

<style scoped>
.contact-name {
  text-transform: capitalize;
}

body {
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

a {
  text-decoration: none;
}

.list-container {
  margin-top: 16px;
}

.list-item-1-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 4px;
  padding: 24px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: none;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  background-color: #fff;
}

.image {
  width: 40px;
  height: 40px;
  border-radius: 100px;
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
  font-size: 16px;
  text-align: center;
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

.list-info-1 {
  font-size: 13px;
}

.body {
  background-color: #f2f2f2;
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

.title-bar-container {
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
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}

.list-item-1-button {
  margin-left: 6px;
  border-radius: 4px;
  color: #1f88e9;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.heading-3 {
  text-align: left;
}

.title-bar-action-2 {
  width: 24px;
  height: 24px;
}

.title-bar-action-l {
  width: 24px;
  height: 24px;
}

.text-span {
  font-weight: 700;
}

.link-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #1f88e9;
  font-weight: 700;
}

.image-3 {
  padding-left: 9px;
}


.title-bar-and-action {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 12px 16px 6px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.name-and-caption {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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

.caption {
  margin-top: 0px;
  margin-bottom: 0px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

.list-item-3-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 16px;
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
  border-style: none none solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  background-color: #fff;
}

.list-item-3-title-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.list-item-3-heading {
  margin-left: 12px;
}

.list-item-3-child-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-left: 16px;
}

.list-item-3-link-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 48%;
  padding: 16px;
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
  background-color: #aff0fc;
}

.note-container {
  display: block;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px;
  background-color: #fff;
  color: red;
}

.note {
  padding: 16px;
  border-style: solid;
  border-width: 4px;
  border-color: rgba(191, 43, 252, .09);
  background-color: #f6e7ff;
  color: #c200ff;
  font-size: 11px;
  line-height: 15px;
}

.text-block-4 {
  padding: 16px;
}

.note-text {
  padding: 16px;
  font-size: 10px;
  line-height: 15px;
}

.body-2 {
  background-color: #ddd;
}

.spacer-300px {
  height: 300px;
}

.emergency-contact-parent-summary {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 24px 32px;
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
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}

.ec-parent-avatar {
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
}

.ec-parent-summary-phone {
  margin-bottom: 4px;
}

.ec-parent-summary-action-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 150px;
  margin-top: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ec-parent-summary-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 16px;
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
  background-color: #deedfc;
}

.ec-parent-summary-button-text {
  color: #1f88e9;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
}

.ec-parent-summary-button-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 16px;
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
  background-color: #daf2e4;
}

.ec-parent-summary-button-text-2 {
  color: #2aba5c;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
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

.list-item-4-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  background-color: #fff;
}

.phone-text {
  color: #0cba52;
}

.caption-2 {
  margin-top: 0px;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
}

.list-item-4-action-right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
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
  background-color: hsla(0, 0%, 100%, .15);
}

.label-description-block {
  margin-top: 16px;
}

.text-block-5 {
  font-weight: 400;
}

.text-block-6 {
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
}

.list-item-5 {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 8px;
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
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  background-color: #fff;
}

@media (max-width: 479px) {
  .list-item-1-container {
    padding: 16px;
  }

  .title-bar-container {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .name-and-caption {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .caption {
    text-align: left;
  }

  .list-item-4-container {
    padding: 16px;
  }

  .caption-2 {
    text-align: left;
  }

  .list-item-5 {
    padding: 16px;
  }
}

</style>
