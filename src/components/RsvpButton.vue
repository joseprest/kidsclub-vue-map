<template>
  <div v-if="userParticipating" class="participating-container">
    <div class="button w-button user-participating">&check; RSVP REQUESTED</div>
    <div class="button-sub-link-container">
      <p class="button-sub-link-paragraph">
        <router-link
            class="button-sub-link"
            @click="cancelRSVP"
            :to="{ name: 'CancelRSVP', params: { eventId: eventId }}"
        >
          cancel
        </router-link>
        </p>
    </div>
  </div>
  <div v-else-if="full" class="button full">&check; EVENT IS FULL</div>
  <router-link
      v-else
      :to="{ name: 'RsvpInfoCollection', params: { eventId: eventId }}"
      class="button w-button rsvp-button"
  >
    RSVP
  </router-link>
</template>

<script>

export default {
  name: 'RsvpButton',
  props: ['full', 'userParticipating', 'eventId']
}

</script>

<style scoped>

.button-sub-link-paragraph {
  text-align: right;
  width: 100%;
  font-size: 12px;
  display:inline-block;
}

.rsvp-button {
  background-color: #1f88e9 !important;
  text-align: center !important;
}

.button-sub-link {
  margin-right: 0px;
  color: #1f88e9;
  text-decoration: none;
}

.button {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
  color: #fff;
}

.rsvp-button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.rsvp-button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.user-participating {
  background-color: transparent !important;
  color: rgb(12, 186, 82);
  border-style: solid;
  border-width: 1px;
  border-color: rgb(12, 186, 82);
  cursor: unset;
}

.full {
  background-color: transparent !important;
  color: #ff672f !important;
}

.participating-container {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

@media (max-width: 479px) {
  .button {
    width: 100%;
    margin-top: 20px;
  }
  .full {
    text-align: center !important;
  }
  .button-sub-link-container {
    width: 100%;
  }
}

</style>
