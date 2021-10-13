<template>
  <!-- Proper indentation here would cause spaces to get inserted incorrectly between punctuation like periods, commas.-->
  <span>
    <span v-if="childAgesSorted.length === 1">1 {{ singular }}&mdash;age {{ childAgesSorted[0] }}</span><span v-if="childAgesSorted.length === 2">2 {{ plural }}&mdash;ages {{ childAgesSorted[0] }} and {{ childAgesSorted[1] }}</span><span v-if="childAgesSorted.length > 2">{{ childAgesSorted.length }} {{ plural }}&mdash;ages <span v-for="(age, index) in childAgesSorted"><span v-if="index === childAgesSorted.length - 1"> and {{ age }}</span><span v-else>{{ age}}<span v-if="index !== childAgesSorted.length - 2">, </span></span></span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'ChildAges',
  props: ['childAges', 'singular', 'plural'],
  computed: {
    childAgesSorted: function () {
      return this.childAges.concat().sort((a, b) => a - b)
    }
  }
}
</script>
