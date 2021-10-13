<template>
  <div class="onb-body">
    <div class="body">
      <div class="content-wrapper">
        <Nav
          :button="nextButtonState"
          @next="nextStep"
          @prev="prevStep"
          :hidePrevious="stepIndex === 0"
        />
        <StyleWrapper styleIs="onboarding">
          <ErrorMessage v-if="error && this.showError" :text="error" />
          <Phone
            v-if="currentStep === 'phone'"
            @pressedEnter="nextStep"
            v-model="userData.phone"
            required="true" />
          <Location
            v-if="currentStep === 'location'"
            v-model="userData.location"
            @pressedEnter="nextStep"
            required="true"/>
          <Children
            v-if="currentStep === 'children'"
            v-model="userData.children" />
          <EventActivity
            v-if="currentStep === 'eventActivity'"
            v-model="eventSeriesData.activity" />
          <Food
            v-if="currentStep === 'food'"
            v-model="eventSeriesData.food" />
          <EventTime
            v-if="currentStep === 'eventTime'"
            v-model="eventSeriesData.time" />
          <EventDate
            v-if="currentStep === 'eventDate'"
            v-model="eventSeriesData.date" />
          <MaxChildren
            v-if="currentStep === 'maxChildren'"
            v-model="eventSeriesData.maxChildren" />
          <YesOrNo
            v-if="currentStep === 'emergencyCare' && substep === 'canProvide'"
            v-model="userData.emergencyCare"
            question="Childcare in a Pinch?"
            description="Parents often need care at times not covered by our events. Would you like to be able to request childcare from other members when you need it and receive requests (by text message) in return?"
          />
          <Availability
            v-if="currentStep === 'emergencyCare' && substep === 'availability'"
            v-model="userData.emergencyCare" />
          <YesOrNo
            v-if="currentStep === 'pets' && substep === 'hasPets'"
            v-model="userData.pets"
            question="Do you have pets?"
            description="This is often very important for parents (and children) to know."
          />
          <PetsDescription
            v-if="currentStep === 'pets' && substep === 'description'"
            v-model="userData.pets" />
          <HouseRules v-if="currentStep === 'houseRules'"
            v-model="userData.houseRules" />
        </StyleWrapper>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/utils/api'
import * as Token from '@/utils/tokens'
import { mapGetters } from 'vuex'
import sheetsu from 'sheetsu-node'
import moment from 'moment'

import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import Nav from '@/components/FTE/Nav.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'

import Phone from '@/components/FTE/userInformation/Phone.vue'
import Location from '@/components/FTE/userInformation/Location.vue'
import Children from '@/components/FTE/userInformation/Children.vue'
import EventActivity from '@/components/base/eventSpecification/EventActivity.vue'
import EventTime from '@/components/base/eventSpecification/EventTime.vue'
import EventDate from '@/components/base/eventSpecification/EventDate.vue'
import Food from '@/components/base/eventSpecification/Food.vue'
import MaxChildren from '@/components/base/eventSpecification/MaxChildren.vue'
import YesOrNo from '@/components/base/YesOrNo.vue'
import Availability from '@/components/FTE/userInformation/Availability.vue'
import PetsDescription from '@/components/FTE/userInformation/PetsDescription.vue'
import HouseRules from '@/components/FTE/userInformation/HouseRules.vue'

const stepSequence = [
  'phone',
  'location',
  'children',
  'eventActivity',
  'food',
  'eventTime',
  'eventDate',
  'maxChildren',
  'emergencyCare',
  'pets',
  'houseRules'
]
const client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/62cd725d6088' })

