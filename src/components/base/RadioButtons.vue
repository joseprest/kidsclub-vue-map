<template>
    <div class="w-form">
      <form class="onb-form-checkbox-list">
        <div
        v-for="(choice, index) in choices"
        class="checkbox-field-extra-space"
        :class="{'active-checkbox': choice === state}">
          <input
          type="radio"
          :id="choice"
          :value="choice"
          :name="choice"
          class="onb-checkbox w-checkbox-input"
          v-model="state"
          >
          <label :for="choice" class="onb-checkbox-label w-form-label">
            {{ getLabel(index) }}
         </label>
        </div>
    </form>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'RadioButtons',
  props: ['value', 'choices', 'labels'],
  data: () => {
    return { state: null }
  },
  watch: {
    value: function () {
      // update the state if the props change, after a fetch or something
      this.state = this.value
    },
    state: function () {
      this.$emit('input', this.state)
    }
  },
  mounted: function () {
    this.state = this.value
  },
  computed: {
    getLabel: function () {
      return function (i) {
        const choice = this.choices[i]
        if (!this.labels) {
          return choice
        } else {
          const pair = _.filter(this.labels, p => p[0] === choice)[0]
          return pair[1]
        }
      }
    }
  },
  methods: {
    capitalize: _.capitalize
  }
}
</script>
