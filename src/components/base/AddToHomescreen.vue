<template>
  <div>
    <div class="onb-arrow-animation-container"><img src="../assets/Comp_2.gif" height="60" alt=""></div>

    <div class="onb-title-bar"><a @click="prevStep" class="onb-title-bar-back-button w-inline-block"></a>
      <span>
        <a @click="nextStep" class="onb-title-bar-next-button w-inline-block">
          <div class="onb-title-bar-next-button-text">NEXT</div>
        </a>
      </span>
    </div>

    <div class="onb-content-container _100vh">
      <div class="onb-top-content-container">
        <h1 class="onb-heading-large">Add the App</h1>
        <p class="onb-paragraph-subheading-2">Add CottageClass to your home screen</p>
      </div>

      <div class="onb-step-container">
        <div class="onb-number-circle">
          <div class="text-block-7">1</div>
        </div>
        <div class="onb-step-text">Tap the action icon at the bottom</div>
      </div>

      <div class="onb-step-container">
        <div class="onb-number-circle">
          <div class="text-block-7">2</div>
        </div>
        <div class="onb-step-text">Then tap &#x27;Add to Home Screen&#x27;</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AddToHomescreen'
}
</script>
