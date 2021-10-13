<template>
  <span>
    <MainNav />
      <div class="body body-2">
          <div class="content-container w-container">
            <div class="primary-container">
              <StyleWrapper styleIs="onboarding">
                <ErrorMessage
                  v-if="showError && (errors.first('email') || errors.first('password')) || errorMessage"
                  :messages="[errorMessage, errors.first('email'), errors.first('password')]"
                  />
              </StyleWrapper>
            <h1 class="auth-heading">Reset Password</h1>
            <div>Please provide your phone number or email and we will contact you to reset your password.</div>
            <div class="auth-wrapper">
              <div class="form-block w-form">
            <form v-on:submit.prevent="submitRequest">
              <input
                @keyup.enter="submitRequest"
                v-validate="'email'"
                name="email"
                v-model="email"
                placeholder="Email"
                class="input-field w-input"
              >
                <div class="divider-container">
                  <div class="divider-1px-2"></div>
                  <div class="or-container">
                    <div class="divider-text">OR</div>
                  </div>
                  <div class="divider-1px-2"></div>
                </div>
              <input
                @keyup.enter="submitRequest"
                v-model="phoneNumber"
                type="tel"
                placeholder="(555)-555-5555"
                class="w-input input-field"
                maxlength="30">
              <button type="submit" class="submit-button w-button">Reset Password</button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </span>
</template>

<script>
import ErrorMessage from '@/components/base/ErrorMessage.vue'
import StyleWrapper from '@/components/FTE/StyleWrapper.vue'
import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'
import {
  formatNumber,
  isValidNumber
} from 'libphonenumber-js'
import sheetsu from 'sheetsu-node'

// create a config file to identify which spreadsheet we push to.
var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/62cd725d6088' })

export default {
  name: 'ResetPassword',
  components: { ErrorMessage, StyleWrapper, MainNav, Footer },
  data: function () {
    return {
      email: '',
      phoneNumber: '',
      showError: false,
      errorMessage: null
    }
  },
  methods: {
    submitRequest: function (event) {
      event.preventDefault()
      let component = this
      this.$validator.validate('email').then(res => {
        if (res && component.email) {
          const email = component.email && component.email.trim().toLowerCase()
          this.submitInfo({ email })
        } else if (component.isValidPhoneNumber) {
          const number = component.formattedNumberUsa
          this.submitInfo({ number })
        } else {
          component.showError = true
        }
      }).catch(function (error) {
        console.log(error)
        component.showError = true
      })
    },
    submitInfo: function (data) {
      client.create(data, 'passwordResetRequests').then((data) => {
        console.log(data)
        this.$router.push({ name: 'Events' })
      }, (err) => {
        console.log(err)
        this.$router.push({ name: 'Events' })
      })
    }
  },
  computed: {
    formattedNumberUsa: function () {
      // still have to slice the country code off
      let num = this.phoneNumber.replace(/[^\d]/g, '')
      if (num && num[0] === '1' && num.length === 11) {
        num = num.slice(1, num.length)
      }
      return formatNumber({ country: 'US', phone: num }, 'National')
    },
    isValidPhoneNumber: function () {
      return !!this.phoneNumber && isValidNumber(this.phoneNumber, 'US')
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 55px;
  line-height: 44px;
  font-weight: 700;
  text-align: center;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 36px;
  font-weight: bold;
}

a {
  color: #1f88e9;
  text-decoration: none;
}

.body {
  overflow: visible;
  background-color: #fff;
  font-family: soleil, sans-serif;
}

.div-block-32 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.divider-2px {
  width: 100%;
  height: 2px;
  background-color: #f3f3f3;
}

.content-container-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 112px 32px;
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

.div-block-33 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 99px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.text-block {
  margin-left: 10px;
  line-height: 19px;
}

.body-2 {
  background-color: #f6f6f6;
}

.primary-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 32px 32px 44px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
}

.content-container-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 112px 32px;
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

.fb-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 12px 24px 12px 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: #3b5998;
  color: #fff;
  text-decoration: none;
}

.fb-button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .15)), to(rgba(0, 0, 0, .15)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .15));
}

.fb-button-text {
  margin-top: 1px;
  margin-left: 12px;
  font-size: 14px;
  text-align: left;
  letter-spacing: 0.4px;
  text-decoration: none;
}

.links:hover {
  text-decoration: underline;
}

.heading-2 {
  margin-top: 0px;
  font-size: 24px;
}

.fb-container-2 {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 10px;
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
  background-color: #fff;
  box-shadow: 0 -1px 8px 0 rgba(0, 0, 0, .05);
}

