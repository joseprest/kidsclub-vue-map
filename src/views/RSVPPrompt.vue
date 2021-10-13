<template>
  <div class="onb-body">
    <div class="body">
      <div class="content-wrapper">
        <Nav button="skip" @next="nextStep" hidePrevious="true" />
        <StyleWrapper styleIs="onboarding">
          <LoadingSpinner v-if="eventsNotBelongingToCurrentUser.length < 1" />
          <Question
            title="RSVP to a playdate near you"
            subtitle="Would you like to RSVP to one of these upcoming playdates in your area?"
            >
            <EventList
              :events="eventsNotBelongingToCurrentUser"
              :showDates="false"
              />
          </Question>
        </StyleWrapper>
        </div>
      </div>
    </div>
</template>

<script>
import Question from '@/components/base/Question.vue'
import EventList from '@/components/EventList.vue'
import * as api from '@/utils/api.js'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import Nav from '@/components/FTE/Nav.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'RSVPPrompt',
  components: { Question, EventList, StyleWrapper, Nav, LoadingSpinner },
  props: [],
  data () {
    return {
      events: []
    }
  },
  computed: {
    eventsNotBelongingToCurrentUser: function () {
      return this.events.filter(event => {
        return (event.full !== 'false') && (event.hostId !== this.currentUser.id)
      })
    },
    ...mapGetters([ 'currentUser' ])
  },
  methods: {
    nextStep () {
      this.$router.push({ name: 'SocialInvite', params: { id: this.firstCreatedEventId } })
    }
  },
  mounted: function () {
    const that = this
    api.fetchUpcomingEventsWithinDistance({ miles: 20, lat: this.currentUser.latitude, lng: this.currentUser.longitude }).then(res => {
      if (res.length > 0) {
        that.events = res
        if (that.eventsNotBelongingToCurrentUser.length < 1) {
          that.nextStep()
        }
      } else {
        that.nextStep() // skip this step if no nearby events
      }
    }).catch(function (err) {
      console.log(err)
      // likely there are no events in the area, proceed to
      that.nextStep()
    })
  }
}
</script>

<style scoped>

</style>
