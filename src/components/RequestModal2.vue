<template>
<div class="body">

<!-- user submits requests -->

<span v-if="step === 1">
  <Nav :button="nextButtonState" @next="saveBookingRequestToSpreadsheet" @prev="$router.go(-1)" />
   <RequestCare class="request-container" v-model="bookingRequest" />
</span>

<!-- user chooses who to send request to -->

<RequestRecipients
  v-if="step === 2"
  :dateTimeSelected="bookingRequest.dateTimeSelected"
  @messagesSent="step = 3" />

<!-- success message -->

<RequestSuccessful v-if="step === 3"/>

</div>
</template>

<script>
import Nav from '@/components/FTE/Nav.vue'
import RequestCare from '@/views/RequestCare.vue'
import * as Token from '@/utils/tokens.js'
import { mapGetters } from 'vuex'
import sheetsu from 'sheetsu-node'
import RequestRecipients from '@/components/RequestRecipients.vue'
import RequestSuccessful from '@/components/RequestSuccessful.vue'

var moment = require('moment')

// create a config file to identify which spreadsheet we push to.
var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/62cd725d6088' })

export default {
  name: 'RequestModal2',
  components: { RequestCare, Nav, RequestRecipients, RequestSuccessful },
  data: function () {
    return {
      step: 1,
      bookingRequest: {
        dateTimeSelected: null,
        description: '',
        err: 'skippable',
        showCountdownPromo: false
      }
    }
  },
  computed: {
    network: function () {
      let networkId = Token.currentUserNetworkCode(this.$auth)
      return this.networks.find(network => network.stub === networkId)
    },
    nextButtonState: function () {
      if (this.bookingRequest.dateTimeSelected === null) {
        return 'inactive'
      } else {
        return 'next'
      }
    },
    ...mapGetters(['currentUser'])
  },
  methods: {
    saveBookingRequestToSpreadsheet: function () {
      client.create({
        'User ID': this.currentUser.id,
        'Name': this.currentUser.firstName + ' ' + this.currentUser.lastInitial + '.',
        'Phone': this.currentUser.phone,
        'Time submitted': moment(Date()).format('LT'),
        'Date submitted': moment(Date()).format('L'),
        'Date requested': moment(this.bookingRequest.dateTimeSelected).format('L'),
        'Time requested': moment(this.bookingRequest.dateTimeSelected).format('LT'),
        'Request Description': this.bookingRequest.description
      }, 'generalRequests').then((data) => {
        console.log(data)
      }, (err) => {
        console.log(err)
      })
      this.step = 2
    }
  }
}

</script>

<style scoped>

.body {
  background-color: #1d8be7;
}

.request-container {
  padding-top: 48px;
}
</style>
