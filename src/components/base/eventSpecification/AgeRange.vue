<template>
  <Question title="What ages are welcome?" subtitle="Select the youngest and oldest children you can host. Try to be as flexible as possible.">
    <form class="form">
        <Dropdown v-model="minimum" :choices="choices" />
      <div class="en-dash-container">
        <div>–</div>
      </div>
        <Dropdown v-model="maximum" :choices="choices"/>
    </form>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import Dropdown from '@/components/Dropdown.vue'
export default {
  name: 'AgeRange',
  props: ['value'],
  components: { Question, Dropdown },
  data () {
    return {
      minimum: this.value.minimum,
      maximum: this.value.maximum,
      choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    }
  },
  computed: {
    error: function () {
      if (parseInt(this.minimum) > parseInt(this.maximum)) {
        return 'Oops, the minimum age is greater than the maximum age!'
      } else {
        return false
      }
    }
  },
  methods: {
    emitData: function () {
      this.$emit('input', {
        minimum: this.minimum,
        maximum: this.maximum,
        err: this.error
      })
    }
  },
  watch: {
    minimum: function () {
      this.emitData()
    },
    maximum: function () {
      this.emitData()
    }
  }
}
</script>
