<template>
  <StyleWrapper styleIs="onboarding">
    <div class="onb-body">
      <div class="body">
        <div class="content-wrapper">
          <Nav :button="nextButtonState" @next="nextStep" @prev="prevStep" />
          <ErrorMessage v-if="error && showError" :text="error" />
          <YesOrNo
            v-model="childHasSpecialNeeds"
            question="Allergies and Special Requirements"
            description="Do any of your children have allergies, dietary restrictions, or special needs that you would like to share with the host?" />
        </div>
      </div>
    </div>
  </StyleWrapper>
</template>

<script>
import YesOrNo from '@/components/base/YesOrNo.vue'
import Nav from '@/components/FTE/Nav.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ChildSpecialRequirementsYesNo',
  components: { YesOrNo, StyleWrapper, ErrorMessage, Nav },
  data () {
    return {
      childHasSpecialNeeds: {},
      showError: false,
      eventId: this.$route.params.eventId
    }
  },
  methods: {
    nextStep: function () {
      if (this.childHasSpecialNeeds.err) {
        this.showError = true
      } else if (this.childHasSpecialNeeds.isTrue) {
        this.$router.push({
          name: 'ChildSpecialRequirements',
          params: {
            eventId: this.eventId
          }
        })
      } else {
        this.$router.push({
          name: 'RsvpInfoCollection',
          params: {
            eventId: this.eventId
          },
          query: {
            emergencyInfoComplete: 'true'
          }
        })
      }
    },
    prevStep: function () {
      this.$router.go(-1)
    }
  },
  computed: {
    error: function () {
      return this.childHasSpecialNeeds.err
    },
    nextButtonState: function () {
      return this.childHasSpecialNeeds.isTrue === null ? 'inactive' : 'next'
    },
  }
}
</script>
