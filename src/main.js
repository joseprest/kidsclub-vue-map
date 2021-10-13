// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'

/*
 * Cookie setup
 */
import VueCookies from 'vue-cookies'

/*
 *  VueAxios Setup
 *  - access axios via Vue.axios, this.axios, or this.$http
 */
import axios from 'axios'
import VueAxios from 'vue-axios'

// Form validation
import VeeValidate from 'vee-validate'

/*
 * VueAuthenticate setup for FB login
 */
import VueAuthenticate from 'vue-authenticate'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)

/*
 * Copy to clipboard
 */

Vue.use(VueClipboard)

/*
 * Scrolling to anchor links
 */

var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)
Vue.use(VeeValidate)
const origin = window.location.origin

/*
 * Config for VueAuthenticate
 * - stores our auth token
 * - sends it back and forth with every request for us
 * - gives us auth/login/logout methods
 * - see: https://www.npmjs.com/package/vue-authenticate
 */
Vue.use(VueAuthenticate, {
  // baseUrl: 'https://cottageclass-app-api.herokuapp.com',
  baseUrl: process.env.BASE_URL_API,
  withCredentials: true,
  tokenName: 'jwt',
  providers: {
    facebook: {
      clientId: '905335782985620',
      redirectUri: `${origin}/oauth-callback`
      // Add additional scopes (properties) to be retrieved from Facebook here
      // - see link below for properties accessible by default and properties requiring app review:
      // - https://developers.facebook.com/docs/facebook-login/permissions/#reference-default
      // scope: [],
    }
  }
})

axios.interceptors.request.use((config) => {
  let vm = new Vue()
  let auth = vm.$auth
  const tokenHeader = auth.options.tokenHeader
  if (auth.isAuthenticated()) {
    config.headers[tokenHeader] = [
      auth.options.tokenType, auth.getToken()
    ].join(' ')
  } else {
    delete config.headers[tokenHeader]
  }
  return config
})

Vue.config.productionTip = false

/*
 *  Maps config
 */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCAxZ4ERhmcq87C5HK91ujxDLl7gQ_k_-c'
    // libraries: 'geocoder', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    /// / If you want to set the version, you can do so:
    // v: '3.26',
  },
  autobindAllEvents: false

  /// / If you intend to programmatically custom event listener code
  /// / (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  /// / instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  /// / you might need to turn this on.
  // autobindAllEvents: false,

  /// / If you want to manually install components, e.g.
  /// / import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  /// / Vue.component('GmapMarker', GmapMarker)
  /// / then disable the following:
  // installComponents: true,
})

router.beforeEach((to, from, next) => {
  store.dispatch('newRoute', { to, from, next })
})

// passing the router into the analytics plugin will automaticall track page views
Vue.use(VueAnalytics, {
  id: process.env.GOOGLE_ANALYTICS_ID,
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
