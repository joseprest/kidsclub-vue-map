<template>
<div class="body" id="top-of-form">
  <DeleteEventConfirmationModal
      v-if="showDeleteConfirmationModal"
      v-on:closeModal="showDeleteConfirmationModal = false"
      :eventId="eventId"/>
  <MainNav />
  <div class="container w-container">
  <h1 class="heading-1">Editing event #{{ eventId }} </h1>
  <StyleWrapper styleIs="editing" class="cards" v-if="event">
      <ErrorMessage v-if="showError && error" text="Your entries have errors. Please fix them to continue..." />
      <EventName v-model="event.name" />
      <EventActivity v-model="event.activity" />
      <MaxChildren v-model="event.maximumChildren" />
      <ErrorMessage v-if="event.ageRange.err" :text="event.ageRange.err" />
      <AgeRange v-model="event.ageRange" />
      <Food v-model="event.food" />
      <HouseRules v-model="event.houseRules"/>
      <YesOrNo
      question="Do you have pets?"
      description="This is often very important for parents (and children) to know."
      v-model="event.hasPet"
      />
      <PetsDescription v-model="event.petDescription" />
      <!-- <edit date & time> -->
      <ErrorMessage v-if="!datesValidate" text="Please enter a valid start and end time for your event." />
      <Question title="When is your event?">
        From...
        <br>
        <br>
        <DateTimePicker v-model="event.startsAt" showDate="true" />
        <br>
        To...
        <br><br>
        <DateTimePicker v-model="event.endsAt" showDate="true" />
      </Question>
      <Question title="Delete this event" subtitle="Are you unable to host this event? This cannot be undone. Your guests will receive a text message informing them that the event has been cancelled.">
        <button
            class="delete-event-button"
            v-on:click="showDeleteConfirmationModal=true">
          Delete
        </button>
      </Question>

      <!-- </edit date & time> -->
  </StyleWrapper>
  <PageActionsFooter :buttonText="saveButtonText" @click="saveEvent"/>
  </div>
</div>

</template>

<script>
import EventName from '@/components/base/eventSpecification/EventName.vue'
import YesOrNo from '@/components/base/YesOrNo.vue'
import MainNav from '@/components/MainNav.vue'
import DateTimePicker from '@/components/DateTimePicker.vue'
import PageActionsFooter from '@/components/PageActionsFooter.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import * as api from '@/utils/api.js'
import EventActivity from '@/components/base/eventSpecification/EventActivity.vue'
import Food from '@/components/base/eventSpecification/Food.vue'
import HouseRules from '@/components/FTE/userInformation/HouseRules.vue'
import PetsDescription from '@/components/FTE/userInformation/PetsDescription.vue'
import MaxChildren from '@/components/base/eventSpecification/MaxChildren.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import Question from '@/components/base/Question.vue'
import DeleteEventConfirmationModal from '@/components/DeleteEventConfirmationModal.vue'

import AgeRange from '@/components/base/eventSpecification/AgeRange.vue'
var moment = require('moment')

var VueScrollTo = require('vue-scrollto')

export default {
  name: 'ProfileEdit',
  components: { EventActivity, Food, HouseRules, PetsDescription, MaxChildren, MainNav, StyleWrapper, PageActionsFooter, ErrorMessage, YesOrNo, Question, DateTimePicker, EventName, AgeRange, DeleteEventConfirmationModal },
  data () {
    return {
      eventId: this.$route.params.id,
      saveButtonText: 'Save',
      eventDataFromAPI: null,
      event: null, // the client-side data model for events
      showError: false,
      showDeleteConfirmationModal: false
    }
  },
  mounted: function () {
    this.fetchEvent()
  },
  computed: {
    datesValidate: function () {
      if (moment(this.event.startsAt).isBefore(this.event.endsAt)) {
        return true
      } else {
        return false
      }
    },
    error: function () {
      return !this.datesValidate || this.event.ageRange.err
    },
    eventDataForSubmissionToAPI: function () {
      return {
        'event': {
          'name': this.event.name,
          'starts_at': this.event.startsAt,
          'ends_at': this.event.endsAt,
          'has_pet': this.event.hasPet.isTrue,
          'activity_names': [this.event.activity.selected],
          'foods': [this.event.food.selected],
          'house_rules': this.event.houseRules.text,
          'pet_description': this.event.petDescription.text,
          'maximum_children': this.event.maximumChildren,
          'child_age_minimum': this.event.ageRange.minimum,
          'child_age_maximum': this.event.ageRange.maximum
        }
      }
    }
  },
  methods: {
    fetchEvent: async function () {
      this.event = await api.fetchEvent(this.eventId)
      this.event = this.parseEventDataFromAPI(this.event)
    },
    parseEventDataFromAPI: function (dataFromAPI) {
      let e = dataFromAPI
      return {
        name: e.name,
        startsAt: e.startsAt,
        endsAt: e.endsAt,
        hasPet: {
          isTrue: e.hasPet
        },
        activity: {
          selected: e.activityNames[0]
        },
        food: {
          selected: e.foods[0]
        },
        houseRules: {
          text: e.houseRules
        },
        petDescription: {
          text: e.petDescription
        },
        maximumChildren: e.maximumChildren,
        ageRange: {
          maximum: e.childAgeMaximum,
          minimum: e.childAgeMinimum
        }
      }
    },
    submitEventData: function () {
      return this.axios.put(`${process.env.BASE_URL_API}/api/events/${this.eventId}`, this.eventDataForSubmissionToAPI)
    },
    saveEvent: function () {
      if (this.error) {
        this.showError = true
        VueScrollTo.scrollTo('#top-of-form')
      } else {
        this.saveButtonText = 'Saving...'
        this.submitEventData().then(res => {
          this.saveButtonText = ' \u2714 Saved'
          console.log('event update SUCCESS')
          console.log(res)
          this.fetchEvent()
          return res
        }).catch(err => {
          console.log('Error saving', err)
          this.saveButtonText = 'Problem saving. Click to try again.'
        })
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

.delete-event-button {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #e91f29;
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
