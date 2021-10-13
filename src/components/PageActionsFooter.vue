<template>
   <div class="page-actions-wrapper">
       <a @click="$emit('click')" class="button-primary w-button">{{ buttonText }}</a>
  </div>
</template>

<script>
export default {
  props: ['buttonText'],
  name: 'PageActionsFooter'
}
</script>

<style scoped>

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

@media (max-width: 991px) {

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
}

@media (max-width: 767px) {

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
}

@media (max-width: 479px) {
  .button-primary {
    width: 100%;
  }
}
</style>
