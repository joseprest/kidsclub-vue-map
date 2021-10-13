<template>
  <img :src="url" :class="className" />
</template>

<script>
export default {
  name: 'AvatarImage',
  // TODO I think we can remove this 'className' and just use a class everywhere
  props: ['person', 'className'],
  computed: {
    url: function () {
      const placeholder = '/static/img/avatar-placeholder.b6445ba.png'
      if (this.person) {
        if (this.person.avatar) {
          return this.person.avatar
        } else if (this.person.facebookUid) {
          return 'https://graph.facebook.com/' + this.person.facebookUid + '/picture?width=200'
        } else {
          return placeholder
        }
      } else { return placeholder }
    }
  }
}
</script>
