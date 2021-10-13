<template>
  <Question
    title="What is the name of your event?"
    subtitle="Be sure to give your event a descriptive and appealing title.">
    <form v-on:submit.prevent>
      <input
        @keyup.enter="$emit('pressedEnter')"
        v-model="name"
        type="text"
        class="w-input location-text-field"
        maxlength="288">
    </form>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'

export default {
  name: 'EventName',
  props: ['value'],
  components: { Question },
  data () {
    return {
      name: this.value
    }
  },
  watch: {
    name: function () {
      this.$emit('input', this.name)
    }
  }
}
</script>
