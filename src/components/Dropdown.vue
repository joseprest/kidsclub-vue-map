<template>
    <div class="dropdown-group">
      <div v-if="label" class="text-field-label">{{ label }}</div>
      <select v-model="selected" class="select-field w-select">
        <option v-for="choice in choices" :value="choice">{{ choice }}</option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['value', 'choices', 'label'],
  data () {
    return {
      selected: this.value
    }
  },
  watch: {
    selected: function () {
      this.$emit('input', this.selected)
    }
  }
}
</script>
