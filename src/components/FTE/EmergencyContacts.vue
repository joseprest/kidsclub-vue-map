<template>
  <StyleWrapper styleIs="onboarding">
    <div class="onb-body">
      <div class="body">
        <div class="content-wrapper">
          <Nav :button="nextButtonState" @next="nextStep" @prev="prevStep" />
          <ErrorMessage v-if="error && showError" :text="error" />
          <Question
            title="Emergency Contacts"
            subtitle="Please provide at least one emergency contact. If possible, include your children's primary care physician.">
            <ManyFormFieldGroups
              :fieldGroups="fieldGroups"
              headingWord="Contact"
              v-model="contacts"
              addAndRemove="true"
            />
          </Question>
        </div>
      </div>
    </div>
  </StyleWrapper>
</template>

<script>
import ManyFormFieldGroups from '@/components/base/ManyFormFieldGroups.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import Question from '@/components/base/Question.vue'
import Nav from '@/components/FTE/Nav.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import * as api from '@/utils/api.js'
import { mapGetters } from 'vuex'
import * as Token from '@/utils/tokens.js'

export default {
  name: 'EmergencyContacts',
  components: { ManyFormFieldGroups, Nav, StyleWrapper, Question, ErrorMessage },
  data () {
    return {
      contacts: [],
      nextButtonState: 'next',
      fieldGroups: [
        {
          label: 'Full Name',
          placeholder: 'Full Name',
          type: 'text',
          name: 'name'
        },
        {
          label: 'Phone Number',
          placeholder: 'Phone Number',
          type: 'tel',
          name: 'phoneNumber'
        },
        {
          label: 'Relationship to Child',
          placeholder: 'Relationship to Child',
          type: 'text',
          name: 'relationship'
        }],
      showError: false,
      error: 'To be safe, please provide your host with at least one emergency contact.',
      eventId: this.$route.params.eventId
    }
  },
  computed: {
    children: function () {
      return this.currentUser.children
    },
    firstContactIsComplete: function () {
      return this.contacts[0].name && this.contacts[0].phoneNumber && this.contacts[0].relationship
    },
    ...mapGetters(['currentUser'])
  },
  methods: {
    nextStep: function () {
      if (this.firstContactIsComplete) {
        this.submitEmergencyContactsForChildren()
      } else {
        this.showError = true
      }
    },
    prevStep: function () {
      this.$router.push({
        name: 'EventPage',
        params: {
          id: this.eventId
        }
      })
    },
    submitEmergencyContactsForChildren: function () {
      const requests = this.children.map(child => api.submitEmergencyContacts(child.id, this.contacts))
      const that = this
      Promise.all(requests)
        .then(_ => {
          return this.$store.dispatch('establishCurrentUserAsync', Token.currentUserId(this.$auth))
        }).then(function () {
          that.$router.push('/onboarding/child-special-requirements-1/' + that.eventId)
        }).catch(err => {
          console.log('something went wrong with emergency contact submission')
          console.log(err)
        })
    }
  }
}
</script>
