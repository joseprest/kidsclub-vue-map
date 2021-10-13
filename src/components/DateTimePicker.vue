<template>
<label class="lpv2-choose-time-button w-inline-block" @click="toggleShowDatetimeInputOnDesktop">
  <div class="div-block-8"><img src="@/assets/time-outline-blue.svg" width="15" height="15" alt="">
    <div
    class="lpv2-choose-time-button-text"
    v-if="hideDateTimeInputOnMobile">{{ timePlaceholder }}</div>
    <input type="datetime-local"
    v-model="dateTimeSelected"
    class="timePlacholderText"
    :class="[{ hideDateTimeInput: hideDateTimeInputOnMobile }]"/>
  </div>
  <img v-if="hideDateTimeInputOnMobile"
  src="@/assets/Dropdown-Arrows.svg">
</label>
</template>

<script>
var moment = require('moment')

export default {
  name: 'DateTimePicker',
  props: ['value', 'showDate'],
  data () {
    return {
      dateTimeSelected: this.value ? moment(this.value).format('YYYY-MM-DDTHH:mm') : null,
      timeZoneString: (this.value && this.value.length > 17) ? this.value.slice(-6) : '',
      hideDateTimeInputOnMobile: true
    }
  },
  methods: {
    toggleShowDatetimeInputOnDesktop: function () {
      if (!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
        this.hideDateTimeInputOnMobile = false
        this.hideDateTimePlaceholderOnDesktop = true
      } else {
        console.log('HTML5 date picker should display on mobile, but it will not on desktop')
      }
    }
  },
  computed: {
    timePlaceholder: function () {
      if (this.dateTimeSelected === null) {
        return 'Choose a time'
      } else if (this.showDate) {
        return moment(this.dateTimeSelected).format('dddd, MMMM D - h:mm a')
      } else {
        return moment(this.dateTimeSelected).format('dddd, h:mm a')
      }
    },
    dateIsValid: function () {
      return moment(this.dateTimeSelected).isValid()
      }
  },
  watch: {
    dateTimeSelected: function () {
      this.$emit('input', this.dateIsValid ? this.dateTimeSelected + this.timeZoneString : false)
    }
  }
}
</script>

<style scoped>

.hideDateTimeInput {
  font-size: 1px;
  opacity: 0
}

@media (max-width: 479px){
  .lpv2-choose-time-button {
    min-width: 100%;
  }
}

.lpv2-choose-time-button {
  background-color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
}

.lpv2-choose-time-button-text {
  margin-right: 16px;
  margin-left: 16px;
  color: #1c8fe5;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.div-block-8 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: unset;
  background-color: unset;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.timePlacholderText {
  color: #1c8fe5;
}

</style>
