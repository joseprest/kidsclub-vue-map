<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <p class="title">Delete Event?</p>
          </div>
          <p class="message">This event will be removed forever.  This cannot be undone.</p>
          <div class="action-bar">
            <button class="button no-button" @click="$emit('closeModal')">Nevermind</button>
            <button class="button yes-button" @click="deleteEvent">Yes, Delete this event</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from '@/utils/api.js'

export default {
  name: 'DeleteEventConfirmationModal',
  props: [ 'eventId' ],
  methods: {
    deleteEvent: function () {
      api.deleteEvent(this.eventId, () => {
        this.$store.commit('showAlertOnNextRoute', {
          alert: {
            message: 'Your event has been deleted',
            status: 'success'
          }
        })
        this.$router.push({
          name: 'Events'
        })
      })
    }
  }
}
</script>

<style scoped>

p {
  text-align: center;
}

.title {
  font-size: 14px;
  font-weight: bold;
}

.action-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 24px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.modal-body {
  background-color: #fff;
}

.button {
  width: 50%;
  padding: 12px 32px;
  margin: 10px;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
  color: #fff;
}

.button:hover {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.1)),
    to(rgba(0, 0, 0, 0.1))
  );
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  );
}

.button:active {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.1)),
    to(rgba(0, 0, 0, 0.1))
  );
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  );
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

/*
 The following styles are auto-applied to transition elements
 with name="modal" when their visibility is toggled by Vue.js.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 479px) {
  .modal-container {
    width:90%;
  }

  .action-bar {
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .button {
    width: 100%;
    margin: 8px;
  }
}
</style>
