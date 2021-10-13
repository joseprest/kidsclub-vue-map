<template>
  <span v-if="participants.length > 0"> with
    <span v-if="participants.length === 1">
      <!-- <router-link class="simple-link" :to="{ name: 'ProviderProfile', params: { id: participants[0].id }}"> -->
        one RSVP
      <!-- </router-link>. -->
    </span>
    <span v-else>{{ participants.length }} RSVP's</span>
    <!-- <span v-else>{{ participants.length }} RSVP's: <span v-for="(participant, index) in participants">
      <router-link class="simple-link" :to="{ name: 'ProviderProfile', params: { id: participant.id }}">
        {{ index + 1 }}
      </router-link><span v-if="index < participants.length - 1">, </span>
    </span></span> -->
  </span>
</template>

<script>
export default {
  name: 'Participants',
  props: ['participants']
}
</script>

<style scoped>
a.simple-link {
  color: #1f88e9;
  text-decoration: none;
}
</style>
