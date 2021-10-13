<template>
  <router-link
  :to="{ path: '/event/' + eventId + '/edit' }"
  class="edit-button w-button"
  >EDIT
  </router-link>
</template>

<script>

export default {
  name: 'EditButton',
  props: ['eventId']
}

</script>

<style scoped>

.edit-button {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #00000000;
  text-align: center;
  color: #1f88e9;
  border: 1px solid #1f88e9;
}

.edit-button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.edit-button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

@media (max-width: 479px) {
  .edit-button {
    width: 100%;
    margin-top: 20px;
  }
}

</style>
