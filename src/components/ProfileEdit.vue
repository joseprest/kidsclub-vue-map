<template>
<div class="body" id="top-of-form">
  <MainNav />
  <div class="container w-container">
  <h1 class="heading-1">Edit profile</h1>
  <StyleWrapper styleIs="editing" class="cards" v-if="currentUser">
      <ErrorMessage v-if="showError && error" text="Your form has errors. Please fix them to continue..." />
      <ErrorMessage v-if="showError && error" :text="phone.err" />
    <Phone v-model="phone" :currentPhone="currentUser.phone" :required="false" />
    <ErrorMessage v-if="showError" :text="location.err" />
    <Location
      :currentAddress="currentUser.fullAddress"
      :currentApartment="currentUser.apartmentNumber"
      v-model="location"
      />
    <Question
      title="What do you do for a living?"
      subtitle="Tell other families a bit about what you do for work.">
      <FormFieldAndLabel
        placeholder="Your employer"
        label="Where do you work?"
        v-model="currentUser.employer"
        />
      <FormFieldAndLabel
        placeholder="Your title or role"
        label="What do you do?"
        v-model="currentUser.jobPosition"
        />
    </Question>
    <Question
      title="Tell us a bit about yourself"
      subtitle="Other members would love to know a bit more about you and your family.">
      <FormWithTextArea
        v-model="currentUser.profileBlurb"
        placeholder="Your illustrious biography"
        />
    </Question>
    <Question
      title="Got any photos you'd like to share?"
      subtitle="Adding photos to your profile helps give other members a sense of your family."
      >
      <MultipleImageUpload v-model="currentUser.images" />
    </Question>
    <Question
      title="What are your interests?"
      subtitle="Pick some favorite interests and activities (things you like to do as a family) to find other families with common interests."
      >
      <Checkboxes
        :labels="[['travel', 'Travel' ], ['team sports', 'Team sports'], ['puzzles & games', 'Puzzles & games'], ['art & drawing', 'Art & drawing'], ['computers', 'Computers'], ['music', 'Music'], ['dance', 'Dance'], ['theater', 'Theater'], ['gardening', 'Gardening'], ['activism', 'Activism'], ['reading books', 'Reading books'], ['camping', 'Camping'], ['hiking', 'Hiking'], ['bike rides', 'Bike rides'], ['road trips', 'Road trips'], ['museums', 'Museums']]"
        v-model="currentUser.activities" />
    </Question>
    <Availability v-model="availability" :required="false"/>
    <ErrorMessage v-if="showError" :text="children.err" />
    <Children v-model="children" :required="false" />
    <LanguagesSpoken v-model="currentUser.languages"/>
  </StyleWrapper>
  <PageActionsFooter :buttonText="saveButtonText" @click="submitUserInformation"/>
  </div>
</div>

</template>

<script>
import FormFieldAndLabel from '@/components/base/FormFieldAndLabel.vue'
import Question from '@/components/base/Question.vue'
import FormWithTextArea from '@/components/base/FormWithTextArea.vue'
import MultipleImageUpload from '@/components/base/MultipleImageUpload.vue'
import Checkboxes from '@/components/base/Checkboxes.vue'
import Location from '@/components/FTE/userInformation/Location.vue'
import LanguagesSpoken from '@/components/FTE/userInformation/LanguagesSpoken.vue'
import Children from '@/components/FTE/userInformation/Children.vue'
import Phone from '@/components/FTE/userInformation/Phone.vue'
import Availability from '@/components/FTE/userInformation/Availability.vue'
import MainNav from '@/components/MainNav.vue'
import PageActionsFooter from '@/components/PageActionsFooter.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import * as api from '@/utils/api.js'
import * as Token from '@/utils/tokens.js'
import { mapGetters } from 'vuex'

import _ from 'lodash'

var VueScrollTo = require('vue-scrollto')

export default {
  name: 'ProfileEdit',
  components: {
    Location,
    Phone,
    Availability,
    MainNav,
    StyleWrapper,
    PageActionsFooter,
    ErrorMessage,
    Children,
    Question,
    FormFieldAndLabel,
    FormWithTextArea,
    MultipleImageUpload,
    Checkboxes,
    LanguagesSpoken
  },
  data () {
    return {
      location: {},
      phone: {},
      availability: {},
      showError: false,
      saveButtonText: 'Save',
      children: null
    }
  },
  created: function () {
    this.initialAvailability = {
      availableAfternoons: !!this.currentUser.availableAfternoons,
      availableMornings: !!this.currentUser.availableMornings,
      availableEvenings: !!this.currentUser.availableEvenings,
      availableWeekends: !!this.currentUser.availableWeekends
    }
    this.children = { 'list': this.currentUser.children || [] }
  },
  computed: {
    error: function () {
      if (!!this.phone.err || !!this.location.err || !!this.children.err) {
        return true
      } else {
        return false
      }
    },
    ...mapGetters(['currentUser'])
  },
  methods: {
    submitUserInformation: function () {
      if (!this.error) {
        this.saveButtonText = 'Saving...'
        api.submitUserInfo(this.currentUser.id, this.phone, this.location, this.availability, this.children, this.currentUser).then(res => {
          this.saveButtonText = ' \u2714 Saved'
          this.$store.dispatch('establishCurrentUserAsync', Token.currentUserId(this.$auth))
          console.log('user update SUCCESS')
          console.log(res)
          return res
        }).catch(err => {
          console.log('Error saving', err)
          this.saveButtonText = 'Problem saving. Click to try again.'
        })
      } else {
        this.showError = true
        VueScrollTo.scrollTo('#top-of-form')
      }
    }
  }
}
</script>

<style scoped>

.body {
  font-family: soleil;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  background-color: #f5f5f5;
}

.heading-1 {
  margin-bottom: 32px;
}

.container {
  padding: 32px 32px 100px;
}

@media (max-width: 991px) {
  .body {
    padding-bottom: 77px;
  }

  .container {
    padding-bottom: 32px;
  }
}

@media (max-width: 767px) {
  .body {
    padding-bottom: 50px;
  }

  .heading-1 {
    margin-right: 24px;
    margin-left: 24px;
  }

  .container {
    padding-top: 16px;
    padding-right: 0px;
    padding-left: 0px;
  }
}

@media (max-width: 479px) {
  .heading-1 {
    font-size: 34px;
    line-height: 44px;
  }
}

</style>
