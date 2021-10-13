<template>
  <span :class="{ uploadButtonActive: !disableUploadButton }">
    <label for="photoUploadInput">
      <slot></slot>
    </label>
    <input
    type="file"
    style="visibility:hidden;"
    id="photoUploadInput"
    name="photoUploadInput"
    v-on:change="upload"
    accept="image/*"
    >
  </span>
</template>
<script>
export default {
  name: 'ImageUploadToCloudinary',
  data () {
    return {
      disableUploadButton: false,
      cloudinary: {
        uploadPreset: 'avatar',
        apiKey: '415594396214129',
        cloudName: 'cottageclass2'
      }
    }
  },
  computed: {
    cloudinaryUploadUrl: function () {
      return `https://api.cloudinary.com/v1_1/${
        this.cloudinary.cloudName
      }/image/upload`
    }
  },
  methods: {
    upload: function (event) {
      this.$emit('startedUploading')
      let files = event.target.files

      let formData = new FormData()
      formData.append('file', files[0])
      formData.append('upload_preset', this.cloudinary.uploadPreset)

      this.disableForm = true

      fetch(this.cloudinaryUploadUrl, { method: 'POST', body: formData })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Network response was not ok')
          }
        })
        .then(response => {
          console.log('cloudinary upload success', response)
          this.disableForm = false
          this.avatar_url = response.secure_url
          this.$emit('imageUpload', this.avatar_url)
        })
        .catch(error => {
          console.error('cloudinary upload error', error)
          this.disableForm = false
        })
    }
  }
}
</script>
