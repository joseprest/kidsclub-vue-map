<template>
  <Question
    title="What kind of food will you serve at your activity?"
    subtitle="All hosts must provide a dinner for kids. We may ask you to accommodate allergies and dietary restrictions, but it doesn't have to be time-consuming. Choose one of these tried-and-true options.">
    <RadioButtons
      v-model="foodSelected"
      :choices="foods"/>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'
import RadioButtons from '@/components/base/RadioButtons.vue'

export default {
  name: 'Food',
  props: ['value'],
  components: { Question, RadioButtons },
  data () {
    return {
      foodSelected: this.value.selected,
      errorMesg: 'Please choose a food option from the list.',
      foods: [
        'pizza \ud83c\udf55',
        'tacos \ud83c\udf2e',
        'soup \ud83c\udf5c',
        'pancakes \ud83e\udd5e',
        'rice & beans \ud83c\udf5a',
        'mac \'n\' cheese \ud83e\uddc0',
        'pasta \ud83c\udf5d',
        'chili \ud83c\udf36\ufe0f',
        'hot dogs \ud83c\udf2d',
        'sandwiches \ud83e\udd6a'
      ]
    }
  },
  methods: {
    emitInput: function () {
      this.$emit('input', {
        selected: this.foodSelected,
        err: this.err
      })
    }
  },
  mounted: function () {
    this.emitInput()
  },
  computed: {
    err: function () {
      if (!this.foodSelected) {
        return this.errorMesg
      } else {
        return false
      }
    }
  },
  watch: {
    foodSelected: function () {
      this.emitInput()
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
  height: unset;
}

</style>
