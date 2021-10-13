<template>
<StyleWrapper styleIs="onboarding">

  <!-- wrapper for desktop screens -->

    <div class="onb-body">
      <div class="body">
        <div class="content-wrapper">
  <Nav
  :button="nextButtonState"
  @next="nextStep"
  @prev="$router.go(-1)" />
  <ErrorMessage v-if="error" :text="error" />

<!-- Show loading indicator until we know how many children there are. If there is an error, show the error only. -->

  <LoadingSpinner v-if="!allInformationLoaded"/>

<!-- Once we have child and event information, ask user which child/children they want to RSVP -->

  <Question
  v-if="allInformationLoaded"
  title="Which children would you like to RSVP?"
  :subtitle="spotsRemainingPhrase"
  >
   <Checkboxes
   v-model="childrenSelected"
   :labels="labelsAndOrder"/>
 </Question>
</div>
</div>
</div>
</StyleWrapper>
</template>

<script>

import * as api from '@/utils/api.js'
import * as utils from '@/utils/utils.js'
import Nav from '@/components/FTE/Nav.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import Question from '@/components/base/Question.vue'
import Checkboxes from '@/components/base/Checkboxes.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import sheetsu from 'sheetsu-node'
// this component has a working loading indicator and no other logic. todo: break out and rename.
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { mapGetters } from 'vuex'
var moment = require('moment')
// create a config file to identify which spreadsheet we push to.
var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/62cd725d6088' })

