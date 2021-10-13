<template>
  <Question
    title="Choose a day for your monthly activity"
    subtitle="Activities repeat every 4 weeks on the same weekday, unless you change or cancel, so please pick a day when you're usually available. These are the days we need most:">
    <RadioButtons
      v-model="dateSelected"
      :labels="labelsAndOrder"
      :choices="dates" />
    <div
      class="other-date"
      v-if="otherSelected">
      <p class="describe-label">
        Choose another date:
      </p>
      <input
        type="date"
        class="basic-text-field w-input"
        v-model="otherDate">
    </div>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import RadioButtons from '@/components/base/RadioButtons.vue'
var moment = require('moment')

export default {
  name: 'EventDate',
  props: ['value'],
  components: { Question, RadioButtons },
  data () {
    return {
      dateSelected: '',
      errorMesg: 'Please choose a day for your activity.',
      otherDate: null,
    }
  },
  mounted: function () {
    this.$emit('input', {
      err: this.errorMesg
    })
  },
  computed: {
    firstDate: function () {
      return moment().startOf('week').add(3, 'weeks').add(5, 'days')
    },
    datesAsMoments: function () {
      return [
        this.firstDate,
        this.firstDate.clone().add(1, 'days'),
        this.firstDate.clone().add(1, 'weeks'),
        this.firstDate.clone().add(1, 'weeks').add(1, 'days')
      ]
    },
    dates: function () {
      return [...this.datesAsMoments.map(date => date.format('YYYY-MM-DD')), 'Other']
    },
    labelsAndOrder: function () {
      return this.dates.map(date => [date, this.displayDate(date)])
    },
    err: function () {
      if (!this.dateSelected || (this.dateSelected === 'Other' && !this.dateIsValid(this.otherDate))) {
        return this.errorMesg
      } else {
        return false
      }
    },
    otherSelected: function () {
      return (this.dateSelected === 'Other')
    }
  },
  watch: {
    dateSelected: function () {
      this.emitDate()
    },
    otherDate: function () {
      this.emitDate()
    }
  },
  methods: {
    emitDate: function () {
      let date = null
      if (this.otherSelected) {
        date = this.otherDate
      } else {
        date = this.dateSelected
      }
      this.$emit('input', {
        selected: date,
        err: this.err
      })
    },
    dateIsValid: function (date) {
    // for now we just make them enter something
      return !!date
    },
    displayDate: function (date) {
      if (date === 'Other') {
        return 'Other'
      } else {
        return moment(date).format('dddd, MMMM Do')
      }
    }
  }
}
</script>

<style scoped>

p {
  color: white;
}

.describe-label {
  color: white;
  padding-top: 16px;
}

textarea {
  height: 96px;
}

.onb-content-container {
  min-height: 130vh;
}

</style>
