<template>
  <span>
    <label
      class="onb-field-label"
    >{{ label }}
    </label>
    <input
      :type="type || 'text'"
      class="name-text-field w-input"
      :placeholder="placeholder"
      v-model="fieldValue" />
  </span>
</template>

<script>
export default {
  name: 'FormFieldAndLabel',
  props: ['value', 'placeholder', 'label', 'type'],
  data () {
    return {
      fieldValue: this.value
    }
  },
  watch: {
    fieldValue: function () {
      this.$emit('input', this.fieldValue)
    }
  }
}
</script>
