<template>
  <Question
    :title="question"
    :subtitle="description">
    <RadioButtons
      v-model="yesOrNo"
      :choices="['yes', 'no']" />
    <slot></slot>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import RadioButtons from '@/components/base/RadioButtons.vue'

export default {
  name: 'YesOrNo',
  components: { Question, RadioButtons },
  props: ['value', 'question', 'description'],
  data () {
    return {
      yesOrNo: this.value.isTrue ? 'yes' : (this.value.isTrue === false ? 'no' : null),
      errorMesg: 'Please answer yes or no.'
    }
  },
  mounted: function () {
    this.emitData()
  },
  methods: {
    emitData: function () {
      this.$emit('input', Object.assign(this.value, {
        isTrue: this.trueOrFalse,
        err: this.err
      }))
    }
  },
  computed: {
    err: function () {
      if (this.trueOrFalse === null) {
        return this.errorMesg
      } else {
        return false
      }
    },
    trueOrFalse: function () {
      switch (this.yesOrNo) {
        case 'yes':
          return true
        case 'no':
          return false
        default:
          return null
      }
    }
  },
  watch: {
    yesOrNo: function () {
      this.emitData()
    }
  }
}
</script>
