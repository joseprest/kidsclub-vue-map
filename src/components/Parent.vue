<template>
  <div class="list-item-3-container">
    <router-link :to="{ name: 'emergencyInfo', params: { id: person.id }}" class="list-item-3-title-bar">
      <AvatarImage :person="person" class="image" />
      <div class="list-item-3-heading">
        <h5 class="heading">{{ person.firstName}} {{ person.lastInitial }}. </h5>
      </div>
    </router-link>
    <div class="list-item-3-child-list">
      <div class="text-block">
        <ChildInfo :children="person.children" />
    </div>
  </div>
  <div v-if="checkState !== 'error'" class="list-item-3-actions">
    <!-- check in button -->
    <a class="list-item-3-link-block w-inline-block" @click="check('in')">
      <div v-if="checkState=='checking in'" class="list-item-3-button-text">Checking in...</div>
      <div v-if="checkState=='checked in'" class="list-item-3-button-text">&#10004; Checked in</div>
      <div v-if="checkState=='checked out' || checkState=='unknown' || checkState=='checking out'" class="list-item-3-button-text">Check In</div>
    </a>
    <!-- check out button -->
    <a class="list-item-3b-link-block w-inline-block" @click="check('out')">
      <div v-if="checkState=='checking out'" class="list-item-3-button-text">Checking out...</div>
      <div v-if="checkState=='checked out'" class="list-item-3-button-text">&#10004; Checked out</div>
      <div v-if="checkState=='checked in' || checkState=='unknown' || checkState=='checking in'" class="list-item-3-button-text">Check Out</div>
    </a>
  </div>
  <div class="note-container" v-if="checkState=='error'">
    <div class="note">
      <div>We're sorry! There was a problem saving your check-in. To make sure it's recorded properly, call or text us right away at <a href="tel:‭+1-862-294-4859‬">862-294-4859‬</a>.</div>
    </div>
  </div>
</div>
</template>

<script>
import AvatarImage from '@/components/base/AvatarImage'
import ChildInfo from '@/components/ChildInfo.vue'

// import google sheets API service
import sheetsu from 'sheetsu-node'

// create a config file to identify which spreadsheet we push to.
var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/62cd725d6088' })

export default {
  name: 'Parent',
  props: ['person', 'currentUser', 'network'],
  components: { AvatarImage, ChildInfo },
  data () {
    return {
      checkState: 'unknown' // "unknown", "checking in", "checked in", "checking out", "checked out", "error"
    }
  },
  methods: {
    calculateHourlyRate: function (numChildren) {
      const siblingDiscount = 0.5
      const price = parseFloat(this.network.price)
      if (numChildren === 1) {
        return price
      } else if (numChildren > 1) {
        return price + (siblingDiscount * price * (parseInt(numChildren) - 1))
      } else {
        return ''
      }
    },
    check: function (inOrOut) {
      let numChildren = 1
      this.checkState = 'checking ' + inOrOut
      if (inOrOut === 'in') {
        if (this.person.children.length > 1) {
          numChildren = parseInt(prompt('How many children are checking in?', this.person.children.length))
        }
      }
      client.create({
        'Parent ID': this.person.id,
        'Parent Name': this.person.firstName + ' ' + this.person.lastInitial,
        'Provider ID': this.currentUser.id,
        'Provider Name': this.currentUser.firstName + ' ' + this.currentUser.lastInitial,
        '# Children': numChildren,
        'Checked': inOrOut,
        'Time': Date(),
        'Provider Phone #': this.currentUser.phone,
        'Network': this.network.name,
        'Network rate': this.network.price,
        'Total hourly rate': this.calculateHourlyRate(numChildren),
        'Percentage': this.network.percentage,
        'Network Code': this.network.stub
      }, 'events').then((data) => {
        console.log(data)
        this.checkState = 'checked ' + inOrOut
      }, (err) => {
        console.log(err)
        this.checkState = 'error'
      })
    }
  }
}
</script>

<style scoped>
.body {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

a {
  text-decoration: none;
}

.list-container {
  margin-top: 16px;
}

.list-item-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 4px;
  padding: 24px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: none;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 #fff;
}

.image {
  width: 40px;
  height: 40px;
  border-radius: 100px;
}

.heading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 2px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 15px;
  text-align: center;
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

.text-block {
  font-size: 13px;
}

.body {
  background-color: #f2f2f2;
}

.div-block {
  height: 100px;
}

.list-title {
  margin-top: 0px;
  margin-bottom: 0px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

.list-item-3-button-text {
  padding-left: 0px;
  color: #1f88e9;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
}

.div-block-3 {
  margin-top: 9px;
  padding: 11px 16px;
  border-style: none;
  border-color: #000;
  border-radius: 16px;
  background-color: #ddeefb;
}

.text-block-3 {
  font-size: 12px;
  line-height: 15px;
}

.title-bar-container {
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
  border-style: none none solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .1);
  background-color: #fff;
}

.list-item-1-button {
  margin-left: 6px;
  border-radius: 4px;
  color: #1f88e9;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.heading-3 {
  text-align: left;
}

.text-span {
  font-weight: 700;
}

.link-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #1f88e9;
  font-weight: 700;
}

.image-3 {
  padding-left: 9px;
}

.list-item-3-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: none none solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 #fff;
}

.list-item-3-title-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.list-item-3-heading {
  margin-left: 12px;
}

.list-item-3-child-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-left: 16px;
}

.list-item-3-actions {
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
}

.list-item-3-link-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 48%;
  padding: 16px;
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
  border-radius: 4px;
  background-color: #aff0fc;
  cursor: pointer;
}

.check-in-image {
  margin-bottom: 3px;
  margin-left: -3px;
}

.list-item-3b-link-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 48%;
  padding: 16px;
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
  border-radius: 4px;
  background-color: #deedfc;
  cursor: pointer;
}

.note-container {
  display: block;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px;
  background-color: #fff;
  color: red;
}

.note {
  padding: 16px;
  border-style: solid;
  border-width: 4px;
  border-color: rgba(191, 43, 252, .09);
  background-color: #f6e7ff;
  color: #c200ff;
  font-size: 11px;
  line-height: 15px;
}

.note a {
  text-decoration: underline;
}

.text-block-4 {
  padding: 16px;
}

.note-text {
  padding: 16px;
  font-size: 10px;
  line-height: 15px;
}

.check-out-image {
  margin-bottom: 3px;
}

@media (max-width: 479px) {
  .list-item-container {
    padding: 16px;
  }

  .title-bar-container {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
</style>