export default {
  name: 'OnboardNewUser',
  props: [],
  components: {
    StyleWrapper,
    Nav,
    ErrorMessage,
    Phone,
    Location,
    PetsDescription,
    Children,
    EventActivity,
    Food,
    EventTime,
    EventDate,
    MaxChildren,
    YesOrNo,
    Availability,
    HouseRules
  },
  data () {
    return {
      showError: false,
      stepIndex: 0,
      substep: '',
      userData: {
        phone: { err: null },
        location: { err: null },
        children: { list: [], err: null },
        pets: { err: null },
        houseRules: { err: null },
        emergencyCare: { err: null }
      },
      eventSeriesData: {
        activity: { err: null },
        food: { err: null },
        time: { err: null },
        date: { err: null },
        maxChildren: 2,
        childAgeMaximum: 11,
        childAgeMinimum: 2
      }
    }
  },
  computed: {
    currentStep () {
      return stepSequence[this.stepIndex]
    },
    nextButtonState () {
      if (this.modelForCurrentStep.err) {
        return 'inactive'
      } else {
        return 'next'
      }
    },
    modelForCurrentStep () {
      const models = {
        phone: this.userData.phone,
        location: this.userData.location,
        children: this.userData.children,
        houseRules: this.userData.houseRules,
        emergencyCare: this.userData.emergencyCare,
        pets: this.userData.pets,
        eventActivity: this.eventSeriesData.activity,
        food: this.eventSeriesData.food,
        eventTime: this.eventSeriesData.time,
        eventDate: this.eventSeriesData.date,
        maxChildren: this.eventSeriesData.maxChildren
      }
      return models[this.currentStep]
    },
    error () {
      return this.modelForCurrentStep.err
    },
    eventName: function () {
      if (this.currentUser.firstName) {
        return this.capitalize(this.eventSeriesData.activity.selected) + ' & ' + this.eventSeriesData.food.selected + ' with ' + this.capitalize(this.currentUser.firstName)
      } else {
        return this.capitalize(this.eventSeriesData.activity.selected) + ' & ' + this.eventSeriesData.food.selected
      }
    },
    eventDataForSubmissionToAPI: function () {
      // TODO move this function out of the component and into api or a helper
      return {
        'event_series': {
          'name': this.eventName,
          'start_date': this.eventSeriesData.date.selected,
          'starts_at': this.eventSeriesData.time.start,
          'ends_at': this.eventSeriesData.time.end,
          'has_pet': typeof this.userData.pets.text !== 'undefined' &&
              this.userData.pets.text.length > 0,
          'activity_names': [this.eventSeriesData.activity.selected],
          'foods': [this.eventSeriesData.food.selected],
          'house_rules': this.userData.houseRules.text,
          'pet_description': this.userData.pets.text,
          'maximum_children': this.eventSeriesData.maxChildren,
          'child_age_minimum': this.eventSeriesData.childAgeMinimum,
          'child_age_maximum': this.eventSeriesData.childAgeMaximum
        }
      }
    },
    ...mapGetters(['currentUser', 'rsvpAttemptedId'])

  },
  methods: {
    submitEventData: function () {
      return api.submitEventSeriesData(this.eventDataForSubmissionToAPI)
    },
    finishOnboarding () {
      // send the data to the server
      const that = this
      const userId = Token.currentUserId(that.$auth)
      const submitInfo = api.submitUserInfo(
        userId,
        this.userData.phone,
        this.userData.location,
        this.userData.emergencyCare,
        this.userData.children
      )
      submitInfo.catch(err => {
        console.log('user update FAILURE')
        console.log(err)
        console.log(Object.entries(err))
        that.stepIndex = stepSequence.length - 1
        that.modelForCurrentStep.err = 'Sorry, there was a problem saving your information. Try again?'
        throw err
      })
      submitInfo.then(() => {
        client.create({
          'ID': userId,
          'Date joined': moment(Date()).format('L'),
          'address': this.userData.location.fullAddress,
          'phone': this.userData.phone.number,
          'children': this.userData.children.list,
          'availability': this.userData.availability,
          'food': this.eventSeriesData.food.selected
        }, 'newUsers').then((data) => {
          console.log(data)
        }, (err) => {
          console.log(err)
        })
        return that.$store.dispatch('establishCurrentUserAsync', userId)
      }).then(() => {
        that.submitEventData().then(res => {
          that.$store.commit('setCreatedEvents', { eventData: res })
        })
      }).then(res => {
        console.log('event creation SUCCESS')
        console.log(res)
        this.moveOntoNextFTE()
      }).catch(err => {
        console.log(err)
        that.stepIndex = stepSequence.length - 1
        that.modelForCurrentStep.err = 'Sorry, there was a problem saving your information. Try again?'
        throw err
      })
    },
    moveOntoNextFTE () {
      if (this.rsvpAttemptedId) {
        this.$router.push({ name: 'RsvpConfirmation', params: { eventId: this.rsvpAttemptedId } })
      } else {
        this.$router.push({ name: 'RSVPPrompt' })
      }
    },
    nextStep () {
      if (!this.error) {
        if (this.stepIndex === stepSequence.length - 1) {
          this.finishOnboarding()
        }
        // set the next step
        if (this.currentStep === 'pets' &&
            this.substep === 'hasPets' &&
            this.userData.pets.isTrue) {
          this.substep = 'description'
        } else if (this.currentStep === 'emergencyCare' && this.substep === 'canProvide' && this.userData.emergencyCare.isTrue) {
          this.substep = 'availability'
        } else {
          this.$ga.event('onboarding', 'stepComplete', this.currentStep)
          this.stepIndex += 1
          if (this.currentStep === 'pets') {
            this.substep = 'hasPets'
          } else if (this.currentStep === 'emergencyCare') {
            this.substep = 'canProvide'
          }
        }
        this.showError = false
        window.scrollTo(0, 0)
      } else {
        this.showError = true
      }
    },
    prevStep () {
      if (this.currentStep === 'pets' && this.substep === 'description') {
        this.substep = 'hasPets'
        this.modelForCurrentStep.err = false
      } else if (this.currentStep === 'emergencyCare' && this.substep === 'availability') {
        this.substep = 'canProvide'
        this.modelForCurrentStep.err = false
      } else {
        this.stepIndex -= 1
        if (this.currentStep === 'pets') {
          if (this.userData.pets.isTrue) {
            this.substep = 'description'
          } else {
            this.substep = 'hasPets'
          }
        }
        if (this.currentStep === 'emergencyCare') {
          if (this.userData.emergencyCare.isTrue) {
            this.substep = 'availability'
          } else {
            this.substep = 'canProvide'
          }
        }
      }
      window.scrollTo(0, 0)
    },
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style>

.content-wrapper {
  width: 720px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #1c8be7;
}

.body {
  background-color: #0d73c7;
}

@media (max-width: 991px) {
  .content-wrapper {
    width: 670px;
  }
}

@media (max-width: 767px) {
  .content-wrapper {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

</style>
