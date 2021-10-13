<template>
  <Question
    title="Choose a time for your activity"
    subtitle="Each activity runs 3 hours in the evening, but the start time is up to you. (You'll choose the date next.)">
    <RadioButtons
      v-model="timeSelected"
      :choices="times" />
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import RadioButtons from '@/components/base/RadioButtons.vue'
var moment = require('moment')

export default {
  name: 'EventTime',
  props: ['value'],
  components: { Question, RadioButtons },
  data () {
    return {
      timeSelected: '',
      errorMesg: 'Please choose a time for your playdate.',
      times: [
        '5:00pm - 8:00pm',
        '5:30pm - 8:30pm',
        '6:00pm - 9:00pm',
        '6:30pm - 9:30pm',
        '7:00pm - 10:00pm'
      ]
    }
  },
  mounted: function () {
    this.$emit('input', {
      err: this.errorMesg
    })
  },
  computed: {
    err: function () {
      if (!this.timeSelected) {
        return this.errorMesg
      } else {
        return false
      }
    },
    startTimeUnparsed: function () {
      return this.timeSelected.substring(0, this.timeSelected.indexOf(' '))
    },
    startTime: function () {
      return moment(this.startTimeUnparsed, 'h mm a').format('HH:mm')
    },
    endTime: function () {
      return moment(this.startTime, 'HH:mm').add(3, 'hours').format('HH:mm')
    }
  },
  watch: {
    timeSelected: function () {
      this.$emit('input', {
        start: this.startTime,
        end: this.endTime,
        err: this.err
      })
    }
  }
}
</script>

<style scoped>

.describe-label {
  color: white;
  padding-top: 16px;
}

textarea {
  height: 96px;
}

.onb-content-container {
  min-height: 100vh;
}

</style>
