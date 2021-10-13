
<template>
  <div>
    <div class="providerp-background-check-badge-container2" v-if="person.verified">
      <div class="providerp-background-check-badge"><img src="../../assets/check-green.svg" alt="" class="checkmark-image">
        <div class="background-check-text">Background checked</div>
      </div>
    </div>

    <div class="group-container" v-if="person.activities.length">
      <img src="../../assets/tag.svg" class="image-tag">
      <div class="tags-container" v-for="activity in person.activities">
        <div class="tag">
          <div class="small-text-upper-black-40">{{ activity }}</div>
        </div>
      </div>
    </div>
    <div class="group-container" v-if="anyAvailability">
      <img src="../../assets/time.svg" class="image-time">
      <div class="times-container">
        <div class="time" v-if="person.availableMornings">
          <div class="time-tags">9a–3p</div>
        </div>
        <div class="time" v-if="person.availableAfternoons">
          <div class="time-tags">3p–7p</div>
        </div>
        <div class="time" v-if="person.availableEvenings">
          <div class="time-tags">7p-</div>
        </div>
        <div class="time" v-if="person.availableWeekends">
          <div class="time-tags">WEEKENDS</div>
        </div>
      </div>
    </div>
    <div class="list-item-content-container"></div>
  </div>
</template>


<script>
export default {
  name: 'ProviderInfo',
  props: ['person'],
  components: { },
  computed: {
    anyAvailability: function () {
      return this.person.availableMornings ||
             this.person.availableAfternoons ||
             this.person.availableEvenings ||
             this.person.availableWeekends
    }
  }
}
</script>

<style scoped lang=scss>
.providerp-background-check-badge-container2 {
  margin-top: 8px;
  margin-bottom: 6px;
}
.providerp-background-check-badge {
  display: flex;
  padding: 5px 10px;
  align-items: center;
  border-radius: 500px;
  background-color: rgba(12, 186, 82, .2);
}

.background-check-text {
  margin-top: 1px;
  color: #0dba52;
  font-size: 10px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.providerp-background-check-badge-container {
  margin-bottom: 6px;
}

.group-container {
  display: flex;
  align-content: center;
  img {
    margin-right: 6px;
  }
}

.time {
  display: inline-block;
  margin-right: 6px;
  padding: 7px 6px;
  border-radius: 2px;
  background-color: rgba(100, 66, 107, .2);
}

.tag {
  display: inline-block;
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .1);
}

.time-tags {
  margin-top: 1px;
  color: #64426b;
  font-size: 9px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.03px;
}
</style>
