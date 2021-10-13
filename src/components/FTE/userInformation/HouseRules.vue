<template>
  <Question
    title="House rules"
    subtitle="Are there any specific house rules you'd like guests to be aware of?">
    <FormWithTextArea
      placeholder="Shoes off? Allergies? Anything else?"
      v-model="rules" />
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import FormWithTextArea from '@/components/base/FormWithTextArea.vue'

export default {
  name: 'HouseRules',
  components: { Question, FormWithTextArea },
  props: ['value'],
  data () {
    return {
      rules: this.value.text,
      err: false
    }
  },
  watch: {
    rules: function () {
      this.$emit('input', { err: this.err, text: this.rules })
    }
  }
}

</script>
