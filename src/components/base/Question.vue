<template>
  <div class="content-container">
    <div class="title-container">
      <h1 class="title">{{ title }}</h1>
      <p class="onb-paragraph-subheading-2">{{ subtitle }}</p>
    </div>
    <div class="location-search-container">
      <slot></slot>
    </div>
    <p class="paragraph-small-50">{{ explanation }}</p>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['title', 'explanation', 'subtitle']
}
</script>
