<template>
  <StyleWrapper styleIs="onboarding">
    <div class="onb-body">
      <div class="body">
        <div class="content-wrapper">
          <Nav :button="nextButtonState" @next="nextStep" @prev="prevStep" />
          <ErrorMessage v-if="error && showError" :text="error" />
          <Question
            title="Allergies & special requirements"
            subtitle="Please enter any allergies, dietary restrictions, or special needs that you would like to share with the host.">
            <ManyFormFieldGroups
              :fieldGroups="fieldGroups"
              :headings="headings"
              v-model="childrenSpecialRequirements"
            />
          </Question>
        </div>
      </div>
    </div>
  </StyleWrapper>
</template>

<script>
import ManyFormFieldGroups from '@/components/base/ManyFormFieldGroups.vue'
import Question from '@/components/base/Question.vue'
import Nav from '@/components/FTE/Nav.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import { mapGetters } from 'vuex'
import * as api from '@/utils/api.js'

export default {
  name: 'ChildSpecialRequirements',
  components: { ManyFormFieldGroups, Nav, StyleWrapper, Question },
  data () {
    return {
      fieldGroups: [
        {
          label: 'Allergies',
          placeholder: '(Leave blank if none)',
          type: 'text',
          name: 'allergies'
        },
        {
          label: 'Dietary Restrictions',
          placeholder: '(Leave blank if none)',
          type: 'text',
          name: 'dietaryRestrictions'
        },
        {
          label: 'Special Needs',
          placeholder: '(Leave blank if none)',
          type: 'text',
          name: 'specialNeeds'
        }
      ],
      showError: false,
      eventId: this.$route.params.eventId,
      error: 'This is an error',
      childrenSpecialRequirements: []
    }
  },
  created: function () {
    this.childrenSpecialRequirements = this.currentUser.children
  },
  computed: {
    headings: function () {
      return this.currentUser.children.map(child => child.firstName + ', age ' + child.age)
    },
    nextButtonState: function () {
      if (Array.isArray(this.childrenSpecialRequirements) && this.childrenSpecialRequirements.length > 0 && this.childrenSpecialRequirements.reduce((allChildrenSoFar, child) => allChildrenSoFar || ((child.allergies && child.allergies.length > 0) || (child.dietaryRestrictions && child.dietaryRestrictions.length > 0) || (child.specialNeeds && child.specialNeeds.length > 0)), false)) {
        return 'next'
      } else {
        return 'skip'
      }
    },
    newChildren: function () {
      let component = this
      return this.childrenSpecialRequirements.map(function (newReqs, index) {
        let newReqsAsArrays = {
          allergies: [newReqs.allergies],
          dietaryRestrictions: [newReqs.dietaryRestrictions],
          specialNeeds: newReqs.specialNeeds
        }
        return {
          ...component.currentUser.children[index],
          ...newReqsAsArrays // because they are stored as arrays
        }
      })
    },
    ...mapGetters(['currentUser'])
  },
  methods: {
    nextStep: function () {
      this.submitChildSpecialRequirements()
      this.$router.push({
        name: 'RsvpInfoCollection',
        params: {
          eventId: this.eventId
        },
        query: {
          emergencyInfoComplete: 'true'
        }
      })
    },
    prevStep: function () {
      this.$router.go(-1)
    },
    submitChildSpecialRequirements: function () {
      console.log('submitting child requirements', this.newChildren)
      api.submitUserInfo(this.currentUser.id, undefined, undefined, undefined, { list: this.newChildren })
    }
  }
}
</script>