export default {
  name: 'RsvpInfoCollection',
  components: { Nav, LoadingSpinner, ErrorMessage, Checkboxes, StyleWrapper, Question },
  data () {
    return {
      childrenSelected: [],
      error: '',
      eventId: this.$route.params.eventId,
      event: false,
      emergencyInfoJustCompleted: this.$route.query.emergencyInfoComplete === 'true',
      isAuthenticated: this.$auth.isAuthenticated()
    }
  },
  created: function () {
    this.redirectToSignupIfNotAuthenticated()
    this.redirectToOnboardingIfNotOnboarded()
    if (!this.emergencyInfoJustCompleted) {
      this.redirectToEmergencyContactsIfNone()
    }
    this.showErrorIfUserHasNoChildren()
  },
  mounted: function () {
    // get data about the current event to determine max attendees.
    this.fetchEventInformation()
  },
  computed: {
    spotsRemainingPhrase: function () {
      return 'There ' + (this.spotsRemaining === 1 ? 'is' : 'are') + ' ' + this.spotsRemaining + ' spot' + (this.spotsRemaining !== 1 ? 's' : '') + ' remaining.'
    },
    labelsAndOrder: function () {
      return this.children.map(child => [child.id, child.firstName + ', ' + this.calculateAge(child.birthday)])
    },
    allInformationLoaded: function () {
      return this.currentUser && this.event
    },
    tooManyChildren: function () {
      return this.childrenSelected.length > this.event.maximumChildren - this.event.participantsCount
    },
    nextButtonState: function () {
      if (this.tooManyChildren || this.childrenSelected.length === 0) {
        return 'inactive'
      } else {
        return 'next'
      }
    },
    spotsRemaining: function () {
      return Math.max(0, this.event.maximumChildren - this.event.participantsCount - this.childrenSelected.length)
    },
    guestChildrenNamesAgesFormatted: function () {
      return utils.arrayToSentence(this.children.filter(child => this.childrenSelected.includes(child.id)).map(child => child.firstName + ' (age ' + this.calculateAge(child.birthday) + ')')) // 'Suzie (5)'
    },
    eventDateFormattedMonthDay: function () {
      return moment(this.event.startsAt).format('MMMM D')
    },
    notificationToHost: function () {
      return 'Congratulations, ' + this.event.hostFirstName + '! ' + this.currentUser.firstName + ' booked a playdate with you for ' + this.guestChildrenNamesAgesFormatted + ' on ' + this.eventDateFormattedMonthDay + '! Visit https://kidsclub.io/faq or reply with any questions!'
    },
    notificationBackToUser: function () {
      return 'Congratulations ' + this.currentUser.firstName + '! You\'ve booked a playdate with ' + this.event.hostFirstName + ' for ' + this.guestChildrenNamesAgesFormatted + ' on ' + this.eventDateFormattedMonthDay + '. We\'ll email you shortly to confirm your RSVP.'
    },
    children: function () {
      return this.currentUser.children
    },
    childrenHaveEmergencyContacts: function () {
      // assumes if first child has them that they all do. not a safe assumption once we allow editing
      let childHasAtLeastOneEmergencyContact = function (child) {
        if (child.emergencyContacts && child.emergencyContacts.length > 0) {
          return true
        } else {
          return false
        }
      }
      return this.currentUser.children.reduce((allChildrenSoFar, child) => allChildrenSoFar && childHasAtLeastOneEmergencyContact(child), true)
    },
    ...mapGetters(['currentUser'])
  },
  methods: {
    showErrorIfUserHasNoChildren: function () {
      if (!this.children || this.children.length === 0) {
        this.error = 'Sorry, but we cannot retrieve your children\'s information. Are you sure you have signed in? To resolve this, please email us at: contact@cottageclass.com.'
      }
    },
    redirectToSignupIfNotAuthenticated: function () {
      if (!this.$auth.isAuthenticated()) {
        console.log('User attempted to RSVP without being authenticated')
        this.$store.commit('setRSVPAttemptEventId', { id: this.eventId })
        this.$router.push({ name: 'SignUp' })
      }
    },
    redirectToOnboardingIfNotOnboarded: function () {
      if (!this.currentUser.hasAllRequiredFields) {
        // send them back to onboarding.
        console.log('user doesnt have required fields on rsvpinfocollection step, sending them back to onboarding', this.currentUser)
        this.$store.commit('setRSVPAttemptEventId', { id: this.eventId })
        this.$router.push({ name: 'OnboardNewUser' })
      } else {
        console.log('user already onboarded, not redirecting')
      }
    },
    redirectToEmergencyContactsIfNone: function () {
      if (!this.childrenHaveEmergencyContacts) {
        this.$router.push({
          name: 'EmergencyContacts',
          params: { eventId: this.eventId }
        })
      }
    },
    calculateAge: function (birthdate) {
      return moment().diff(birthdate, 'years')
    },
    fetchEventInformation: async function () {
      try {
        this.event = await api.fetchEvent(this.$route.params.eventId)
        if (this.event.full || this.event.maximumChildren === 0) {
          this.error = 'We\'re sorry, this event is full!'
        }
      } catch (err) {
        console.log(err.stack)
        this.error = 'Sorry, there was a problem retrieving information about the event. Go back and try again?'
      }
    },
    nextStep: function () {
      if (this.tooManyChildren) {
        let numChildren = this.childrenSelected.length
        let childrenSingularOrPlural = numChildren === 1 ? 'child' : 'children'
        this.error = 'Sorry, but there are not enough spots available for ' + numChildren + ' ' + childrenSingularOrPlural + '.'
      } else if (this.childrenSelected.length === 0) {
        this.error = 'Please choose at least one child to RSVP.'
      } else {
        this.submitRsvp()
      }
    },
    forgetRsvpAttempted: function () {
      this.$store.commit('setRSVPAttemptEventId', { id: null })
    },
    submitRsvp: function () {
      this.error = ''
      console.log('rsvping children ' + this.childrenSelected + ' to event ID' + this.eventId)
      this.submitToSheetsu()
      let component = this
      api.submitEventParticipant(this.eventId, this.childrenSelected).then(res => {
      // open event page where user will see success message
        component.sendNotifications()
        component.forgetRsvpAttempted()
        return this.$store.commit('showAlertOnNextRoute', {
          alert: {
            message: "Congratulations, you have RSVP&apos;ed to this event! You&apos;ll soon receive an email confirming your RSVP.",
            status: 'success'
          }
        })
      }).then(res => {
        return component.$ga.event('RSVP', 'sent', component.eventId)
      }).then(res => {
        return component.$router.push({ name: 'EventPage', params: { id: this.eventId } })
      }).catch(err => {
        console.log(err)
        this.error = 'Sorry, there was a problem submitting your RSVP. Try again?'
        // fetch event information again, which will update the error message if the event is full, e.g. in the case where another user RSVP'ed a the same time, just before this user did.
        this.fetchEventInformation()
      })
    },
    submitToSheetsu: function () {
      // submit user to sheetsu which gives us notifications of new RSVPs
      client.create({
        'Event ID': this.eventId,
        'Event title': this.event.name,
        'Event host': this.event.hostFirstName,
        'Event date': this.event.startsAt,
        'Date submitted': moment(Date()).format('L'),
        'Parent first name': this.currentUser.firstName,
        'Parent last name': this.currentUser.lastInitial,
        'Parent phone': this.currentUser.phone,
        'Parent email': this.currentUser.email,
        'IDs of RSVPed children': this.childrenSelected,
        'All children': this.currentUser.children
      }, 'RSVPs').then((data) => {
        console.log('Successfully submitted RSVP to Sheetsu: ' + data)
      }, (err) => {
        console.log(err)
      })
    },
    isSelected: function (id) {
      return this.childrenSelected.includes(id)
    },
    toggleSelected: function (id) {
      this.error = ''
      if (this.isSelected(id)) {
        this.childrenSelected = this.childrenSelected.filter((aChildId) => aChildId !== id)
      } else {
        this.childrenSelected.push(id)
      }
    },
    sendNotifications: function () {
      api.submitNotification(this.event.hostId, this.notificationToHost)
      api.submitNotification(this.currentUser.id, this.notificationBackToUser)
    }
  }
}
</script>
