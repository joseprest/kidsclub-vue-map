export default {
  methods: {
    showBriefAllert (message, status) {
      const store = this.$store
      store.commit('showAlert',
        {
          alert: { message, status }
        })
      setTimeout(function () {
        store.commit('hideAlert')
      }, 3000)
    },
    showAlertOnNextRoute (message, status) {
      this.$store.commit(
        'showAlertOnNextRoute',
        {alert: { message, status }}
      )
    }
  }
}
