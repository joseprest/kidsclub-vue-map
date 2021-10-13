<template>
  <div class="body onb-body">
    <div class="title-bar">
      <a
        @click="$emit('prev')"
        v-bind:class="['button-back', 'w-inline-block', {'button-hidden': hidePrevious}]">
      </a>
      <a
        v-if="button !== 'none'"
        @click="$emit('next')"
        :class="classObject">
      <div class="button-next-text">{{ text }}</div>
      </a>
    </div>
  </div>
</template>

<script>

// states are: skip, next, none, inactive

export default {
  name: 'Nav',
  props: {
    button: {},
    hidePrevious: {
      default: false
    }
  },
  computed: {
    text: function () {
      if (this.button === 'skip') {
        return 'SKIP'
      } else if (this.button === 'done') {
        return 'DONE'
      } else {
        return 'NEXT'
      }
    },
    classObject: function () {
      return {
        'title-bar-next-button-inactive': this.button === 'inactive',
        'title-bar-next-button': !(this.button === 'inactive'),
        'w-inline-block': true
      }
    }
  }
}

</script>

<style scoped>
.onb-body {
  background-color: #0d73c7;
}

.title-bar {
  font-family: soleil, sans-serif;
}

/* NEW THINGS, CLEAN UP */

.title-bar-next-button {
  position: static;
  display: block;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 0px;
  padding: 10px 12px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px none #000;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: none;
  color: #64426b;
}

.title-bar-next-button:active {
  background-color: #64426b;
  color: #fff;
}

.title-bar-next-button-text {
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.title-bar-back-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 7px;
  margin-bottom: 8px;
  margin-left: 10px;
  padding: 18px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: transparent;
  background-image: url('../../assets/arrow-back-white.svg');
  background-position: 50% 50%;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  color: #1f88e9;
}

.button-hidden {
  visibility: hidden;
}

.title-bar-back-button:active {
  background-color: hsla(0, 0%, 100%, .2);
  background-image: url('../../assets/arrow-back-white.svg');
  background-size: 24px;
}

.title-bar-next-button-inactive {
  position: static;
  display: block;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 0px;
  padding: 10px 12px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px none #000;
  border-radius: 4px;
  background-color: hsla(0, 0%, 100%, .3);
  box-shadow: none;
  color: rgba(1, 1, 1, .2);
}

/* EXISTING WORK FROM WEBFLOW MOCK */

.body {
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

a {
  text-decoration: none;
}

.body {
  background-color: #0d73c7;
}

.title-bar {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 1000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  width: 720px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: none;
  border-width: 1px;
  border-color: hsla(0, 0%, 100%, .1);
  background-color: rgba(108, 200, 255, .93);
  background-image: url('../../assets/cclogo-house-blue.svg');
  background-position: 50% 13px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
}

.button-back {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 7px;
  margin-bottom: 8px;
  margin-left: 10px;
  padding: 18px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: transparent;
  background-image: url('../../assets/arrow-back-white.svg');
  background-position: 50% 50%;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  color: #1f88e9;
}

.button-back:active {
  background-color: hsla(0, 0%, 100%, .2);
  background-image: url('../../assets/arrow-back-white.svg');
  background-size: 24px;
}

.button-next {
  position: static;
  display: block;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 0px;
  padding: 10px 12px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px none #000;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: none;
  color: #64426b;
}

.button-next:active {
  background-color: #64426b;
  color: #fff;
}

.button-next-text {
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 991px) {
  .title-bar {
    width: auto;
  }
}

@media (max-width: 479px) {
  .title-bar {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
</style>
