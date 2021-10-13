<template>
  <span>
    <ImageUploadToCloudinary @startedUploading="toggleUploadingState" @imageUpload="addImage">
      <a class="image-upload-photo-link">{{ buttonText }}</a>
    </ImageUploadToCloudinary>
    <div class="scrolling-wrapper">
      <span v-for="imageUrl in imageUrls">
        <img class="event-household-photo" :src="imageUrl">
      </span>
    </div>
  </span>
</template>

<script>
import ImageUploadToCloudinary from '@/components/base/ImageUploadToCloudinary.vue'
export default {
  name: 'MultipleImageUpload',
  components: { ImageUploadToCloudinary },
  props: ['value'],
  data () {
    return {
      imageUrls: this.value,
      uploading: false
    }
  },
  methods: {
    addImage: function (imageUrl) {
      this.imageUrls.push(imageUrl)
      this.$emit('input', this.imageUrls)
      this.toggleUploadingState()
    },
    toggleUploadingState: function () {
      this.uploading ? this.uploading = false : this.uploading = true
    }
  },
  computed: {
    buttonText: function () {
      return this.uploading ? 'Uploading photo...' : 'Add a photo'
    }
  }
}
</script>

<style>
.image-upload-photo-link {
  font-weight: normal;
}

.event-household-photo {
  max-height: 100px;
  min-height: 100px;
  padding-right: 8px;
}

</style>
