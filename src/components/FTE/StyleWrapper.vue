<template>
  <span :class="[styleIs]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'StyleWrapper',
  props: ['styleIs']
}
</script>

<style lang="scss">

.onb-checkbox {
  margin-top: 22px !important;
  padding-top: 0px;
  padding-bottom: 0px;
}

.onboarding {

  .event-heading {
    color: #333;
  }

  .host-name {
    color: #333;
  }
  /* child birthdate selector */

  ::-webkit-datetime-edit-text {
    color: rgba(0, 0, 0, .3);
    padding: 0 0.3em;
  }

  ::-webkit-datetime-edit-month-field {
    color: rgba(0, 0, 0, .3);
    text-transform: uppercase;
  }

  ::-webkit-datetime-edit-day-field {
    color: rgba(0, 0, 0, .3);
    text-transform: uppercase;
  }

  ::-webkit-datetime-edit-year-field {
    color: rgba(0, 0, 0, .3);
    text-transform: uppercase;
  }

  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, .3);
  }

  /* background color state on checkbox list items */

  .active-checkbox {
    background-color: #fff !important;
  }

  .onb-content-container {
    margin: 0 auto;
    max-width: 600px;
    min-height: 100vh;
  }

  textarea,input[type="text"] {
    -webkit-appearance: none;
  }

  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .body {
    font-family: soleil, sans-serif;
    color: #333;
    font-size: 14px;
    line-height: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .host-name {
    a {
      color: #333;
    }
  }

  .list-container {
    margin-top: 16px;
  }

  .list-item-1-container {
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
  }

  .image {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }

  .list-item-content-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-right: 16px;
    margin-left: 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .heading {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0px;
    margin-bottom: 4px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 16px;
    text-align: center;
  }

  .invite-friends-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 24px 16px;
    padding: 40px 24px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
  }

  .button {
    border-radius: 4px;
    background-color: blue;
    color: white;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  .map-container {
    position: relative;
  }

  .avatar-on-map {
    position: absolute;
    left: 102px;
    top: 96px;
    z-index: 3;
    width: 32px;
    height: 32px;
    border: 4px solid #1f88e9;
    border-radius: 100px;
    box-shadow: 0 9px 10px 0 rgba(0, 0, 0, .2);
  }

  .avatar-on-map-2 {
    position: absolute;
    left: 217px;
    top: 153px;
    z-index: 3;
    width: 32px;
    height: 32px;
    border: 4px solid #1f88e9;
    border-radius: 100px;
    box-shadow: 0 9px 10px 0 rgba(0, 0, 0, .2);
  }

  .list-info-1 {
    color: rgba(0, 0, 0, .5);
    font-size: 13px;
    text-align: left;
  }

  .home-on-map {
    position: absolute;
    left: 158px;
    top: 131px;
    z-index: 3;
    box-shadow: none;
  }

  .map {
    height: 250px;
  }

  .div-block {
    height: 100px;
  }

  .group-title-container {
    margin-top: 0px;
    padding-top: 40px;
    padding-bottom: 10px;
    background-color: #f2f2f2;
  }

  .list-title {
    margin-top: 0px;
    margin-bottom: 0px;
    color: rgba(0, 0, 0, .5);
    font-size: 13px;
    font-weight: 400;
    text-align: center;
  }

  .button-text {
    padding-left: 0px;
    color: #1f88e9;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1.2px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .button-send-message {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-top: 4px;
    padding-bottom: 4px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .15);
  }

  .button-send-message-2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 38px;
    min-width: 38px;
    padding: 6px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgba(31, 136, 233, .15);
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

  .form-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 32px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .form-block {
    display: block;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
  }

  .text-span {
    font-weight: 700;
  }

  .availability-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 60px;
    padding-right: 16px;
    padding-left: 16px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    text-align: left;
  }

  .link-block {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: #1f88e9;
    font-weight: 700;
  }

  .time-block {
    color: #2b8eea;
    font-size: 16px;
  }

  .image-3 {
    padding-left: 9px;
  }


  .list-item-content-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 0px 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    text-align: left;
  }

  .kids-container {
    width: 100%;
    padding-top: 8px;
    padding-right: 16px;
    padding-left: 16px;
  }

  .image-time {
    margin-top: 2px;
    margin-right: 6px;
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
    background-color: #fff;
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

  .list-item-3-title-bar {
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
  }

  .splash-button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .6);
  }

  .list-title-2 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }

  .group-title-container-2 {
    margin-top: 0px;
    padding-top: 40px;
    padding-bottom: 16px;
    padding-left: 16px;
    background-color: #f2f2f2;
  }

  .list-item-4-container {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 16px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    background-color: #fff;
  }

  .phone-text {
    color: #0cba52;
  }

  .label-description-block {
    margin-top: 16px;
  }

  .text-block-5 {
    font-weight: 400;
  }

  .text-block-6 {
    color: rgba(0, 0, 0, .5);
    font-size: 13px;
  }

  .list-item-5 {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 8px;
    padding: 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    background-color: #fff;
  }

  .body-splash {
    background-color: #1f88e9;
  }

  .splash-h1 {
    margin-top: 48px;
    color: #fff;
    font-size: 25px;
    text-align: center;
  }

  .splash-text-50 {
    color: hsla(0, 0%, 100%, .5);
    text-align: center;
  }

  .div-block-4 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 85vh;
    margin-top: 24px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
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
  }

  .splash-text-input {
    width: 220px;
    height: 80px;
    padding-top: 6px;
    padding-bottom: 10px;
    border: 3px none #dbdbdb;
    border-radius: 4px;
    color: #000;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
  }

  .splash-text-input::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .1);
  }

  .splash-text-input:-ms-input-placeholder {
    color: rgba(0, 0, 0, .1);
  }

  .splash-text-input::placeholder {
    color: rgba(0, 0, 0, .1);
  }

  .splash-content-1 {
    margin-bottom: 24px;
  }

  .splash-text-small-50 {
    margin-top: -16px;
    color: hsla(0, 0%, 100%, .5);
    font-size: 11px;
    text-align: center;
  }

  .div-block-5 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
  }

  .splash-3-h1 {
    margin-top: 48px;
    color: #fff;
    font-size: 25px;
    text-align: center;
  }

  .body-splash-2 {
    background-color: #1f88e9;
  }

  .body-splash-3 {
    background-color: #fd6f77;
  }

  .text-span-2 {
    color: rgba(0, 0, 0, .25);
  }

  .text-span-3 {
    color: rgba(0, 0, 0, .25);
  }

  .image-5 {
    opacity: 0.3;
  }

  .text-span-4 {
    font-size: 10px;
    font-weight: 400;
  }

  .text-span-5 {
    color: hsla(0, 0%, 100%, .5);
    font-size: 10px;
    line-height: 15px;
  }

  .text-span-6 {
    color: hsla(0, 0%, 100%, .5);
    font-size: 10px;
  }

  .avatar-name-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-right: 24px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .list-item-4-link-block-copy {
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
  }

  .onb-index-heading {
    margin-top: 0px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-style: none none solid;
    border-width: 1px;
    border-color: #000 #000 rgba(0, 0, 0, .3);
    font-size: 24px;
  }

  .onb-content-container {
    margin-bottom: 0px;
    padding: 32px 32px 72px;
    background-color: #1d8be7;
  }

  .onb-content-container._100vh {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 100vh;
  }

  .onb-heading-large {
    margin-top: 0px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  .onb-heading-small {
    margin-top: 0px;
    margin-bottom: 10px;
    color: hsla(0, 0%, 100%, .5);
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  .onb-paragraph {
    margin-bottom: 8px;
    color: #fff;
    line-height: 21px;
    text-align: center;
  }

  .onb-paragraph-small {
    margin-bottom: 8px;
    color: #fff;
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.2px;
  }

  .onb-index-container {
    margin-bottom: 32px;
    padding: 32px;
    background-color: #fff;
  }

  .onb-index-style-heading {
    margin-top: 72px;
    margin-bottom: 11px;
    color: #e6a6ff;
    font-size: 16px;
    line-height: 32.5px;
    text-align: left;
    text-transform: none;
  }

  .checkbox-field {
    display: block;
  }

  .form-block-2 {
    margin-bottom: 0px;
  }

  .onb-body {
    overflow: visible;
    padding-bottom: 0px;
    background-color: #0d73c7;
  }

  .onb-top-content-container {
    margin-bottom: 32px;
    color: #fff;
  }

  .onb-checkbox-label {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 6px;
    color: #1d8ae7;
  }

  .onb-paragraph-small-50 {
    margin-bottom: 8px;
    color: hsla(0, 0%, 100%, .5);
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.2px;
  }

  .paragraph-small-50 {
    margin-bottom: 8px;
    color: hsla(0, 0%, 100%, .5);
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.2px;
  }

  .onb-form-checkbox-list {
    color: transparent;
  }

  .onb-form-block-checkbox-list {
    width: 100%;
    margin-bottom: 24px;
    color: transparent;
  }

  .checkbox-field-extra-space {
    display: block;
    margin-bottom: 8px;
    padding-left: 35px;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
  }

  .checkbox-field-extra-space:active {
    background-color: #fff;
  }

  .checkbox-field-extra-space:focus {
    background-color: #fff;
  }

  .list-item-7 {
    margin-bottom: 4px;
  }

  .onb-location-search-container {
    width: 100%;
  }

  .location-text-field {
    height: 56px;
    padding-top: 8px;
    padding-left: 18px;
    border: 1px none #000;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
    font-size: 16px;
  }

  .location-text-field:active {
    background-color: #fff;
  }

  .location-text-field:focus {
    background-color: #fff;
  }

  .location-text-field::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .location-text-field:-ms-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .location-text-field::placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .onb-radio-form-block {
    width: 100%;
  }

  .onb-radio-button-field {
    margin-bottom: 8px;
    padding-left: 35px;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
  }

  .onb-radio-button-field:active {
    background-color: #fff;
  }

  .onb-radio-button-field:focus {
    background-color: #fff;
  }

  .onb-radio-button-label {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 6px;
    color: #1d8ae7;
  }

  .onb-radio-button {
    margin-top: 22px;
  }

  .onb-body-splash {
    overflow: visible;
    background-color: #fff;
  }

  .div-block-6 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 30vh;
    padding: 32px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .onb-splash-title-container {
    margin-bottom: 0px;
    padding: 32px;
  }

  .onb-field-label {
    margin-top: 24px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: 700;
  }

  .onb-child-info-container {
    width: 100%;
  }

  .basic-text-field {
    height: 56px;
    padding-top: 8px;
    padding-left: 18px;
    border: 1px none #000;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
    font-size: 16px;
  }

  .basic-text-field:focus {
    background-color: #fff;
  }

  .basic-text-field::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .basic-text-field:-ms-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .basic-text-field::placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .onb-paragraph-subheading-2 {
    margin-bottom: 8px;
    color: #fff;
    font-size: 13px;
    line-height: 21px;
    text-align: center;
  }

  .onb-index-heading-2 {
    margin-top: 0px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-style: none none solid;
    border-width: 1px;
    border-color: #fff;
    color: #fff;
    font-size: 24px;
  }

  .checkbox-label {
    padding-left: 6px;
    color: #fff;
  }

  .onb-button-add-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 63px;
    padding: 10px 16px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, 0);
  }

  .onb-button-add-group:active {
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .1);
  }

  .onb-button-add-group-text {
    padding-left: 8px;
    color: #fff;
    line-height: 14px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  .onb-child-group-2 {
    margin-bottom: 24px;
    padding: 24px 32px 32px;
    background-color: hsla(0, 0%, 100%, .1);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
  }

  .onb-child-group-heading {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: #fff;
  }

  .form-block-3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .form-2 {
    width: 100%;
  }

  .onb-group-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 50px;
    margin-bottom: 24px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .onb-button-delete-child {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 48px;
    height: 100%;
    margin-right: -16px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, 0);
  }

  .onb-button-delete-child:active {
    background-color: hsla(0, 0%, 100%, .1);
  }

  .name-text-field {
    height: 56px;
    padding-top: 8px;
    padding-left: 18px;
    border: 1px none #000;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
    font-size: 16px;
  }

  .name-text-field:focus {
    background-color: #fff;
  }

  .name-text-field::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .name-text-field:-ms-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .name-text-field::placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .image-6 {
    opacity: 0.5;
  }

  .onb-content-container-2 {
    margin-bottom: 0px;
    padding: 32px 32px 8px;
    background-color: #1d8be7;
  }

  .image-7 {
    margin-top: 1px;
    opacity: 0.5;
  }

  .onb-error-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 60px;
    margin-bottom: 24px;
    padding: 16px 16px 18px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    background-color: #ffbebe;
    color: #c73200;
  }

  .onb-error-label {
    margin-bottom: 6px;
    font-weight: 700;
  }

  .onb-error-text {
    font-size: 13px;
  }

  .image-8 {
    margin-bottom: 24px;
  }

  .div-block-8 {
    width: 300px;
    height: 60px;
    background-color: #80a4bd;
  }

  .onb-step-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 32px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .onb-step-text {
    margin-left: 10px;
  }

  .text-block-7 {
    line-height: 14px;
    text-align: center;
  }

  @media (max-width: 479px) {
    .list-item-1-container {
      padding: 16px;
    }

    .title-bar-container {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .list-item-content-container {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }

    .time {
      clear: both;
    }

    .list-item-4-container {
      padding: 16px;
    }

    .list-item-5 {
      padding: 16px;
    }

    .onb-title-bar {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
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
    background-position: 50% 50%;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    color: #1f88e9;
  }

  .title-bar-back-button:active {
    background-color: hsla(0, 0%, 100%, .2);
    background-size: 24px;
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

  .nav-link {
    position: static;
    width: 100%;
    margin-top: 1px;
    padding: 24px 16px 24px 24px;
    border-top: 1px solid rgba(0, 0, 0, .04);
    color: #1f88e9;
  }

  .nav-link:active {
    background-color: #1f88e9;
    color: #fff;
  }

  .nav-link-2 {
    position: static;
    padding-left: 17px;
  }

  .nav-link-3 {
    position: static;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .map-container {
    position: relative;
  }

  .body {
    background-color: #0d73c7;
  }

  .content-wrapper {
    width: 720px;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #1c8be7;
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
    background-position: 50% 50%;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    color: #1f88e9;
  }

  .button-back:active {
    background-color: hsla(0, 0%, 100%, .2);
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
  }

  .form-describe-need {
    margin-bottom: 24px;
  }

  .link {
    color: hsla(0, 0%, 100%, .6);
  }

  .title {
    margin-top: 0px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  .radio-button {
    margin-top: 22px !important;
  }

  .onb-checkbox {
    margin-top: 22px !important;
  }

  .describe-label {
    margin-bottom: 8px;
    color: #fff;
    line-height: 21px;
    text-align: left;
  }

  .radio-form-block, .onb-form-block-checkbox-list {
    width: 100%;
    margin-bottom: 32px;
  }

  .label-checkbox, .onb-checkbox-label {
    width: 100%;
    padding: 18px 16px 18px 6px;
    color: #fff;
  }

  .title-container {
    margin-bottom: 32px;
    color: #fff;
  }

  .content-container {
    margin-bottom: 0px;
    padding: 32px;
    background-color: #1d8be7;
  }

  .text-area-decribe-need {
    min-height: 120px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 18px;
    border: 1px none #000;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
    font-size: 16px;
  }

  .text-area-decribe-need:active {
    background-color: #fff;
  }

  .text-area-decribe-need:focus {
    background-color: #fff;
  }

  .text-area-decribe-need::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .text-area-decribe-need:-ms-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .text-area-decribe-need::-ms-input-placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .text-area-decribe-need::placeholder {
    color: rgba(0, 0, 0, .3);
  }

  .radio-button-field, .checkbox-field-extra-space {
    margin-bottom: 8px;
    padding-left: 35px;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .7);
  }

  .radio-button-field, .checkbox-field-extra-space:active {
    background-color: #fff;
  }

  .radio-button-field, .checkbox-field-extra-space:focus {
    background-color: #fff;
  }

  .radio-button-label, .onb-checkbox-label {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 6px;
    color: #1d8ae7;
    font-weight: 400;
  }

  @media (max-width: 991px) {
    .content-wrapper {
      width: 670px;
    }

    .title-bar {
      width: auto;
    }
  }

  @media (max-width: 767px) {
    .content-wrapper {
      width: 100%;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }

  @media (max-width: 479px) {
    .title-bar {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .content-container {
      overflow: visible;
    }
  }

  .dropdown-container {
    text-align: center;
    font-size: 24px;
    padding: 0 0 16px 0;
  }

}

.editing {
  body {
    font-family: soleil;
    color: #333;
    font-size: 14px;
    line-height: 20px;
  }
  w-form {
    margin-left: 0;
    margin-right: 0;
  }
  .describe-label {
    color: #3333338f;
  }

  .image-7 {
    display: none;
  }

  .onb-button-add-group {
    padding-bottom: 16px;
  }

  a {
    color: hsla(208.8118811881188, 82.11%, 51.76%, 1.00);
    text-decoration: none;
  }

  .page-actions-wrapper a {
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }

  .body {
    background-color: #f5f5f5;
  }

  .heading-1 {
    margin-bottom: 32px;
  }

  .card, .content-container, .onb-content-container, .onb-content-container-2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 16px;
    padding: 0 32px 40px 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
  }

  .container {
    padding: 0px 32px 100px;
  }

  /* TODO: Make all these one style in the components themselves! */

  .onb-child-info-container {
    width: 100%;
  }

  .onb-child-group-2 {
    width: 100%;
  }

  .card-title, .title, .onb-heading-large, .onb-child-group-heading {
    margin-bottom: 8px;
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;
  }

  .w-input {
    width: 100%
  }

  .location-search-container {
    width: 100%;
  }

  .onb-error-text {
    color: #ff7575;
    margin-top: 16px;
  }
  .card-subtitle {
    margin-bottom: 16px;
    color: #7d7d7d;
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
  }

  .radio-form-block, .w-form {
    width: 100%;
  }

  .radio-form, .w-form {
    margin-top: 8px;
  }

  .radio-button-field, .checkbox-field-extra-space {
    margin-bottom: 8px;
    padding-left: 35px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .04);
  }

  .radio-button-field, .checkbox-field-extra-space:active {
    background-color: rgba(0, 0, 0, .08);
  }

  .radio-button {
    margin-top: 22px;
  }

  .radio-button-label, .onb-checkbox-label {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 6px;
    color: #000;
    font-weight: 400;
  }

  .text-field-label {
    margin-bottom: 8px;
  }

  .form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .select-field {
    width: 70px;
    height: 50px;
    border: 1px solid transparent;
    background-color: #fff;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .06)), to(rgba(0, 0, 0, .06)));
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06));
    font-size: 16px;
  }

  .dropdown-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .en-dash-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-right: 8px;
    padding-left: 8px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .text-field, .w-input {
    width: 100%;
    height: 50px;
    padding-top: 6px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .04);
    font-size: 16px;
    font-weight: 400;
  }

  .text-field:focus {
    background-color: hsla(0, 0%, 100%, .04);
  }

  .textarea {
    width: 100%;
    min-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .04);
    font-size: 16px;
  }

  .textarea:focus {
    border-color: #1f88e9;
    background-color: hsla(0, 0%, 100%, .04);
  }

  .dropdown {
    height: 50px;
    margin-right: 12px;
    border: 1px solid transparent;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .06)), to(rgba(0, 0, 0, .06)));
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06));
    font-size: 16px;
  }

  .form-block {
    width: 100%;
  }

  .form-block-2 {
    display: block;
    width: 100%;
  }

  .form-3 {
    width: 100%;
  }

  .button-primary {
    margin-right: 4px;
    padding: 12px 32px;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    -ms-grid-row-align: auto;
    align-self: auto;
    border-style: solid;
    border-width: 1px;
    border-color: hsla(208.8118811881188, 82.11%, 51.76%, 1.00);
    border-radius: 4px;
    background-color: #1f88e9;
    text-align: center;
  }

  .button-primary:hover {
    border-color: #1b7bd1;
    background-color: #1b7bd1;
    text-decoration: none;
  }

  .button-secondary-small {
    padding: 8px 24px;
    border-style: solid;
    border-width: 1px;
    border-color: hsla(208.8118811881188, 82.11%, 51.76%, 1.00);
    border-radius: 4px;
    background-color: hsla(208.8118811881188, 0.00%, 100.00%, 1.00);
    color: hsla(208.8118811881188, 82.11%, 51.76%, 1.00);
    text-align: center;
  }

  .button-secondary-small:hover {
    border-color: #1b7bd1;
    background-color: #e6e6e6;
    text-decoration: none;
  }

  .page-actions-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 16px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .text-block {
    color: #ff7575;
  }

  .jasons-link {
    border: 1px none #000;
    text-decoration: underline;
  }

  .placeholder-box {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f1f1f1;
  }

  .photo {
    width: 120px;
    height: 120px;
    margin-right: 16px;
    border: 0px solid #000;
    border-radius: 50%;
  }

  .profile-photo-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .emoji {
    width: 150px;
  }

  @media (max-width: 991px) {
    .body {
      padding-bottom: 77px;
    }
    .container {
      padding-bottom: 32px;
    }
    .button-primary {
      height: auto;
    }
    .button-primary:hover {
      border-color: #1f88e9;
      background-color: #1f88e9;
    }
    .button-primary:active {
      background-color: #1b7bd1;
    }
    .button-secondary-small:hover {
      background-color: #fff;
    }
    .button-secondary-small:active {
      background-color: #e6e6e6;
    }
    .page-actions-wrapper {
      position: fixed;
      left: 0%;
      top: auto;
      right: 0%;
      bottom: 0%;
      padding: 16px;
      background-color: #fff;
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .08);
    }
    .photo {
      margin-right: 16px;
    }
    .modal-header {
      padding-right: 72px;
      padding-left: 72px;
    }
    .modal-p {
      width: 100%;
    }
    .modal-unordered-list {
      width: 100%;
    }
    .modal-intro-text {
      width: 100%;
    }
    .emoji {
      width: 100px;
    }
  }

  @media (max-width: 767px) {
    .body {
      padding-bottom: 50px;
    }
    .onb-error-text {
        margin-right: 24px;
      margin-left: 24px;
  }
    .heading-1 {
      margin-right: 24px;
      margin-left: 24px;
    }
    .card {
      padding: 24px;
      border-radius: 0px;
    }
    .container {
      padding-top: 16px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .button-primary {
      display: block;
      padding-top: 6px;
      padding-bottom: 7px;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }
    .button-secondary-small {
      padding-top: 6px;
      padding-bottom: 7px;
    }
    .page-actions-wrapper {
      width: auto;
      min-width: 0px;
      padding-top: 8px;
      padding-bottom: 8px;
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
    }
    .modal-container {
      padding: 16px;
    }
    .modal-header {
      padding-right: 64px;
      padding-left: 64px;
    }
    .modal-content {
      padding-right: 24px;
      padding-left: 24px;
    }
    .modal-close-button {
      width: 32px;
      height: 32px;
      margin-top: 17px;
      margin-left: 16px;
    }
    .modal-footer {
      padding-right: 24px;
      padding-left: 24px;
    }
  }

  @media (max-width: 479px) {
    .heading-1 {
      font-size: 34px;
      line-height: 44px;
    }
    .button-primary {
      width: 100%;
    }
    .photo {
      margin-right: 0px;
      margin-bottom: 16px;
    }
    .profile-photo-container {
      width: 100%;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    .modal-container {
      padding: 16px;
    }
    .modal-header {
      padding-right: 56px;
      padding-left: 56px;
    }
    .modal-title {
      text-align: center;
    }
    .modal-footer {
      padding-bottom: 16px;
      border-top: 1px solid rgba(0, 0, 0, .04);
    }
    .modal-unordered-list {
      list-style-type: disc;
      -webkit-column-span: none;
      column-span: none;
    }
  }

  .dropdown-container {
    text-align: center;
    font-size: 24px;
    padding: 0 0 16px 0;
  }

}

</style>
