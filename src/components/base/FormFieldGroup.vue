<template>
  <span>
    <div class="onb-group-header">
      <h2 class="onb-child-group-heading">{{ heading }}</h2>
      <a
        v-if="showRemoveButton"
        @click="$emit('remove')"
        class="onb-button-delete-child w-inline-block">
      <img src="@/assets/remove.svg" width="24" height="24" alt="" class="image-6"></a>
    </div>
    <FormFieldAndLabel
      v-for="fieldGroup in fieldGroups"
      v-model="objectOfFormValues[fieldGroup.name]"
      :label="fieldGroup.label"
      :placeholder="fieldGroup.placeholder"
      :key="fieldGroup.name"
      :type="fieldGroup.type"
    />
  </span>
</template>

<script>
import FormFieldAndLabel from '@/components/base/FormFieldAndLabel.vue'
export default {
  name: 'FormFieldGroup',
  components: { FormFieldAndLabel },
  props: [
    'fieldGroups',
    'value', // an array of form entry values from v-model
    'labels', // an array of corresponding field labels
    'names', // an array of key names
    'placeholders', // an array of corresponding form placeholder text
    'heading', // the heading of the group of fields
    'types', // and array of input types for each field
    'showRemoveButton' // show a remove button on each item
  ],
  data () {
    return {
      objectOfFormValues: this.value
    }
  },
  watch: {
    fieldValues: function () {
      this.$emit('input', this.fieldValues)
    }
  }
}
</script>
