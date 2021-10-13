<template>
  <div class="form-describe-need w-form">
    <form
      v-on:submit.prevent id="email-form-2"
      >
      <textarea
        v-model="text"
        id="field"
        @input="$emit('input', text)"
        name="field"
        :placeholder="placeholder"
        maxlength="5000"
        class="text-area-decribe-need w-input"
        >
      </textarea>
    </form>
  </div>
</template>
<script>
export default {
  name: 'FormWithTextArea',
  props: ['value', 'placeholder'],
  data () {
    return {
      text: this.value
    }
  }
}
</script>
