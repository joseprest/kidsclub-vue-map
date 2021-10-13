<template>
  <span>
      <form v-on:submit.prevent id="email-form-2" name="email-form-2" data-name="Email Form 2" class="form-2">
        <div
        v-for="(object, index) in objects"
        class="onb-child-group-2">
          <FormFieldGroup
            :fieldGroups="fieldGroups"
            :key="object.key"
            :heading="headingWord ? headingWord + ' ' + (index + 1) : headings ? headings[index] : ''"
            v-model="objects[index]"
            @remove="removeGroup(object.key)"
            :showRemoveButton="addAndRemove"
          />
        </div>
      </form>
      <a
      v-if="addAndRemove"
      @click="add"
      class="onb-button-add-group w-inline-block">
        <img src="@/assets/add.svg" alt="" class="image-7">
        <div class="onb-button-add-group-text">Add Another {{ headingWord }}</div>
      </a>
    </span>
 </template>
<script>
/*
 * This component is for when you need multiple forms that collect identical information, like child info, or emergency contacts. It lets you determine the number of forms, or (if addAndRemove === true) it lets the user add them ad hoc depending on, say, how many kids they have or contacts they want to add.
*/

import FormFieldGroup from '@/components/base/FormFieldGroup.vue'
var _ = require('lodash/core')

export default {
  name: 'ManyFormFieldGroups',
  components: { FormFieldGroup },
  props:
    [
      'value',
      'headingWord', // e.g. 'Child' which will become 'Child 1', 'Child 2', etc
      'headings', // a list of headings e.g. Mary, Alice
      'addAndRemove', // if true, the user can add and remove field groups.
      'fieldGroups' // an array of objects { name: '', label: '', placeholder: '', type: ''}
    ],
  data () {
    return {
      objects: this.value
    }
  },
  mounted: function () {
    if (this.objects.length < 1) {
      this.objects = [this.newObject()]
    } else {
      // verify keys are in object
      for (let object of this.objects) {
        object.key = _.uniqueId()
      }
    }
  },
  computed: {
    anEmptyObject: function () {
      return this.fieldGroups.reduce(function (obj, aFieldGroup) {
        return { ...obj, [aFieldGroup.name]: '' }
      }, {})
    },
    objectsWithKeysRemoved: function () {
      return this.objects.map(obj => {
        let newObj = JSON.parse(JSON.stringify(obj))
        delete newObj.key
        return newObj
      })
    }
  },
  methods: {
    add: function () {
      this.objects.push(this.newObject())
    },
    removeGroup: function (key) {
      this.objects = this.objects.filter(obj => obj.key !== key)
    },
    newObject: function () {
      let obj = JSON.parse(JSON.stringify(this.anEmptyObject))
      obj.key = _.uniqueId()
      return obj
    }
  },
  watch: {
    objectsWithKeysRemoved: function () {
      this.$emit('input', this.objectsWithKeysRemoved)
    }
  }
}
</script>
