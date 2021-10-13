<template>
  <router-link
      :to="{ name: 'ContactForm', params: { eventId }}"
      class="contact-button"
  >
    Contact Host
  </router-link>
</template>

<script>

export default {
  name: 'ContactHostButton',
  props: ['eventId']
}

</script>

<style scoped>

.contact-button {
  padding: 12px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  border-style: solid;
  border-width: 1px;
  border-color: hsla(208.8118811881188, 82.11%, 51.76%, 1.00);
  border-radius: 4px;
  background-color: hsla(208.8118811881188, 0.00%, 100.00%, 1.00);
  color: hsla(208.8118811881188, 82.11%, 51.76%, 1.00);
  text-align: center;
  text-decoration: none;
}

.contact-button:hover {
  border-color: #1b7bd1;
  background-color: #e6e6e6;
  text-decoration: none;
}

.contact-button:active {
  background-color: #e6e6e6;
}

@media (max-width: 479px) {
  .contact-button {
    width: 100%;
    margin-top: 0px;
    margin-left: 8px;
    padding-top: 10px;
    padding-bottom: 11px;
  }
}

@media (max-width: 479px) {
  .contact-button {
    margin-top: 13px;
    margin-left: 0px;
  }
}

</style>
