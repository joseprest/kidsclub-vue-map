<template>
<StyleWrapper styleIs="onboarding">
    <!-- wrapper for desktop screens -->

    <div class="onb-body">
      <div class="body">
        <div class="content-wrapper">

  <!-- nav -->

      <Nav :button="nextButtonState" @next="nextStep" @prev="prevStep" />

  <!-- error message -->

      <ErrorMessage v-if="error && showError" :text="error" />

<!-- Show loading indicator until we can show the event info we're confirming.  there are and there is more than one. If there is an error, show the error only. -->

  <LoadingSpinner v-if="!event && !(error && showError)"/>

      <YesOrNo
      v-if="!!event"
      v-model="yesOrNo"
      question="Welcome!"
      description="Would you still like to RSVP to the event below?">
      <br>
      <EventListItem
      v-if="!!event"
      :event="event"
      :index="eventId"
      />
      </YesOrNo>
</div>
</div>
</div>
</StyleWrapper>
</template>

<script>

import * as api from '@/utils/api.js'
import EventListItem from '@/components/EventListItem.vue'
import Nav from '@/components/FTE/Nav.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import YesOrNo from '@/components/base/YesOrNo.vue'

export default {
  name: 'RsvpConfirmation',
  components: { EventListItem, Nav, LoadingSpinner, ErrorMessage, StyleWrapper, YesOrNo },
  data () {
    return {
      eventId: this.$route.params.eventId,
      errorMesg: 'Please answer yes or no.',
      event: null,
      yesOrNo: {
        isTrue: null
      },
      showError: false
    }
  },
  mounted: async function () {
    this.event = await api.fetchEvent(this.$route.params.eventId)
  },
  methods: {
    nextStep: function () {
      if (this.yesOrNo.isTrue === null) {
        this.showError = true
      } else if (this.yesOrNo.isTrue === false) {
        this.$router.push({ name: 'Events' })
      } else {
        this.$router.push({ name: 'RsvpInfoCollection', params: { eventId: this.eventId } })
      }
    },
    prevStep: function () {
      this.$router.go(-1)
    }
  },
  computed: {
    error: function () {
      if (this.yesOrNo.isTrue === null) {
        return this.errorMesg
      } else {
        this.showError = false
        return false
      }
    },
    nextButtonState: function () {
      if (this.error) {
        return 'inactive'
      } else {
        return 'next'
      }
    }
  }
}
</script>
