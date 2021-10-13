<template>
  <Question
  title="What's your phone number?"
  explanation="Only members who RSVP to your playdate will see your phone number. (We may also send you text messages about your playdate or upcoming playdates. Message & data rates apply.)">
    <form v-on:submit.prevent>
      <input
        @keyup.enter="$emit('pressedEnter')"
        v-model="number"
        type="tel"
        class="w-input location-text-field"
        maxlength="30"
        :placeholder="placeholder">
    </form>
  </Question>
</template>

<script>

// Use lighter-weight port of Google libphonenumber with friendlier API
// - https://www.npmjs.com/package/libphonenumber-js
import {
  formatNumber,
  isValidNumber
} from 'libphonenumber-js'
import Question from '@/components/base/Question.vue'

export default {
  name: 'Phone',
  props: ['value', 'currentPhone', 'required'],
  components: { Question },
  data () {
    return {
      number: this.value.number,
      errorMesg: 'Please enter a valid US phone number.',
      placeholder: this.currentPhone || 'e.g. 2125551212'
    }
  },
  mounted: function () {
    if (!this.isComplete && this.required) {
      this.$emit('input', {
        number: this.value.number,
        err: this.error
      })
    }
  },
  computed: {
    phone: function () {
      return {
        number: this.formattedNumberUsa,
        err: this.error
      }
    },
    formattedNumberUsa: function () {
      // still have to slice the country code off
      let num = this.number.replace(/[^\d]/g, '')
      if (num && num[0] === '1' && num.length === 11) {
        num = num.slice(1, num.length)
      }

      // https://www.npmjs.com/package/libphonenumber-js#format-phone-number
      // - arg 'National' does not expect a country code, arg 'International' does expect it
      return formatNumber({ country: 'US', phone: num }, 'National')
    },
    isComplete: function () {
      return this.number && isValidNumber(this.number, 'US')
    },
    error: function () {
      if (this.isComplete) {
        return false
      } else {
        return this.errorMesg
      }
    }
  },
  watch: {
    number: function () {
      this.$emit('input', this.phone)
    }
  }
}
</script>
