<template>
  <div v-if="showPromo" class="promo-container"><img src="@/assets/free.svg" alt="" class="image-free-tag">
    <div class="counter-title">Book in 24 hours for a free first day!</div>
    <div class="counter-subtitle">You're welcome! Offer expires in...</div>
    <div class="counter">
      <div class="counter-item">
        <div id="hour-count" class="count">{{ hours }}</div>
        <div class="label-time-interval">Hours</div>
      </div>
      <div class="counter-item">
        <div id="min-count" class="count">{{ minutes }}</div>
        <div class="label-time-interval">Minutes</div>
      </div>
      <div class="counter-item">
        <div id="sec-count" class="count">{{ seconds }}</div>
        <div class="label-time-interval">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

var Moment = require('moment')

export default {
  name: 'CountdownPromo',
  data () {
    return {
      dateCreated: Date(),
      showPromo: false,
      hours: 23,
      minutes: 59,
      seconds: 59,
      interval: null
    }
  },
  computed: mapGetters(['currentUser']),
  mounted: function () {
    this.interval = setInterval(() => {
      var now = new Moment()
      var promoExpires = new Moment(this.currentUser.dateCreated).add(24, 'hours')
      var duration = Moment.duration(promoExpires.diff(now))
      this.showPromo = Moment().isBefore(promoExpires)
      this.hours = duration.hours()
      this.minutes = duration.minutes()
      this.seconds = duration.seconds()
    }, 1000)
  },
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>

.promo-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 32px;
  padding: 24px 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  background-image: linear-gradient(343deg, #0cba52, rgba(12, 186, 82, .7));
}

.counter {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.counter-item {
  width: 33.33333333%;
}

.count {
  color: #fff;
  font-size: 60px;
  line-height: 68px;
  font-weight: 300;
  text-align: center;
}

.label-time-interval {
  color: #fff;
  font-size: 10px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.counter-title {
  margin-bottom: 8px;
  color: #fff;
  font-size: 25px;
  line-height: 32.5px;
  font-weight: 400;
  text-align: center;
}

.counter-subtitle {
  margin-bottom: 4px;
  color: hsla(0, 0%, 100%, .7);
  line-height: 18.2px;
  text-align: center;
}

.image-free-tag {
  height: 40px;
  margin-bottom: 8px;
}
</style>
