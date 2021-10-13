<template>
  <Question
    title="Choose your activity"
    subtitle="All members must provide one activity per month. These tried-and-true options work great, and we'll walk you through whichever one you choose.">
    <RadioButtons
      v-model="activitySelected"
      :choices="activities"
    />
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import RadioButtons from '@/components/base/RadioButtons.vue'

export default {
  name: 'EventActivity',
  components: { Question, RadioButtons },
  props: ['value'],
  data () {
    return {
      activitySelected: this.value.selected,
      errorMesg: 'Please choose an activity option from the list.',
      activities: [
        'movie night',
        'arts & crafts',
        'games & puzzles',
        'baking',
        'book club'
      ]
    }
  },
  methods: {
    emitInput: function () {
      this.$emit('input', {
        selected: this.activitySelected,
        err: this.err
      })
    }
  },
  mounted: function () {
    this.emitInput()
  },
  computed: {
    err: function () {
      if (!this.activitySelected) {
        return this.errorMesg
      } else {
        return false
      }
    }
  },
  watch: {
    activitySelected: function () {
      this.emitInput()
    }
  },
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
