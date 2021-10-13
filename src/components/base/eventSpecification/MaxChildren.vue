<template>
  <Question
  title="How many children can you host at your playdate?"
  explanation="For each child you host, you receive points that you can use to attend others' playdates.">
  <div class="dropdown-container">
      <div>
        <select v-model="maxChildren">
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
    </div>
  </Question>
</template>

<script>
import Question from '@/components/base/Question.vue'

export default {
  name: 'MaxChildren',
  components: { Question },
  props: ['value'],
  data () {
    return {
      maxChildren: this.value || 2
    }
  },
  mounted: function () {
    this.$emit('input', this.maxChildren)
  },
  watch: {
    maxChildren: function () {
      this.$emit('input', this.maxChildren)
    }
  }
}

</script>
