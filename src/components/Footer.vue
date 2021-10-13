<template>
  <div class="footer">
    <div class="divider-2px"></div>
    <div class="footer-container w-container">
      <div class="div-block-33">
        <ul class="footer-unordered-list">
          <li class="footer-link-list-item"><a href="mailto:contact@cottageclass.com" class="links footer-link">contact@cottageclass.com</a></li>
          <li class="footer-link-list-item"><a href="tel:+18622944859" class="links footer-link">‭(862) 294-4859‬</a></li>
          <!-- Additional footer links here -->
        </ul>
        <ul class="footer-social-unordered-list">
          <li class="footer-social-list-item"><a href="https://twitter.com/cottageclass" class="link-block-2 w-inline-block"><img src="@/assets/social---twitter---gray.svg" width="32" height="32" alt=""></a></li>
          <li class="footer-social-list-item"><a href="https://instagram.com/cottageclass" class="link-block-2 w-inline-block"><img src="@/assets/social---instagram---gray.svg" width="32" height="32" alt=""></a></li>
          <li class="footer-social-list-item"><a href="https://cottageclass.tumblr.com/" class="link-block-2 w-inline-block"><img src="@/assets/social---tumblr---gray.svg" width="32" height="32" alt=""></a></li>
          <li class="footer-social-list-item"><a href="https://pinterest.com/cottageclass" class="link-block-2 w-inline-block"><img src="@/assets/social---pinterest---gray.svg" width="32" height="32" alt=""></a></li>
          <li class="footer-social-list-item"><a href="https://facebook.com/cottageclass" class="link-block-2 w-inline-block"><img src="@/assets/social---facebook---gray.svg" width="32" height="32" alt=""></a></li>
        </ul>
      </div>
      <div>
        <ul class="terms-unordered-list">
          <li class="terms-list-item"><a href="#" class="links footer-bottom">© CottageClass 2018</a></li>
          <li class="terms-list-item"><a href="https://cottageclass.com/terms-of-service" class="links footer-bottom">Terms of Service</a></li>
          <li class="terms-list-item"><a href="https://cottageclass.com/privacy-policy" class="links footer-bottom">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

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

.footer-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 112px 32px 0px;
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

.footer {
  background-color: #fff;
  background-image: url('../assets/footer-bottom-image-2.svg');
  background-position: 50% -82%;
  background-size: auto;
  background-repeat: no-repeat;
}

.footer-link {
  color: grey;
  text-decoration: none;
}

.footer-link-list-item {
  margin-right: 6px;
  margin-bottom: 0px;
  margin-left: 6px;
  color: #818181;
  list-style-type: none;
}

.footer-unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 21px;
  padding-left: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.footer-social-unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0px;
}

.footer-social-list-item {
  margin-right: 6px;
  margin-left: 6px;
  list-style-type: none;
}

.terms-list-item {
  margin-right: 6px;
  margin-bottom: 8px;
  margin-left: 6px;
  color: #c49696;
  list-style-type: none;
}

.terms-unordered-list {
  position: static;
  bottom: -1px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  padding-left: 0px;
}

.terms-link {
  color: #9fc2e2;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
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

.list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 28%;
  margin: 24px;
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
  list-style-type: none;
}

.unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  list-style-type: none;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.body-2 {
  background-color: #f6f6f6;
}

.div-block-36 {
  width: 100%;
  padding: 32px;
  background-color: #fff;
}

.link-block-4 {
  color: #000;
  text-decoration: none;
}

.link-block-4:hover {
  text-decoration: underline;
}

.links:hover {
  text-decoration: underline;
}

.links.footer-bottom {
  color: #fff;
}

.links.footer-link {
  text-align: center;
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

  .footer {
    background-position: 50% -84%;
    background-size: auto;
  }

  .unordered-list {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
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

  .footer-container {
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .footer {
    background-position: 50% -80%;
    background-size: auto;
  }

  .list-item {
    width: auto;
    margin-bottom: 22px;
  }

  .unordered-list {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .footer-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .footer {
    background-position: 50% 153px;
    background-size: cover;
  }

  .footer-link-list-item {
    margin-bottom: 16px;
    text-align: center;
  }

  .footer-unordered-list {
    margin-bottom: 26px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .terms-list-item {
    text-align: center;
  }

  .terms-unordered-list {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .terms-link {
    text-align: center;
  }

  .div-block-36 {
    padding: 24px;
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
}

/* New CSS */

body {
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
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

.footer-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 112px 32px 0px;
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

.footer-link {
  color: grey;
  text-decoration: none;
}

.footer-link-list-item {
  margin-right: 6px;
  margin-bottom: 0px;
  margin-left: 6px;
  color: #818181;
  list-style-type: none;
}

.footer-unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 21px;
  padding-left: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.footer-social-unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0px;
}

.footer-social-list-item {
  margin-right: 6px;
  margin-left: 6px;
  list-style-type: none;
}

.terms-list-item {
  margin-right: 6px;
  margin-bottom: 8px;
  margin-left: 6px;
  color: #c49696;
  list-style-type: none;
}

.terms-unordered-list {
  position: static;
  bottom: -1px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  padding-left: 0px;
}

.terms-link {
  color: #9fc2e2;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
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

.list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 28%;
  margin: 24px;
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
  list-style-type: none;
}

.unordered-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  list-style-type: none;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.body-2 {
  background-color: #f6f6f6;
}

.div-block-36 {
  width: 100%;
  padding: 32px;
  background-color: #fff;
}

.link-block-4 {
  color: #000;
  text-decoration: none;
}

.link-block-4:hover {
  text-decoration: underline;
}

.links:hover {
  text-decoration: underline;
}

.links.footer-bottom {
  color: #fff;
}

.links.footer-link {
  text-align: center;
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

  .footer {
    background-position: 50% -84%;
    background-size: auto;
  }

  .unordered-list {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
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

  .footer-container {
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .footer {
    background-position: 50% -80%;
    background-size: auto;
  }

  .list-item {
    width: auto;
    margin-bottom: 22px;
  }

  .unordered-list {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .footer-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .footer {
    background-position: 50% 153px;
    background-size: cover;
  }

  .footer-link-list-item {
    margin-bottom: 16px;
    text-align: center;
  }

  .footer-unordered-list {
    margin-bottom: 26px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .terms-list-item {
    text-align: center;
  }

  .terms-unordered-list {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .terms-link {
    text-align: center;
  }

  .div-block-36 {
    padding: 24px;
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
}

/* For scrolling images */

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Remove inner shadow from inputs on mobile iOS */

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

</style>
