<template>
  <div class="admin-messages">
    <div>
      Admin Message Dash
    </div>
    <div>
      <!-- populate a list here -->
      From: <select
        v-model="participantId1"
        @change="possiblyFetchMessages()"
      >
        <option disabled selected value="-1">Select Participant 1</option>
        <option
          v-for="user in users"
          :value="user.id"
        >
          {{ user.firstName }} {{user.lastInitial }}
        </option>
      </select>

      &nbsp;To: &nbsp;<select
        v-model="participantId2"
        @change="possiblyFetchMessages()"
      >
        <option disabled selected value="-2">Select Participant 2</option>
        <option
          v-for="user in users"
          :value="user.id"
        >
          {{ user.firstName }} {{user.lastInitial }}
        </option>
      </select>

      <div v-if="!!loading">
        ... Loading ...
      </div>

      <ul class="message-list">
        <!-- apply conditional classes to go L/R -->
        <li
          v-for="msg in messages"
          :key="msg.id"
          :class="[
            {
              'message-row': true,
              sender: (msg.senderId.toString() === participantId1.toString()),
              receiver: (msg.senderId.toString() === participantId2.toString()),
            }
          ]"
          >
          <div class="message-content">{{ msg.content }}</div>
          <div class="message-time">
            <span>{{ formatDate(msg.createdAt) }}</span>
            <span>{{ formatTime(msg.createdAt) }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import * as Token from '@/utils/tokens.js'
import * as api from '@/utils/api.js'
import moment from 'moment'

export default {
  name: 'AdminMessages',
  // access component through `vm` to check auth
  // see: https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (Token.isLoggedIn(vm.$auth) && Token.isAdminUser(vm.$auth)) {
        console.log('is admin!')
        next()
      } else {
        console.log('Not logged in')
        next({ name: 'SplashPage' })
      }
    })
  },
  data () {
    return {
      users: [],
      participantId1: -1,
      participantId2: -2,
      messages: [],
      loading: true
    }
  },
  mounted: function () {
    // for some reason we don't have the token on mount
    if (Token.isLoggedIn(this.$auth)) {
      this.onMount()
    } else {
      setTimeout(this.onMount, 1000)
    }
  },
  methods: {
    onMount: function () {
      this.fetchAllUsers()
        .then(res => {
          this.loading = false
          this.possiblyFetchMessages()
        })
    },
    // fetch messages if have both pair IDs
    possiblyFetchMessages: function () {
      if (
        this.participantId1 && this.participantId2 &&
        this.participantId1 > 0 &&
        this.participantId2 > 0
      ) {
        return this.fetchMessagesForUserPair()
      } else {
        return Promise.resolve([])
      }
    },
    fetchMessagesForUserPair: function () {
      return api.fetchMessagesForUserPair(this.participantId1, this.participantId2)
        .then(messages => {
          this.messages = messages.sort((a, b) => {
            return a.createdAt - b.createdAt
          })
        })
    },
    fetchAllUsers: function () {
      return api.fetchAllUsers()
        .then(personObjects => {
          let sortedPeople = personObjects.sort((a, b) => {
            if (a.lastInitial === b.lastInitial) {
              return (a.firstName[0] >= b.firstName[0] ? 1 : -1)
            } else {
              return (a.lastInitial >= b.lastInitial ? 1 : -1)
            }
          })
          this.users = sortedPeople
        })
    },
    parseDate: function (datetime) {
      return moment(new Date(datetime))
    },
    formatDate: function (datetime) {
      return this.parseDate(datetime).format('l')
    },
    formatTime: function (datetime) {
      return this.parseDate(datetime).format('LT')
    }
  },
  computed: {
    messagesForParticipant: function (participantId) {
      return this.messages.filter(msg => msg.senderId === participantId)
    }
  }
}

</script>

<style scoped>
  .admin-messages {
    padding: 0 15%;
  }
  .admin-messages .message-list {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    padding-left: 0;
    padding-top: 24px;
  }
  .admin-messages .message-row {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  .admin-messages .sender {
    flex-flow: row-reverse;
    justify-content: flex-start;
  }
  .admin-messages .receiver {
    justify-content: flex-start;
  }
  .admin-messages .message-row .message-content {
    max-width: 43%;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    padding: 12px;
  }
  .admin-messages .message-row .message-time {
    font-size: 0.8rem;
    padding: 18px;
    max-width: 100px;
  }
  .admin-messages .sender .message-content {
    background-color: #0076FF;
    color: white;
  }
  .admin-messages .receiver .message-content {
    background-color: #b9b9b9;
    color: #222;
  }
</style>
