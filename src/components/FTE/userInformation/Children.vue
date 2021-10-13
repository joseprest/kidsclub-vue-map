<template>
  <Question
    title="Child Information"
    subtitle="We need some basic info about your children. Their ages will appear on your public profile, but only hosts of events you RSVP to will see their names.">
    <ManyFormFieldGroups
      :fieldGroups="fieldGroups"
      headingWord="Child"
      v-model="children"
      addAndRemove="true"
    />
    </Question>
</template>

<script>
import ManyFormFieldGroups from '@/components/base/ManyFormFieldGroups.vue'
import Question from '@/components/base/Question.vue'

export default {
  name: 'Children',
  props: ['value'],
  components: { Question, ManyFormFieldGroups },
  data () {
    return {
      children: this.value.list,
      errorMesg: 'Please enter a first name (or nickname) and birthdate for each child.',
      fieldGroups: [
        {
          name: 'firstName',
          label: 'First Name',
          placeholder: 'First Name',
          type: 'text'
        },
        {
          name: 'birthday',
          label: 'Birthday',
          placeholder: 'MM / DD / YYYY',
          type: 'date'
        },
        {
          name: 'schoolName',
          label: 'School Name',
          placeholder: 'Name of School',
          type: 'text'
        }
      ]
    }
  },
  computed: {
    childrenValidates: function () {
      // child has name and birthday
      let childValidates = function (child) {
        return (
          child.birthday &&
          child.firstName &&
          child.birthday.length > 0 &&
          child.firstName.length > 0
        )
      }
      if (this.children.length > 0 &&
        // validate that each child has name, birthday
        (this.children.reduce((soFar, child) => soFar && childValidates(child), true))) {
        return true
      } else {
        return false
      }
    },
    error: function () {
      if (this.childrenValidates) {
        return false
      } else {
        return this.errorMesg
      }
    }
  },
  mounted: function () {
    this.$emit('input', {
      list: this.children,
      err: this.error
    })
  },
  watch: {
    children: {
      handler: function () {
        this.$emit('input', {
          list: this.children,
          err: this.error
        })
      },
      deep: true
    }
  }
}
</script>
