<template>
<div class="body">
 <MainNav />
  <div class="top-content-container">
    <div class="page-lead-text">Are you providing care? Simply check children in at drop-off, and check them out at pick-up. Click on the parent name for emergency information.</div>
    <router-link :to="{ name: 'HowItWorks' }" class="button-small-outline w-button">How it works</router-link>
  </div>
  <div class="list-container"
  v-for="person in peopleWhoHaveMadeInquiriesToCurrentUser">
     <Parent :person="person" :currentUser="currentUser" :network="network" :key="person.id"/>
  </div>
</div>
</template>

<script>

import Parent from './Parent.vue'
import MainNav from './MainNav.vue'
import * as api from '@/utils/api.js'
import networks from '@/assets/network-info.json'
import * as Token from '@/utils/tokens.js'
import { mapGetters } from 'vuex'

export default {
  name: 'Bookings',
  components: { Parent, MainNav },
  data () {
    return {
      peopleWhoHaveMadeInquiriesToCurrentUser: [],
      networks: networks
    }
  },
  mounted: function () {
    api.fetchUsersInNetwork(this.network.stub).then(res => {
      this.currentUser = res.find(person => person.id === this.currentUser.id)
    })
    api.fetchUsersWhoHaveMadeInquiries(this.currentUser.id).then(res => {
      this.peopleWhoHaveMadeInquiriesToCurrentUser = res
    })
  },
  computed: {
    network: function () {
      let networkId = Token.currentUserNetworkCode(this.$auth)
      return this.networks.find(network => network.stub === networkId)
    }
  },
  ...mapGetters([ 'currentUser' ])
}
</script>

<style scoped>
.body {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

.list-container {
  margin-top: 16px;
}

.button {
  border-radius: 4px;
  background-color: #000;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.body {
  background-color: #f2f2f2;
}

.button-small-outline {
  padding: 6px 12px;
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: none;
  color: #000;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.page-lead-text {
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
}

.top-content-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}
</style>
