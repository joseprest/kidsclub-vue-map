<template>
<StyleWrapper styleIs="onboarding">
<LoadingSpinner v-if="users === null" />
  <div class="onb-body">
    <div class="body">
      <div class="content-wrapper">
        <Nav button="next" @next="sendInvites" @prev="$emit('prev')" />
        <Alert v-if="alert" />
        <div class="onb-content-container">
          <div class="onb-top-content-container">
            <h1 class="onb-heading-large">Build your village (part 2)</h1>
            <p class="onb-paragraph-subheading-2">
              Here are some KidsClub members who live near you. Want to invite them? They'll get a text from us, with the option to reply.
            </p>
          </div>
          <div class="onb-copy-link-container">
            <div class="onb-copy-link-form-block w-form">
              <div class="list-container full-width">
                <InviteUserListItem v-for="person in users"
                :isAllowedToTurnOn="recipientsSelected < maxRecipientsSelected"
                :person="person"
                :key="person.id"
                v-on:stateSet="userItemStateSet"
                v-on:disallowedSelection="userAttemptedDisallowedSelection"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</StyleWrapper>
</template>

<script>
import Nav from '@/components/FTE/Nav.vue'
import * as api from '@/utils/api.js'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import InviteUserListItem from '@/components/FTE/InviteUserListItem.vue'
import { mapGetters } from 'vuex'
import Alert from '@/components/Alert.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import alerts from '@/mixins/alerts.js'

export default {
  name: 'InviteExistingUsers',
  components: { Nav, StyleWrapper, InviteUserListItem, Alert, LoadingSpinner },
  props: [ 'eventData' ],
  mixins: [alerts],
  data () {
    return {
      users: null,
      inviteStates: {},
      maxRecipientsSelected: 3
    }
  },
  methods: {
    inviteClicked: function (userId) {
      console.log(userId)
    },
    userItemStateSet: function (userId, state) {
      console.log({ state, userId })
      this.inviteStates[userId] = state
    },
    userAttemptedDisallowedSelection: function () {
      this.showBriefAllert(`Sorry, you may only select a maximum of ${this.maxRecipientsSelected}`, 'failure')
    },
    sendInvites: function (person) {
      const that = this
      const requests = this.users
        .filter(person => that.inviteStates[person.id])
        .map(person => api.initProxySession(
          that.currentUser.id,
          person.id,
          that.inviteMessage(person),
          null
        ))
      Promise.all(requests).then(() => {
        console.log('hi')
        that.$router.push({ name: 'Events' })
      }).catch(err => {
        console.log(err)
        that.showAlertOnNextRoute('There was a problem sending your invites', 'failure')
        that.$router.push({ name: 'Events' })
      })
    }
  },
  mounted: function () {
    const currentUser = this.currentUser
    const that = this
    api.fetchUsersWithinDistance(20, currentUser.latitude, currentUser.longitude).then(res => {
      if (res.length > 0) {
        that.users = res.filter(person => parseInt(person.id) !== currentUser.id)
        // set the inviteStates object to all false
        that.users.forEach(user => {
          this.$set(that.inviteStates, user.id, false)
        })
      }
      if (that.users.length === 0) {
        // there are no users within 20 miles so we return to home
        this.$router.push({ name: 'Events' })
      }
    }).catch(err => console.log(err))
  },
  computed: {
    inviteMessage: function () {
      return function (invitee) {
        return `Hi ${invitee.firstName}, ${this.currentUser.firstName} just invited you to their very first KidsClub.io playdate! Can you come? RSVP here: ${this.eventLink} (You can reply to this message to welcome ${this.currentUser.firstName} and ask them any questions.)`
      }
    },
    eventLink: function () {
      return `https://www.kidsclub.io/event/${this.firstEventId}`
    },
    firstEventId: function () {
      return Object.keys(this.eventData.event).sort()[0]
    },
    recipientsSelected: function () {
      const inviteStates = this.inviteStates
      return this.users.reduce((sum, person) => {
        return sum + (inviteStates[person.id] ? 1 : 0)
      }, 0)
    },
    ...mapGetters(['currentUser', 'alert'])
  }
}
</script>

<style lang="scss" scoped>
.full-width {
  width:100%;
}
</style>
