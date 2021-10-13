<template>
  <a v-on:click="share" class="button w-button share-button">{{ buttonText }}</a>
</template>

<script>
export default {
  name: 'ShareButton',
  props: ['buttonText', 'shareTitle', 'shareText', 'shareUrl'],
  methods: {
    share: function () {
      if (navigator.share) {
        navigator.share({
          title: this.shareTitle,
          text: this.shareText,
          url: this.shareUrl
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error))
      } else window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.shareUrl)
    }
  }
}
</script>

<style scoped>

.share-button {
  background-color: #1f88e9;
}

.button {
  border-radius: 4px;
  color: white;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

</style>