.fb-button-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 12px 24px 12px 16px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: #3b5998;
  color: #fff;
  text-decoration: none;
}

.fb-button-2:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .15)), to(rgba(0, 0, 0, .15)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .15));
}

.div-block-38 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 200px;
  height: 200px;
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

.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.container-2 {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 32px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button-2 {
  min-height: 40px;
  margin-left: 16px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-2:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .04)), to(rgba(0, 0, 0, .04)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .04), rgba(0, 0, 0, .04));
}

.button-2:active {
  border-color: #1f88e9;
  background-color: #1f88e9;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
  color: #fff;
}

.divider-1px {
  width: 100%;
  min-height: 1px;
  margin-top: 32px;
  background-color: rgba(0, 0, 0, .06);
}

.content-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 32px 32px 60px;
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

.auth-heading {
  margin-top: 0px;
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 49px;
  text-align: center;
  letter-spacing: -0.5px;
}

.divider-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 8px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.div-block-39 {
  background-color: rgba(0, 0, 0, .06);
}

.divider-1px-2 {
  width: 100%;
  min-height: 1px;
  background-color: rgba(0, 0, 0, .1);
}

.text-or {
  padding-right: 9px;
  padding-left: 8px;
}

.or-container {
  padding: 16px;
}

.divider-text {
  color: rgba(0, 0, 0, .4);
}

.form-block {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.input-field {
  height: 44px;
  margin-bottom: 12px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .15);
  border-radius: 4px;
  background-color: transparent;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));
  background-image: linear-gradient(180deg, #fff, #fff);
  font-size: 16px;
}

.submit-button {
  width: 100%;
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #1f88e9;
}

.submit-button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.submit-button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1))), -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.text-field-2 {
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
}

.auth-links {
  line-height: 26px;
  text-align: center;
}

.text-block-2 {
  font-size: 13px;
}

.success-message {
  background-color: #ccffe0;
}

.auth-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 300px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button-3 {
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .15);
  border-radius: 4px;
  background-color: #fff;
  color: #000;
}

.div-block-40 {
  max-height: 80px;
  max-width: 80px;
  min-height: 80px;
  min-width: 80px;
  margin-bottom: 16px;
}

@media (max-width: 991px) {
  .div-block-32 {
    width: 40%;
    padding: 24px 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-top: 1px solid #f4f4f4;
    background-color: #fff;
    box-shadow: 0 14px 20px 0 rgba(0, 0, 0, .11);
  }

  .content-container-2 {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .content-container-3 {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .fb-button-2 {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .button-container {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .content-container {
    padding-top: 32px;
    padding-bottom: 128px;
  }
}

@media (max-width: 767px) {
  .body {
    padding-bottom: 100px;
  }

  .div-block-32 {
    width: 260px;
    margin-right: 32px;
  }

  .content-container-2 {
    padding-right: 32px;
    padding-left: 32px;
  }

  .content-container-3 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .heading-2 {
    font-size: 20px;
    line-height: 26px;
  }

  .fb-container-2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-right: 32px;
    padding-left: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
  }

  .fb-button-2 {
    position: static;
    width: 320px;
  }

  .div-block-37 {
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

  .button-container {
    width: 100%;
    margin-top: 16px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }

  .container-2 {
    padding: 16px 20px;
  }

  .content-container {
    padding: 0px 0px 100px;
  }
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .content-container-2 {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .primary-container {
    padding: 24px;
  }

  .content-container-3 {
    padding: 64px 16px;
  }

  .fb-button {
    padding-bottom: 17px;
  }

  .fb-button:active {
    background-color: #3b5998;
  }

  .fb-button-text {
    font-weight: 400;
  }

  .heading-2 {
    text-align: center;
  }

  .fb-container-2 {
    padding-right: 20px;
    padding-left: 20px;
  }

  .fb-button-2 {
    width: 100%;
    padding-bottom: 17px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .fb-button-2:active {
    background-color: #3b5998;
  }

  .div-block-37 {
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

  .button-container {
    width: 100%;
    margin-top: 17px;
  }

  .container-2 {
    padding-top: 11px;
    padding-bottom: 11px;
  }

  .button-2 {
    min-height: auto;
    margin-left: 10px;
    padding: 6px 10px;
  }

  .content-container {
    padding-bottom: 32px;
    background-color: #f4f4f4;
  }

  .auth-heading {
    font-size: 28px;
    line-height: 26px;
  }

  .auth-wrapper {
    width: 100%;
  }
}
</style>
