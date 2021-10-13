<template>
  <div class="onb-error-container">
    <div class="onb-error-text">
      <span v-if="text">{{ text }}</span>
      <ul v-if="messages">
        <li v-if="message" v-for="message in messages">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'messages'],
  name: 'ErrorMessage'
}
</script>
