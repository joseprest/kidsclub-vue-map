<template>
<img :src="iconUrl"
 :width="width" :height="height" alt="">
</template>

<script>

export default {
  name: 'EventCategoryIcon',
  props: ['width', 'height', 'category'],
  computed: {
    iconUrl: function () {
      return require('@/assets/' + this.iconImage)
    },
    iconImage: function () {
      switch (this.category) {
        case 'movie night':
          return 'movie-camera.svg'
        case 'arts & crafts':
          return 'artist-palette.svg'
        case 'games & puzzles':
          return 'chess-pawn.svg'
        case 'board games':
          return 'chess-pawn.svg'
        case 'baking':
          return 'birthday-cake.svg'
        case 'book club':
          return 'books.svg'
        default:
          return 'grinning-face-with-smiling-eyes.svg'
      }
    }
  }
}
</script>
