<template>
<StyleWrapper styleIs="onboarding">
<div class="body">
  <div class="content-container">
    <div class="title-container">
      <h1 class="title">Messages sent</h1>
      <p class="onb-paragraph-subheading-2">We've sent your messages. You'll receive responses via text message soon! Then simply respond to any questions, finalize the details, and you'll be all set!</p>
    </div>
    <router-link
    class="splash-button w-inline-block"
    :to="{ name: 'Events' }">
    <div class="button-text">CONTINUE</div>
    </router-link>
  </div>
</div>
</StyleWrapper>
</template>

<script>
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'

export default {
  name: 'RequestSuccessful',
  components: { StyleWrapper }
}

</script>
