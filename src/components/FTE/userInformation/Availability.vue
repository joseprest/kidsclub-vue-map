<template>
 <Question
   title="When are you available for childcare in a pinch?"
   subtitle="Other parents may text you to request care during the times you choose. There's never any obligation to respond, so just pick times when you're usually available to provide care."
   explanation="You'll be able to accept or decline any requests. Most families list days and times that they are generally at home with their own children or doing a fun or educational activity which they'd like to include other children in.">
   <Checkboxes
     v-model="checkedAvailabilityIds"
     :labels="labelsAndOrder"/>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import Checkboxes from '@/components/base/Checkboxes.vue'

import _ from 'lodash'

export default {
  name: 'Availability',
  props: ['value'],
  components: { Question, Checkboxes },
  data () {
    return {
      checkedAvailabilityIds: [],
      labelsAndOrder: [
        [ 'availableMornings', '9am - 3pm' ],
        [ 'availableAfternoons', '3pm - 7pm' ],
        [ 'availableEvenings', 'After 7pm' ],
        [ 'availableWeekends', 'Weekends' ]
      ]
    }
  },
  watch: {
    availability: function () {
      this.$emit('input', this.availability)
    }
  },
  computed: {
    availability: function () {
      const that = this
      // this converts our array of checkedBoxes to an object with true/false for each id
      const a = _.reduce(that.labelsAndOrder,
        function (res, idAndLabel, index) {
          const id = idAndLabel[0]
          return _.merge(res, { [id]: _.includes(that.checkedAvailabilityIds, id) })
        },
        {})
      return a
    }
  },
  mounted: function () {
    this.checkedAvailabilityIds = []
    for (let k in this.value) {
      if (this.value[k]) {
        this.checkedAvailabilityIds.push(k)
      }
    }
    console.log('A  mounted')
    console.log(this.initialAvailability)
  }
}
</script>

<style lang="scss" scoped>

.onb-content-container {
  height: unset;
  min-height: 100%;
}

.onb-checkbox {
    margin-top: 22px;
}

</style>
