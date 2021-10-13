import * as Token from '@/utils/tokens'
import { mapGetters } from 'vuex'

export default {
  methods: {
    authenticate: function (provider) {
      /*
   *  Logs in the user (Facebook)
   * - follows OAuth flow using VueAuth to get OAuth code
   * - sends code to backend to exchange for access_token
   * - backend fetches access_token, stores it in DB, and sends back JWT for user
   * - VueAuthenticate stores JWT for future API access authorization
   */
      // store value of this to access this.$emit during callback
      let component = this
      this.$auth.authenticate(provider)
        .then(res => {
          console.log('auth SUCCESS')
          return this.$store.dispatch('establishCurrentUserAsync', Token.currentUserId(component.$auth))
        }).then(() => {
          console.log(this.currentUser)
          if (this.currentUser.hasAllRequiredFields && !this.rsvpAttemptedId) {
            // redirect to home screen if they haven't attempted an RSVP
            this.$router.push({ name: 'Events' })
          } else if (this.currentUser.hasAllRequiredFields && !!this.rsvpAttemptedId) {
            // confirm that they want to RSVP if they have attempted an RSVP
            this.$router.push({ name: 'RsvpConfirmation', params: { eventId: this.rsvpAttemptedId } })
          } else if (this.currentUser.id) {
            // begin onboarding
            this.$router.push({ name: 'OnboardNewUser' })
          } else {
            return false
          }
        }).catch(function (err) {
          console.log('auth FAILURE or user not onboarded yet')
          console.log(err)
        })
    }
  },
  computed: mapGetters(['currentUser', 'rsvpAttemptedId'])
}
