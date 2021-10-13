<template>
  <span class="body">
    <div class="mask">
      <div class="scrolling-wrapper">
        <div class="carousel-image-container" v-for="image in images"><img :src="image"></div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'Images',
  props: ['images']
}
</script>

<style scoped>

.body {
  background-color: #f2f2f2;
  overflow: hidden;
}

.mask {
  height: 123px;
  overflow: hidden;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #fff;
  -webkit-overflow-scrolling: touch;

  padding-bottom: 20px;
  padding-top: 6px;
  box-sizing: content-box;
}

.carousel-image-container {
  flex-shrink: 0;
  width: 111px;
  height: 111px;
  margin-right: 6px;
  background-color: #fff;
}

.carousel-image-container img {
  width: 111px;
  height: 111px;
  width: auto;
  height: 100%;
  background-color: #fff;
}

</style>
