<template>
  <router-link class="provider-item-link" :to="{ name: 'ProviderProfile', params: { person, id: person.id }}">
  <span class="'body'">
    <div class="landing-page-list-item-header">
      <div class="avatar-name-container">
        <AvatarImage :person="person" class="avatar-image" />
        <div class="list-item-3-heading">
          <h5 class="heading">{{ person.firstName }} {{ person.lastInitial }}.</h5>
        </div>
      </div>
      <router-link
          :to="{ name: 'RequestModal', params: { id: person.id }}"
          class="button-send-message w-inline-block"
      >
        <img src="../assets/request-care-blue.svg" class="image-4">
        <div class="list-item-1-button">
          Ask
        </div>
      </router-link>
    </div>
<!-- todo: replace with new images     
    <Images :person="person" />
    -->
<!-- todo: replace with real employer info.      
    <div class="title-bar-and-action-v2">
      <div class="div-block-7">
        <div class="name-and-caption">
          <h5 v-if="person.job && person.job.employer" class="caption">{{ person.title }}
            <span v-if="person.job.employer">at {{ person.employer }}</span>
          </h5>
        </div>
      </div>
      -->
<!-- todo: replace with child age info.      
      <h5 class="caption" v-if="person.children.length">
        <ChildInfo :children="person.children" />
      </h5>
-->  
<!-- Todo: fix style     
      <ProviderInfo :person="person" />
-->      
    </div>
  </span>
</router-link>
</template>

<script>
import Images from './Images.vue'
import AvatarImage from '@/components/base/AvatarImage'
import ProviderInfo from '@/components/base/ProviderInfo.vue'

export default {
  name: 'RequestCareProviderItem',
  props: ['person'],
  components: { Images, AvatarImage, ProviderInfo },
}
</script>

<style scoped>
.body {
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

.body-large>div
 {
  background-color: #d1e3f0;
}

.provider-item-link {
  text-decoration: none;
  color: #333;
}

.provider-item-link:hover {
  text-decoration: none;
}

img {
  display: inline-block;
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
  background-color: #1c8be7;
}

.avatar-image {
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
  margin-bottom: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
}

.black-50 {
  color: rgba(0, 0, 0, .5);
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

.button-invite {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 100px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  border: 1px;
  border-color:#333;
  padding: 9px 24px;
  background-color:#71e0a1;
  font-size: 15px;
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

.title-bar-action-2 {
  width: 24px;
  height: 24px;
}

.text-span {
  font-weight: 700;
}

.small-text-black-40 {
  margin-top: 7px;
  color: rgba(0, 0, 0, .4);
  font-size: 11px;
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

.title-bar-and-action {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 12px 16px 6px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
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

.tags-container {
  display: block;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.small-text-upper-black-40 {
  margin-top: 1px;
  color: rgba(0, 0, 0, .4);
  font-size: 10px;
  line-height: 9px;
  font-weight: 700;
  letter-spacing: 1.03px;
  text-transform: uppercase;
}

.image-tag {
  margin-top: 1px;
  margin-right: 6px;
}

.image-time {
  margin-top: 2px;
  margin-right: 6px;
}

.name-and-caption {
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

.caption {
  margin-top: 0px;
  margin-bottom: 0px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
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

.caption-2 {
  margin-top: 0px;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
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

.providerp-avatar {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}

.providerp-h1 {
  margin-top: 8px;
  margin-bottom: 2px;
  font-size: 20px;
  line-height: 30px;
}

.text-span-2 {
  color: rgba(0, 0, 0, .25);
}

.text-span-3 {
  color: rgba(0, 0, 0, .25);
}

.providerp-children {
  max-width: 500px;
  margin-bottom: 12px;
  color: rgba(0, 0, 0, .5);
  font-size: 13px;
  text-align: center;
}

.checkmark-image {
  margin-right: 8px;
}

.providerp-avatar-name-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.image-5 {
  opacity: 0.3;
}

.check-in-button {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 500;
  margin-right: 168px;
  padding-top: 11px;
  padding-bottom: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(31, 136, 233, .08);
  border-radius: 4px;
  background-color: #deedfc;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
  color: #1f88e9;
  font-size: 13px;
  line-height: 14px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-2 {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 500;
  margin-right: 120px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(31, 136, 233, .08);
  border-radius: 4px;
  background-color: #1f88e9;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
  color: #fff;
  font-size: 13px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-6 {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 58px;
  padding: 9px 15px;
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
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.check-in-button-6-text {
  margin-left: 9px;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.text-span-4 {
  font-size: 10px;
  font-weight: 400;
}

.check-in-button-7 {
  position: absolute;
  top: 16px;
  right: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 168px;
  padding: 9px 15px;
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
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.check-in-button-7-text {
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-7-image {
  margin-bottom: 4px;
  opacity: 1;
}

.text-span-5 {
  color: hsla(0, 0%, 100%, .5);
  font-size: 10px;
  line-height: 15px;
}

.check-in-button-8 {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 128px;
  margin-bottom: 61px;
  padding: 9px 15px 11px;
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
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.text-span-6 {
  color: hsla(0, 0%, 100%, .5);
  font-size: 10px;
}

.check-in-button-8-image {
  margin-bottom: 4px;
  opacity: 1;
}

.check-in-button-8-text {
  margin-top: -5px;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.check-in-button-9 {
  position: absolute;
  top: 16px;
  right: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 65px;
  margin-bottom: 145px;
  padding: 9px 15px 11px;
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
  background-color: #1d8ce7;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, .45);
}

.check-in-button-9-text {
  margin-top: -1px;
  border-radius: 4px;
  color: #fff;
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
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

.list-item-7 {
  margin-bottom: 4px;
  color: #888;
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

.image-6 {
  opacity: 0.5;
}

.image-7 {
  margin-top: 1px;
  opacity: 0.5;
}

.text-block-7 {
  line-height: 14px;
  text-align: center;
}

.div-block-7 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.title-bar-and-action-v2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 12px 16px 6px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.landing-page-v2-h1 {
  margin-top: 0px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
}

.div-block-8 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.landing-page-list-item-header {
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
  background-color: #fff;
  margin: 1px 0 1px 0;
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

  .name-and-caption {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .caption {
    text-align: left;
  }

  .list-item-4-container {
    padding: 16px;
  }

  .caption-2 {
    text-align: left;
  }

  .list-item-5 {
    padding: 16px;
  }
}

/* Remove inner shadow from inputs on mobile iOS */

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
