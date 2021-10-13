<template>
  <Question
    title="Tell us about your pets."
    subtitle="List all your pets in case people have allergies. Are they loud? Yappy? Scary? Any issues, ever?">
    <div class="form-describe-need w-form">
      <form v-on:submit.prevent id="email-form-2">
        <p class="describe-label">{{ charsLeft }} characters left...</p>
        <textarea
          v-model="blurb.text"
          id="field" name="field"
          placeholder="e.g. 'Our dog Cerberus is kinda scary but he's great with kids!'"
          class="text-area-decribe-need w-input">
        </textarea>
      </form>
    </div>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
export default {
  name: 'PetsDescription',
  props: ['value'],
  components: { Question },
  data () {
    return {
      blurb: this.value || '',
      charLimit: 288,
      noTextErrorMsg: 'Please list your pets, including any key details.'
    }
  },
  mounted: function () {
    this.emitData({ err: this.noTextErrorMsg })
  },
  methods: {
    emitData (data) {
      this.$emit('input', Object.assign(this.value, data))
    }
  },
  watch: {
    blurb: {
      handler: function () {
        if (this.blurb.text && this.blurb.text.length >= this.charLimit) {
          this.blurb.err = 'Sorry! Your description needs to be shorter than ' + this.charLimit + ' characters. Can you make it shorter?'
        } else if (this.blurb.text) {
          this.blurb.err = false
        } else {
          this.blurb.err = this.noTextErrorMsg
        }
        this.emitData('input', { err: this.blurb.err, text: this.blurb.text })
      },
      deep: true
    }
  },
  computed: {
    charsLeft: function () {
      if (this.blurb.text) {
        return this.charLimit - this.blurb.text.length
      } else {
        return this.charLimit
      }
    }
  }
}

</script>
