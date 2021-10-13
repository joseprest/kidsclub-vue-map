<template>
<span>
<div class="body-homepage">
  <MainNav />
  <div class="hero-section">
    <div class="hero-container w-container">
      <div class="hero-content">
        <h1 class="h1-display">The best kids&rsquo; activities in your neighborhood are <span class="highlight">free</span></h1>
        <div class="hero-subtitle">Host kids once a month at your home to get free, unlimited access to your neighborhood's best babysitters: other experienced parents like you.</div>
        <a href="" class="button-hero w-button" @click.prevent="$router.push({ name: 'SignUp' })">Sign up today. It's free!</a>
        <div class="how-wrapper">
          <ul class="unordered-list">
            <li class="list-item"><img src="@/assets/give-care.svg" alt="" class="image-262">
              <div class="hero-list-item-heading">Give Care.</div>
              <div class="hero-list-item-subtitle">Host a playdate once a month at your home for 2 or more children. <router-link to="/faq">How it works.</router-link></div>
            </li>
            <li class="list-item"><img src="@/assets/get-care.svg" alt="" class="image-262">
              <div class="hero-list-item-heading">Get Care.</div>
              <div class="hero-list-item-subtitle">By hosting a monthly event, you get unlimited access to <router-link :to="{name: 'Events'}" class="links">activities like these</router-link>.</div>
            </li>
            <li class="list-item"><img src="@/assets/socially.svg" alt="" class="image-262">
              <div class="hero-list-item-heading">Socially.</div>
              <div class="hero-list-item-subtitle">You can invite a circle of trusted friends, or meet new families near you.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="content-section background-01">
    <div class="divider-2px"></div>
    <div class="content-container-3 w-container">
      <h1 class="h1-display">Upcoming Playdates</h1>
      <div class="events-list-wrapper">
        <!--
        <div class="event-date-section-tittle"><img src="@/assets/date-outline-white-oval.svg" alt="" class="image-265">
          <div class="date-text-wrapper">
            <div class="date-title">Friday, February 8</div>
          </div>
        </div>
        <ul class="unordered-list-events">
          <li class="event-list-item">
            <div class="event-list-item-graphic color-purple"><img src="@/assets/artist-palette.svg" alt="" class="emoji"></div>
            <div class="event-list-item-content">
              <div class="spacer w-hidden-main w-hidden-medium"></div>
              <router-link
              :to="{ name: 'EventPage', params: { id: '86' }}"
              class="link-block-4 w-inline-block">
                <h2 class="event-heading">Make your own Valentines Workshop &amp; pizza 💝 with Manisha</h2>
              </router-link>
              <div class="event-summary">
                <div class="event-time">Fri, Feb 8, 2019 at 5:30 PM–8::30 PM</div>
                <div class="event-ages">Ages 3-11 (10 kids total)</div>
                <div class="event-location">Carroll Gardens</div>
              </div>
              <div class="scrolling-wrapper"><img src="@/assets/manisha1.jpg" alt="" class="event-household-photo"><img src="@/assets/manisha2.jpg" alt="" class="event-household-photo"><img src="@/assets/manisha3.jpg" alt="" class="event-household-photo"><img src="@/assets/manisha4.jpg" alt="" class="event-household-photo"></div>
              <div class="action-bar">
                <div class="host-container">
                  <div class="host-info"><img src="@/assets/manisha2.jpg" width="40" height="40" alt="" class="avatar-small">
                    <div class="text-block">Hosted by Manisha &amp; Clark (age 1).</div>
                  </div>
                  <div class="host-meta">
                    <div class="host-occupation">CEO/co-founder, CottageClass</div>
                    <div class="background-checked-wrapper"><img src="@/assets/check-green.svg" alt="">
                      <div class="background-checked">Background Checked</div>
                    </div>
                  </div>
                </div><RsvpButton eventId="86" /></div>
            </div>
          </li>
        </ul>
      -->
        <!--
        <div class="event-date-section-tittle"><img src="@/assets/date-outline-white-oval.svg" alt="" class="image-265">
          <div class="date-text-wrapper">
            <div class="date-title">Sunday, March 3</div>
          </div>
        </div>
        <ul class="unordered-list-events">
          <li class="event-list-item">
            <div class="event-list-item-graphic color-light-blue"><img src="@/assets/artist-palette.svg" alt="" class="emoji"></div>
            <div class="event-list-item-content">
              <div class="spacer w-hidden-main w-hidden-medium"></div>
              <router-link
              :to="{ name: 'EventPage', params: { id: '92' }}"
              class="link-block-4 w-inline-block">
                <h2 class="event-heading">Movie Night &amp; Tacos 🌮 with Jordana</h2>
              </router-link>
              <div class="event-summary">
                <div class="event-time">Sun, Mar 3, 2019 at 10:00 AM - 12:00 PM</div>
                <div class="event-ages">Ages 2-5 (4 kids total)</div>
                <div class="event-location">Red Hook</div>
              </div>
              <div class="scrolling-wrapper"><img src="@/assets/jordanacotton10.jpg" alt="" class="event-household-photo"><img src="@/assets/jordanacotton9.jpg" alt="" class="event-household-photo"><img src="@/assets/jordanacotton5.jpg" alt="" class="event-household-photo"><img src="@/assets/jordanacotton2.jpg" alt="" class="event-household-photo"><img src="@/assets/jordanacotton6.jpg" alt="" class="event-household-photo"><img src="@/assets/jordanacotton7.jpg" alt="" class="event-household-photo"></div>
              <div class="action-bar">
                <div class="host-container">
                  <div class="host-info"><img src="@/assets/jordana.jpg" width="40" height="40" alt="" class="avatar-small">
                    <div class="text-block">Hosted by Jordana &amp; Bastian (age 2).</div>
                  </div>
                  <div class="host-meta">
                    <div class="host-occupation">Psychiatric Nurse Practitioner, the Midtown Practice</div>
                    <div class="background-checked-wrapper"><img src="@/assets/check-green.svg" alt="">
                      <div class="background-checked">Background Checked</div>
                    </div>
                  </div>
                </div><RsvpButton eventId="92" /></div>
            </div>
          </li>
        </ul>
      -->
        <div class="event-date-section-tittle"><img src="@/assets/date-outline-white-oval.svg" alt="" class="image-265">
          <div class="date-text-wrapper">
            <div class="date-title">Monday, March 4</div>
          </div>
        </div>
        <ul class="unordered-list-events">
          <li class="event-list-item">
            <div class="event-list-item-graphic color-green"><img src="@/assets/film-projector.svg" alt="" class="emoji"></div>
            <div class="event-list-item-content">
              <div class="spacer w-hidden-main w-hidden-medium"></div>
              <router-link
              :to="{ name: 'EventPage', params: { id: '104' }}"
              class="link-block-4 w-inline-block">
                <h2 class="event-heading">Movie night &amp; pizza 🍕 with Charlice</h2>
              </router-link>
              <div class="event-summary">
                <div class="event-time">Mon, Mar 4, 2019 at 6:00 PM–9:00 PM</div>
                <div class="event-ages">Ages 2-11 (5 kids total)</div>
                <div class="event-location">Dumbo</div>
              </div>
              <div class="scrolling-wrapper"><img src="@/assets/charlice2.jpg" alt="" class="event-household-photo"><img src="@/assets/charlice3.jpg" alt="" class="event-household-photo"><img src="@/assets/charlice4.jpg" alt="" class="event-household-photo"><img src="@/assets/charlice6.jpg" alt="" class="event-household-photo"><img src="@/assets/charlice5.jpg" alt="" class="event-household-photo"><img src="@/assets/charlice8.jpg" alt="" class="event-household-photo"></div>
              <div class="action-bar">
                <div class="host-container">
                  <div class="host-info"><img src="@/assets/charlice.jpg" width="40" height="40" alt="" class="avatar-small">
                    <div class="text-block">Hosted by Charlice and 4 kids–ages (11, 6, 2 and 2).</div>
                  </div>
                  <div class="host-meta">
                    <div class="host-occupation">Shift Supervisor, Starbucks</div>
                    <div class="background-checked-wrapper"><img src="@/assets/check-green.svg" alt="">
                      <div class="background-checked">Background Checked</div>
                    </div>
                  </div>
                </div><RsvpButton eventId="104" /></div>
            </div>
          </li>
        </ul>
        <div class="event-date-section-tittle"><img src="@/assets/date-outline-white-oval.svg" alt="" class="image-264">
          <div class="date-text-wrapper">
            <div class="date-title">Saturday, March 16</div>
          </div>
        </div>
        <ul class="unordered-list-events">
          <li class="event-list-item">
            <div class="event-list-item-graphic color-hot-pink"><img src="@/assets/film-projector.svg" alt="" class="emoji"></div>
            <div class="event-list-item-content">
              <div class="spacer w-hidden-main w-hidden-medium"></div>
              <router-link
              :to="{ name: 'EventPage', params: { id: '99' }}"
              class="link-block-4 w-inline-block">
                <h2 class="event-heading">Movie night &amp; pizza 🍕 with Rima</h2>
              </router-link>
              <div class="event-summary">
                <div class="event-time">Sat, Mar 16, 2019 at 6:00 PM–9:00 PM</div>
                <div class="event-ages">Ages 4-11 (4 kids total)</div>
                <div class="event-location">Carroll Gardens</div>
              </div>
              <div class="scrolling-wrapper"><img src="@/assets/rima8.jpg" alt="" class="event-household-photo"><img src="@/assets/rima5.jpg" alt="" class="event-household-photo"><img src="@/assets/rima12.jpg" alt="" class="event-household-photo"><img src="@/assets/rima4.jpg" alt="" class="event-household-photo"><img src="@/assets/rima7.jpg" alt="" class="event-household-photo"><img src="@/assets/rima6.jpg" alt="" class="event-household-photo"></div>
              <div class="action-bar">
                <div class="host-container">
                  <div class="host-info"><img src="@/assets/rima.jpg" width="40" height="40" alt="" class="avatar-small">
                    <div class="text-block">Hosted by Rima &amp; Yuri (age 5), PS58</div>
                  </div>
                  <div class="host-meta">
                    <div class="host-occupation">Festival Coordinator &amp; Project Manager</div>
                    <div class="background-checked-wrapper"><img src="@/assets/check-green.svg" alt="">
                      <div class="background-checked">Background Checked</div>
                    </div>
                  </div>
                </div><RsvpButton eventId="99" /></div>
            </div>
          </li>
        </ul>
        <div class="event-date-section-tittle"><img src="@/assets/date-outline-white-oval.svg" alt="" class="image-265">
          <div class="date-text-wrapper">
            <div class="date-title">Thursday, April 18</div>
          </div>
        </div>
        <ul class="unordered-list-events">
          <li class="event-list-item">
            <div class="event-list-item-graphic color-pink"><img src="@/assets/butterfly.svg" alt="" class="emoji"></div>
            <div class="event-list-item-content">
              <div class="spacer w-hidden-main w-hidden-medium"></div>
              <router-link
              :to="{ name: 'EventPage', params: { id: 112 }}"
              class="link-block-4 w-inline-block">
                <h2 class="event-heading">SuperMindfulMe Workshop + Dinner 🍜 with Julie</h2>
              </router-link>
              <div class="event-summary">
                <div class="event-time">Thu, Apr 18, 2019 at 6:00 PM–9:00 PM</div>
                <div class="event-ages">Ages 3-11 (4 kids total)</div>
                <div class="event-location">Cobble Hill</div>
              </div>
              <div class="scrolling-wrapper">
                <img src="@/assets/Julie-Screen-Shot-2019-01-04-at-3.46.43-PM.jpg" alt="" class="event-household-photo"><img src="@/assets/Julie-Screen-Shot-2019-01-04-at-3.45.40-PM.jpg" alt="" class="event-household-photo"><img src="@/assets/Julie-Screen-Shot-2019-01-04-at-3.44.52-PM.jpg" alt="" class="event-household-photo"><img src="@/assets/Julie-Screen-Shot-2019-01-04-at-3.45.13-PM.jpg" alt="" class="event-household-photo"><img src="@/assets/JulieNEW.jpg" alt="" class="event-household-photo"></div>
              <div class="action-bar">
                <div class="host-container">
                  <div class="host-info"><img src="@/assets/julie.jpg" height="40" width="40" alt="" class="avatar-small">
                    <div class="text-block">Hosted by Julie and 2 kids–age 4 and 7, PS29.</div>
                  </div>
                  <div class="host-meta">
                    <div class="host-occupation">Partner Lead, Google</div>
                    <div class="background-checked-wrapper"><img src="@/assets/check-green.svg" alt="">
                      <div class="background-checked">Background Checked</div>
                    </div>
                  </div>
                </div><RsvpButton eventId="112" /></div>
            </div>
          </li>
        </ul>
        <div class="event-date-section-more-events"><router-link :to="{name: 'Events'}" class="button w-button">Show all playdates</router-link></div>

      </div>
    </div>
  </div>

  <!-- End events -->

  <div class="content-section">
    <div class="divider-2px"></div>
    <div class="content-container-2 w-container">
      <h1 class="h1-display">Why KidsClub?</h1>
      <ul class="cottage-class-is-list">
        <li class="cottageclass-is-list-item"><img src="@/assets/easy-to-start.svg" alt="" class="cottageclass-is-list-item-image">
          <div class="cottageclass-is-list-item-text">
            <h2 class="heading-2">Build a village to raise your child.</h2>
            <p class="p-center-black desktop-align-left">Being a parent is hard, so why should you have to do it alone? On Kidsclub, you can share parenting with friends and neighbors. Your child will make new friends...and you will too!</p>
          </div>
        </li>
        <li class="cottageclass-is-list-item"><img src="@/assets/pay-nothing.svg" alt="" class="cottageclass-is-list-item-image">
          <div class="cottageclass-is-list-item-text">
            <h2 class="heading-2">Pay nothing for childcare.</h2>
            <p class="p-center-black desktop-align-left">Childcare is expensive, but at KidsClub, it’s always free! Parents spend more than 20% of their income on childcare. What would you buy if you got 20% of your income back? A boat, a family trip to Paris?</p>
          </div>
        </li>
        <li class="cottageclass-is-list-item"><img src="https://uploads-ssl.webflow.com/5ba3c28cff7d47030870c8e2/5ba5420373b5d2f4e4a03438_heart%202.svg" alt="" class="cottageclass-is-list-item-image">
          <div class="cottageclass-is-list-item-text">
            <h2 class="heading-2">Get quality care when you need it.</h2>
            <p class="p-center-black desktop-align-left">Finding a good sitter is hard, but on KidsClub all the “sitters” are amazing parents like you! KidsClub will help you find reliable care with parents you trust, even if it's at the last minute.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="content-section background-01">
    <div class="divider-2px"></div>
    <div class="content-container-2 w-container">
      <h1 class="h1-display">Our Story</h1>
      <div class="photo-group-container"><img src="@/assets/manishaholmes-2.jpg" alt="" class="our-story-photo">
        <p class="p-center-black">Manisha is a teaching artist and learning specialist with 15 years of experience teaching over 1,000 kids in three countries. Holmes is a techie/activist step-dad who was never satisfied with the educational options available to his bilingual family. Together, they’re working to build a new network that respects the uniqueness of each family and the creative passion of every child.</p>
      </div>
    </div>
  </div>
  <div class="content-section">
    <div class="divider-2px"></div>
    <div class="content-container-2 w-container">
      <div class="parents-heart-us-container">
        <h1 class="h1-display-parents-align-r">Parents</h1><img src="@/assets/heart-red.svg" alt="" class="image-263">
        <h1 class="h1-display-parents-align-l">Us</h1>
      </div>
    <ul class="testimonial-list-group">
      <li class="testimonial-list-item"><img src="@/assets/photo-12.jpg" alt="" class="testimonial-desktop-image w-hidden-small w-hidden-tiny">
        <div class="blockquote-container w-clearfix"><img src="@/assets/quotation.svg" alt="" class="quotation-mark-icon">
          <blockquote class="parents-love-us-blockquote">William has been very excited ...and often comes home singing a new song or talking about an activity he did that day. More than anything we&#x27;re hoping interacting with multiple children will get him better at being gentle, sharing and taking turns... things that he&#x27;s been trying very hard to understand :) &quot;</blockquote>
          <div class="testimonial-image-name-group"><img src="@/assets/photo-12.jpg" alt="" class="testimonial-mobile-image w-hidden-main w-hidden-medium">
            <div class="testimonial-mobile-text-content">
              <div class="testimonial-list-item-name"><strong class="parent-name">Mary Summers</strong></div>
              <div class="parent-location p-small-black-50">Brooklyn</div>
            </div>
          </div>
        </div>
      </li>
      <li class="list-item-divider"></li>
      <li class="testimonial-list-item"><img src="@/assets/rima4.jpg" alt="" class="testimonial-desktop-image w-hidden-small w-hidden-tiny">
        <div class="blockquote-container w-clearfix"><img src="@/assets/quotation.svg" alt="" class="quotation-mark-icon">
          <blockquote class="parents-love-us-blockquote">The playdate went really well! Millie was so nice and sweet and I think Yuri and Lexi had a lot of fun. They ended up playing all evening and didn&rsquo;t even watch the movie :) We are so happy with our experience and I had some really nice time together with my husband!</blockquote>
          <div class="testimonial-image-name-group"><img src="@/assets/rima4.jpg" alt="" class="testimonial-mobile-image w-hidden-main w-hidden-medium">
            <div class="testimonial-mobile-text-content">
              <div class="testimonial-list-item-name">Rima Khusainova</div>
              <div class="parent-location p-small-black-50">Brooklyn</div>
            </div>
          </div>
        </div>
      </li>
      <li class="list-item-divider"></li>
      <li class="testimonial-list-item"><img src="@/assets/eva-vandock-pinkley.jpg" alt="" class="testimonial-desktop-image w-hidden-small w-hidden-tiny">
        <div class="blockquote-container w-clearfix"><img src="@/assets/quotation.svg" alt="" class="quotation-mark-icon">
          <blockquote class="parents-love-us-blockquote">EMMETT LOVES LOVES LOVES this program. He is beaming when he walks out...thank you so much.&quot;</blockquote>
          <div class="testimonial-image-name-group"><img src="@/assets/eva-vandock-pinkley.jpg" alt="" class="testimonial-mobile-image w-hidden-main w-hidden-medium">
            <div class="testimonial-mobile-text-content">
              <div class="testimonial-list-item-name">Eva van Dok Pinkley</div>
              <div class="parent-location p-small-black-50">Brooklyn</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>
  </div>
  <div class="content-section">
    <div class="divider-2px"></div>
    <div class="content-container-2 w-container">
      <h1 class="h1-display">As covered in</h1>
      <div class="featured-container">
      <a href="https://www.bloomberg.com/company/announcements/bloomberg-and-ny-tech-meetup-spotlight-female-led-startups-at-winter-2016-womens-demo-night/" target="_blank" class="featured-card w-inline-block"><img src="@/assets/bloomberg.png" alt="" class="press-logo"></a><a href="https://www.wsj.com/articles/haute-home-schools-designed-to-give-kids-a-bespoke-education-1455807796" target="_blank" class="featured-card w-inline-block"><img src="@/assets/thewallstreetjournal.png" alt="" class="image-261"></a><a href="https://www.nytimes.com/slideshow/2016/06/26/nyregion/not-just-the-teachers-pets/s/26PETCITY-slide-IKW9.html" target="_blank" class="featured-card w-inline-block"><img src="@/assets/thenewyorktimes.png" alt="" class="image-261"></a><a href="https://mommypoppins.com/new-york-city-kids/camps/8-new-summer-camps-for-nyc-kids-in-2017" target="_blank" class="featured-card w-inline-block"><img src="@/assets/mommypoppins.png" alt="" class="image-261"></a><a href="http://www.gettingsmart.com/2017/01/cottageclass-expanding-access-to-microschools-and-learning-experiences/" target="_blank" class="featured-card w-inline-block"><img src="@/assets/gettingsmart.png" alt="" class="image-261"></a>
    </div>
  </div>
</div>
<Footer />
</div>
  <div class="mobile-signup-wrapper">
    <a href="" class="button-hero-mobile w-button" @click.prevent="$router.push({ name: 'SignUp' })">Sign up today. It's free!</a>
  </div>
  </span>
</template>

<script>

import networks from '@/assets/network-info.json'
import RsvpButton from '@/components/RsvpButton.vue'
import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex'
import providerAuth from '@/mixins/providerAuthentication'

export default {
  name: 'SplashPage',
  components: { RsvpButton, MainNav, Footer },
  mixins: [providerAuth],
  data () {
    return {
      networks: networks,
      facebookLogin: !this.hideFacebookLogin()
    }
  },
  created: function () {
    if (this.currentUser === null) {
      return
    }
    if (!this.currentUser.hasAllRequiredFields) {
      this.$router.push({ name: 'OnboardNewUser' })
    }
  },
  methods: {
    hideFacebookLogin: () => {
      return ['(iPhone|iPod|iPad)(?!.*Safari)'].every(expression => {
        return !!navigator.userAgent.match(new RegExp(`(${expression})`, 'ig'))
      })
    }
  }
}

</script>

<style scoped>
.image-8 {
  margin-bottom: 0;
}

.button-hero {
  padding: 20px 40px 21px;
  border: 1px solid #1f88e9;
  border-radius: 4px;
  background-color: #1f88e9;
  box-shadow: 1px 1px 15px 0 hsla(208.8118811881188, 82.11%, 51.76%, 0.60);
  opacity: 1;
  font-size: 13px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #fff;
}

.mobile-signup-wrapper {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: none;
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

.button-hero:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.button-hero:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.button-hero-mobile {
  padding: 20px 40px 21px;
  border: 1px solid #1f88e9;
  border-radius: 4px;
  background-color: #1f88e9;
  box-shadow: 1px 1px 15px 0 hsla(208.8118811881188, 82.11%, 51.76%, 0.60);
  opacity: 1;
  font-size: 13px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #fff;
}

.button-hero-mobile:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.button-hero-mobile:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

/* Naming necessary to avoid CSS bleed in production */

.body-homepage {
  all: unset;
  font-family: soleil, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
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

.button-nav {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #ff6550;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  font-size: 0.89rem;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
}

.button-nav:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .06)), to(rgba(0, 0, 0, .06)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06));
}

.nav-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0px 32px;
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

.tag-container-desktop {
  padding-top: 0px;
}

.image-2 {
  margin-right: 17px;
  float: left;
  opacity: 0.8;
}

.nav-section {
  position: static;
  top: 0px;
  width: 100%;
  background-color: #fff;
}

.nav-flex-space {
  height: 8px;
  min-height: 16px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.brand {
  width: 168px;
  margin-right: 12px;
  padding-left: 0px;
}

.div-block-32 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.hero-section {
  margin-top: 0px;
  padding-top: 0px;
  background-image: url('../assets/hero-3---r.svg'), url('../assets/hero-4---l.svg');
  background-position: 111% 50%, -125px 50%;
  background-size: 240px, 240px;
  background-repeat: no-repeat, no-repeat;
}

.hero-container {
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
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.h1-display {
  margin-bottom: 24px;
  line-height: 66px;
}

.hero-subtitle {
  margin-bottom: 32px;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
}

.signup-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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

.highlight {
  color: #1f88e9;
}

.hero-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
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

.how-wrapper {
  padding: 32px;
  border-radius: 8px;
}

.p-center-black {
  margin-bottom: 1rem;
}

.content-section {
  display: block;
  margin-top: 0px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
}

.content-section.background-01 {
  background-color: #f6f6f6;
}

.p-small-black-50 {
  color: rgba(0, 0, 0, .5);
  font-size: 0.88rem;
  line-height: 1.2rem;
  text-align: left;
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

.featured-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
  margin-top: 48px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.featured-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 33.3%;
  padding: 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.image-261 {
  max-width: 90%;
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

.hero-list-item-heading {
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
}

.hero-list-item-subtitle {
  color: #717171;
  text-align: center;
}

.image-262 {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
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

.testimonial-image-name-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.quotation-mark-icon {
  min-width: 52px;
  margin-right: 16px;
  padding-left: 0px;
  float: left;
  clear: left;
  opacity: 1;
}

.image-263 {
  min-width: 80px;
  margin-right: 8px;
  margin-left: 8px;
}

.h1-display-parents-align-r {
  margin-top: 7px;
  margin-bottom: 0.5rem;
  text-align: left;
}

.parents-love-us-blockquote {
  width: 100%;
  margin-bottom: 24px;
  padding: 0px;
  border-style: none;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: left;
}

.testimonial-desktop-image {
  max-width: 250px;
  min-width: 250px;
  border-radius: 4px;
}

.testimonial-list-item-name {
  margin-bottom: 4px;
  font-weight: 700;
  text-align: left;
}

.h1-display-parents-align-l {
  margin-top: 7px;
  margin-bottom: 0.5rem;
  text-align: left;
}

.testimonial-list-item-divider {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 1px;
  margin-bottom: 64px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, .07);
}

.testimonial-mobile-image {
  max-width: 75px;
  min-width: 75px;
  margin-right: 16px;
}

.blockquote-container {
  margin-left: 40px;
}

.testimonial-list-item-location {
  text-align: left;
}

.testimonial-list-item-location.p-small-black-50 {
  margin-bottom: 4px;
}

.testimonial-list-group {
  width: 80%;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style-type: none;
}

.testimonial-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 64px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.parents-heart-us-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 80px;
}

.photo-group-container {
  width: 65%;
  margin-top: 64px;
}

.our-story-photo {
  width: 100%;
  margin-bottom: 24px;
  border-style: none;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .09);
  border-radius: 4px;
  box-shadow: none;
}

.unordered-list-events {
  width: 100%;
  margin-bottom: 32px;
  padding-left: 0px;
  list-style-type: none;
}

.event-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
}

.event-list-item-graphic {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 180px;
  min-width: 180px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #cbcbcb;
}

.event-list-item-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 24px;
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

.event-heading {
  margin-top: 0px;
  margin-bottom: 6px;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.5px;
}

.action-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 24px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.host-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.avatar-small {
  border-radius: 50%;
}

.event-time {
  margin-bottom: 4px;
  font-size: 13px;
  line-height: 17px;
}

.event-location {
  margin-bottom: 16px;
}

.text-block {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 10px;
  line-height: 17px;
}

.button {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
  color: white;
}

.button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.event-summary {
  width: 100%;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.events-list-wrapper {
  width: 100%;
  margin-top: 60px;
}

.event-date-section-tittle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 68px;
  margin-bottom: 16px;
  padding: 16px 16px 16px 0px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
}

.event-date-section-tittle.cancel-top-margin {
  margin-top: 0px;
}

.date-title {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}

.more-link {
  color: #1f88e9;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
}

.color-1 {
  background-color: #e82d55;
}

.color-2 {
  background-color: #0cba52;
}

.color-3 {
  background-color: #aff0fc;
}

.color-4 {
  background-color: #fd6f77;
}

.color-5 {
  background-color: #64426b;
}

.body-2 {
  background-color: #f6f6f6;
}

.div-block-36 {
  width: 100%;
  padding: 32px;
  background-color: #fff;
}

.host-info-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 16px;
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

.hosted-by {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 0px;
  font-size: 15px;
  line-height: 22.4px;
}

.background-checked {
  margin-left: 4px;
  padding-left: 0px;
  color: #000;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.background-checked-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.summary-info {
  margin-top: 32px;
  padding-left: 0px;
  list-style-type: none;
}

.summary-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.summary-text {
  margin-left: 10px;
}

.card-small-text {
  margin-top: 8px;
  font-size: 13px;
  line-height: 20px;
}

.link-block-4 {
  color: #000;
  text-decoration: none;
}

.link-block-4:hover {
  text-decoration: underline;
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

.content-container-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 64px 32px 112px;
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
  color: #FFFFFF;
  -webkit-text-fill-color: rgba(255, 255, 255, 1);
}

.use-password-text {
  margin-top: 16px;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
}

.use-password-text a {
  -webkit-text-fill-color: #1f88e9;
}

.terms-text {
  margin-top: 10px;
  color: #b3b3b3;
  font-size: 12px;
  text-align: center;
}

.terms-text a {
  -webkit-text-fill-color: #1f88e9;
}

.links:hover {
  text-decoration: underline;
}

.cottageclass-is-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
  padding: 24px 32px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.cottageclass-is-list-item-text {
  margin-left: 24px;
}

.cottage-class-is-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 64px;
  padding-left: 0px;
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
  list-style-type: none;
}

.cottageclass-is-list-item-image {
  max-width: 230px;
  margin-bottom: 16px;
}

.heading-2 {
  margin-top: 0px;
  font-size: 24px;
}

.date-text-wrapper {
  padding-left: 16px;
}

.event-date-section-more-events {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  padding: 16px 16px 16px 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
}

.image-264 {
  width: 40px;
  background-color: #fff;
}

.image-265 {
  width: 40px;
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

@media (max-width: 991px) {
  .button-nav {
    padding: 4px 12px;
    font-size: 0.8rem;
    letter-spacing: 0.12rem;
  }

  .nav-container {
    margin-top: 24px;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .nav-section {
    position: relative;
    padding-bottom: 0px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
    opacity: 1;
  }

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

  .hero-section {
    background-image: url('../assets/group-5.svg');
    background-position: 50% -123px;
    background-size: 800px;
    background-repeat: no-repeat;
  }

  .hero-container {
    padding-top: 112px;
    padding-bottom: 112px;
  }

  .h1-display {
    font-size: 32px;
    line-height: 42px;
  }

  .hero-subtitle {
    font-size: 16px;
    line-height: 22px;
  }

  .hero-content {
    width: 100%;
    padding-top: 16px;
  }

  .content-container-2 {
    padding-top: 100px;
    padding-bottom: 128px;
  }

  .featured-container {
    width: 100%;
  }

  .featured-card {
    width: 33.3%;
    padding: 8px;
  }

  .unordered-list {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .testimonial-image-name-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .quotation-mark-icon {
    min-width: 45px;
    margin-right: 16px;
  }

  .image-263 {
    min-width: 50px;
  }

  .h1-display-parents-align-r {
    font-size: 2.21rem;
    line-height: 2.652rem;
  }

  .parents-love-us-blockquote {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .testimonial-mobile-text-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .h1-display-parents-align-l {
    font-size: 2.21rem;
    line-height: 2.652rem;
  }

  .testimonial-mobile-image {
    max-width: 75px;
    min-width: 75px;
    margin-right: 16px;
  }

  .parents-heart-us-container {
    margin-bottom: 56px;
  }

  .photo-group-container {
    width: 90%;
  }

  .content-container-3 {
    padding-top: 100px;
    padding-bottom: 128px;
  }

  .content-container-4 {
    padding-bottom: 128px;
  }

  .fb-button {
    width: 80%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .cottageclass-is-list-item {
    width: 100%;
    padding: 16px;
  }

  .cottageclass-is-list-item-image {
    width: 33%;
  }

  .fb-button-2 {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .body {
    padding-bottom: 100px;
  }

  .nav-container {
    margin-top: 12px;
    margin-bottom: 12px;
    padding-right: 32px;
    padding-left: 32px;
  }

  .nav-tag {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 2px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    color: #a6a6a6;
    font-size: 0.71rem;
  }

  .nav-section {
    padding-bottom: 0px;
  }

  .div-block-32 {
    width: 260px;
    margin-right: 32px;
  }

  .tag-container-mobile {
    padding-right: 32px;
    padding-left: 32px;
  }

  .hero-section {
    background-image: url('../assets/group-5.svg');
    background-position: 50% -123px;
    background-size: 600px;
    background-repeat: no-repeat;
  }

  .hero-container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .h1-display {
    font-size: 28px;
    line-height: 34px;
  }

  .hero-content {
    width: 80%;
  }

  .how-wrapper {
    width: 100%;
    margin-bottom: 24px;
  }

  .p-center-black {
    font-size: 0.89rem;
    line-height: 1.34rem;
  }

  .p-center-black.desktop-align-left {
    font-size: 14px;
    line-height: 21px;
  }

  .p-small-black-50 {
    font-size: 0.75rem;
  }

  .content-container-2 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .featured-card {
    width: 50%;
    padding: 16px;
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

  .quotation-mark-icon {
    min-width: 41px;
    margin-right: 8px;
  }

  .image-263 {
    min-width: 40px;
  }

  .h1-display-parents-align-r {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .parents-love-us-blockquote {
    font-size: 0.89rem;
    line-height: 1.4rem;
  }

  .h1-display-parents-align-l {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .testimonial-mobile-image {
    max-width: 90px;
    min-width: 90px;
  }

  .blockquote-container {
    margin-left: 0px;
  }

  .testimonial-list-group {
    width: 80%;
  }

  .photo-group-container {
    width: 100%;
  }

  .event-list-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .event-list-item-graphic {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
  }

  .date-title {
    font-size: 22px;
    line-height: 26px;
  }

  .content-container-3 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .content-container-4 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .terms-text {
    line-height: 18px;
  }

  .cottageclass-is-list-item {
    width: 100%;
    padding: 32px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .cottageclass-is-list-item-text {
    margin-left: 0px;
  }

  .cottage-class-is-list {
    margin-top: 32px;
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
  }

  .cottageclass-is-list-item-image {
    width: 30%;
    margin-top: -14px;
    margin-right: 24px;
    margin-bottom: 0px;
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
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .mobile-signup-wrapper {
    padding-right: 20px;
    padding-left: 20px;
  }
  .button-hero-mobile {
    width: 100%;
    text-align: center;
  }

  .button-hero {
    display: none;
  }

  .nav-container {
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .nav-links {
    padding-right: 0px;
    padding-left: 0px;
  }

  .nav-tag {
    padding-left: 20px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .brand {
    width: 140px;
  }

  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .tag-container-mobile {
    padding-right: 0px;
    padding-left: 0px;
  }

  .hero-section {
    background-image: url('../assets/group-5.svg');
    background-position: 50% -66px;
    background-size: 400px;
    background-repeat: no-repeat;
  }

  .hero-container {
    padding-top: 32px;
    padding-bottom: 64px;
  }

  .hero-content {
    width: 100%;
  }

  .how-wrapper {
    padding: 0px;
  }

  .p-center-black {
    margin-bottom: 1rem;
  }

  .p-center-black.desktop-align-left {
    text-align: center;
  }

  .content-container-2 {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .featured-card {
    padding: 0px;
  }

  .image-261 {
    max-width: 100%;
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

  .testimonial-image-name-group {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .h1-display-parents-align-r {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .h1-display-parents-align-l {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .testimonial-list-item-divider {
    margin-bottom: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .testimonial-mobile-image {
    max-width: 75px;
    min-width: 75px;
    margin-top: 6px;
  }

  .testimonial-list-group {
    width: 100%;
  }

  .testimonial-list-item {
    margin-bottom: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .parents-heart-us-container {
    margin-bottom: 40px;
  }

  .photo-group-container {
    margin-top: 32px;
  }

  .our-story-photo {
    margin-bottom: 16px;
  }

  .event-heading {
    font-size: 18px;
    line-height: 25px;
  }

  .action-bar {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .button {
    width: 100%;
    margin-top: 20px;
  }

  .events-list-wrapper {
    margin-top: 32px;
  }

  .date-title {
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }

  .div-block-36 {
    padding: 24px;
  }

  .content-container-3 {
    padding: 64px 16px;
  }

  .content-container-4 {
    padding: 64px 16px;
  }

  .fb-button {
    width: 100%;
    padding-bottom: 17px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .fb-button:active {
    background-color: #3b5998;
  }

  .fb-button-text {
    font-weight: 400;
  }

  .terms-text {
    width: 80%;
    margin-top: 6px;
  }

  .cottageclass-is-list-item {
    margin-bottom: 32px;
    padding: 0px;
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

  .cottageclass-is-list-item-image {
    width: 50%;
    margin-top: 0px;
    margin-right: 16px;
  }

  .heading-2 {
    text-align: center;
  }

  .image-264 {
    width: 32px;
  }

  .image-265 {
    width: 32px;
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
}

/* New CSS */

body {
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

.button-nav {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #ff6550;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  font-size: 0.89rem;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
}

.button-nav:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .06)), to(rgba(0, 0, 0, .06)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06));
}

.nav-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0px 32px;
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

.tag-container-desktop {
  padding-top: 0px;
}

.nav-links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.nav-tag {
  padding-top: 2px;
  color: #a6a6a6;
  font-size: 0.8rem;
}

.image-2 {
  margin-right: 17px;
  float: left;
  opacity: 0.8;
}

.nav-section {
  position: static;
  top: 0px;
  width: 100%;
  background-color: #fff;
}

.nav-flex-space {
  height: 8px;
  min-height: 16px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.brand {
  width: 168px;
  margin-right: 12px;
  padding-left: 0px;
}

.div-block-32 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.hero-container {
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
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.h1-display {
  margin-bottom: 24px;
  line-height: 66px;
}

.hero-subtitle {
  margin-bottom: 32px;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
}

.signup-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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

.hero-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
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

.how-wrapper {
  padding: 32px;
  border-radius: 8px;
}

.p-center-black {
  margin-bottom: 1rem;
}

.content-section {
  display: block;
  margin-top: 0px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
}

.content-section.background-01 {
  background-color: #f6f6f6;
}

.p-small-black-50 {
  color: rgba(0, 0, 0, .5);
  font-size: 0.88rem;
  line-height: 1.2rem;
  text-align: left;
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

.featured-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
  margin-top: 48px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.featured-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 33.3%;
  padding: 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.image-261 {
  max-width: 90%;
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

.hero-list-item-heading {
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
}

.hero-list-item-subtitle {
  color: #717171;
  text-align: center;
}

.image-262 {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
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

.testimonial-image-name-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.quotation-mark-icon {
  min-width: 52px;
  margin-right: 16px;
  padding-left: 0px;
  float: left;
  clear: left;
  opacity: 1;
}

.image-263 {
  min-width: 80px;
  margin-right: 8px;
  margin-left: 8px;
}

.h1-display-parents-align-r {
  margin-top: 7px;
  margin-bottom: 0.5rem;
  text-align: left;
}

.parents-love-us-blockquote {
  width: 100%;
  margin-bottom: 24px;
  padding: 0px;
  border-style: none;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: left;
}

.testimonial-desktop-image {
  max-width: 250px;
  min-width: 250px;
  border-radius: 4px;
}

.testimonial-list-item-name {
  margin-bottom: 4px;
  font-weight: 700;
  text-align: left;
}

.h1-display-parents-align-l {
  margin-top: 7px;
  margin-bottom: 0.5rem;
  text-align: left;
}

.testimonial-list-item-divider {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 1px;
  margin-bottom: 64px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, .07);
}

.testimonial-mobile-image {
  max-width: 75px;
  min-width: 75px;
  margin-right: 16px;
}

.blockquote-container {
  margin-left: 40px;
}

.testimonial-list-item-location {
  text-align: left;
}

.testimonial-list-item-location.p-small-black-50 {
  margin-bottom: 4px;
}

.testimonial-list-group {
  width: 80%;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style-type: none;
}

.testimonial-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 64px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.parents-heart-us-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 80px;
}

.photo-group-container {
  width: 65%;
  margin-top: 64px;
}

.our-story-photo {
  width: 100%;
  margin-bottom: 24px;
  border-style: none;
  border-width: 1px;
  border-color: rgba(0, 0, 0, .09);
  border-radius: 4px;
  box-shadow: none;
}

.unordered-list-events {
  width: 100%;
  margin-bottom: 32px;
  padding-left: 0px;
  list-style-type: none;
}

.event-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
}

.event-list-item-graphic {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 180px;
  min-width: 320px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #cbcbcb;
}

.event-list-item-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 32px;
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

.event-heading {
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.5px;
}

.action-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 18px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.host-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.avatar-small {
  border-radius: 50%;
}

.event-time {
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 17px;
}

.event-location {
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 17px;
}

.text-block {
  margin-left: 10px;
  line-height: 19px;
}

.button {
  padding: 12px 32px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  border-radius: 4px;
  background-color: #1f88e9;
  text-align: center;
}

.button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.button:active {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .1)), to(rgba(0, 0, 0, .1)));
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));
}

.event-summary {
  width: 100%;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.events-list-wrapper {
  width: 100%;
  margin-top: 60px;
}

.event-date-section-tittle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 68px;
  margin-bottom: 16px;
  padding: 16px 16px 16px 0px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
}

.event-date-section-tittle.cancel-top-margin {
  margin-top: 0px;
}

.date-title {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}

.color-hot-pink {
  background-color: #e82d55;
}

.body-2 {
  background-color: #f6f6f6;
}

.div-block-36 {
  width: 100%;
  padding: 32px;
  background-color: #fff;
}

.host-info-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 16px;
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

.hosted-by {
  margin-top: -4px;
  margin-right: 17px;
  margin-left: 0px;
  font-size: 15px;
  line-height: 22.4px;
}

.background-checked {
  margin-left: 4px;
  padding-left: 0px;
  color: #000;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.background-checked-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.summary-info {
  margin-top: 32px;
  padding-left: 0px;
  list-style-type: none;
}

.summary-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.summary-text {
  margin-left: 10px;
}

.card-small-text {
  margin-top: 8px;
  font-size: 13px;
  line-height: 20px;
}

.link-block-4 {
  color: #000;
  text-decoration: none;
}

.link-block-4:hover {
  text-decoration: underline;
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

.content-container-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 64px 32px 112px;
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

.use-password-text {
  margin-top: 16px;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
}

.terms-text {
  margin-top: 10px;
  color: #b3b3b3;
  font-size: 12px;
  text-align: center;
}

.links:hover {
  text-decoration: underline;
}

.cottageclass-is-list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
  padding: 24px 32px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.cottageclass-is-list-item-text {
  margin-left: 24px;
}

.cottage-class-is-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 64px;
  padding-left: 0px;
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
  list-style-type: none;
}

.cottageclass-is-list-item-image {
  max-width: 230px;
  margin-bottom: 16px;
}

.heading-2 {
  margin-top: 0px;
  font-size: 24px;
}

.date-text-wrapper {
  padding-left: 16px;
}

.image-264 {
  width: 40px;
  background-color: #fff;
}

.image-265 {
  width: 40px;
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

.event-ages {
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 17px;
}

.event-household-photo {
  max-height: 100px;
  min-height: 100px;
  padding-right: 8px;
}

.host-container {
  padding-right: 24px;
}

.host-meta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-left: 4px solid rgba(0, 0, 0, .15);
}

.host-occupation {
  margin-bottom: 4px;
  color: #858585;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
}

.emoji {
  width: 150px;
}

.color-green {
  background-color: #0cba52;
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

.color-pink {
  background-color: #fd6f77;
}

.color-light-blue {
  background-color: #aff0fc;
}

.color-purple {
  background-color: #64426b;
}

.color-blue {
  background-color: #1f88e9;
}

.scrolling-wrapper {
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex !important;
  overflow: hidden;
  width: auto;
  min-height: 100px;
  margin-top: 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 991px) {
  .button-nav {
    padding: 4px 12px;
    font-size: 0.8rem;
    letter-spacing: 0.12rem;
  }

  .nav-container {
    margin-top: 24px;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .nav-links {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-right: 32px;
    padding-left: 32px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }

  .nav-section {
    position: relative;
    padding-bottom: 0px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
    opacity: 1;
  }

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

  .hero-container {
    padding-top: 112px;
    padding-bottom: 112px;
  }

  .h1-display {
    font-size: 32px;
    line-height: 42px;
  }

  .hero-subtitle {
    font-size: 16px;
    line-height: 22px;
  }

  .hero-content {
    width: 100%;
    padding-top: 16px;
  }

  .content-container-2 {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .featured-container {
    width: 100%;
  }

  .featured-card {
    width: 33.3%;
    padding: 8px;
  }

  .unordered-list {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .testimonial-image-name-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .quotation-mark-icon {
    min-width: 45px;
    margin-right: 16px;
  }

  .image-263 {
    min-width: 50px;
  }

  .h1-display-parents-align-r {
    font-size: 2.21rem;
    line-height: 2.652rem;
  }

  .parents-love-us-blockquote {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .testimonial-mobile-text-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .h1-display-parents-align-l {
    font-size: 2.21rem;
    line-height: 2.652rem;
  }

  .testimonial-mobile-image {
    max-width: 75px;
    min-width: 75px;
    margin-right: 16px;
  }

  .parents-heart-us-container {
    margin-bottom: 56px;
  }

  .photo-group-container {
    width: 90%;
    margin-top: 32px;
  }

  .event-list-item-graphic {
    min-width: 180px;
  }

  .action-bar {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .events-list-wrapper {
    margin-top: 32px;
  }

  .content-container-3 {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .content-container-4 {
    padding-bottom: 128px;
  }

  .fb-button {
    width: 80%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .cottageclass-is-list-item {
    width: 100%;
    padding: 16px;
  }

  .cottage-class-is-list {
    margin-top: 32px;
  }

  .cottageclass-is-list-item-image {
    width: 33%;
  }

  .fb-button-2 {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .emoji {
    width: 100px;
  }

  .scrolling-wrapper {
    margin-top: 16px;
  }
}

@media (max-width: 767px) {
  .body {
    padding-bottom: 100px;
  }

  .mobile-signup-wrapper {
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
  .button-hero-mobile {
    padding: 8px 16px;
    font-size: 12px;
  }

  .nav-container {
    margin-top: 12px;
    margin-bottom: 12px;
    padding-right: 32px;
    padding-left: 32px;
  }

  .nav-links {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .nav-tag {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 2px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    color: #a6a6a6;
    font-size: 0.71rem;
  }

  .nav-section {
    padding-bottom: 0px;
  }

  .div-block-32 {
    width: 260px;
    margin-right: 32px;
  }

  .tag-container-mobile {
    padding-right: 32px;
    padding-left: 32px;
  }

  .hero-container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .h1-display {
    font-size: 28px;
    line-height: 34px;
  }

  .hero-content {
    width: 80%;
  }

  .how-wrapper {
    width: 100%;
    margin-bottom: 24px;
  }

  .p-center-black {
    font-size: 0.89rem;
    line-height: 1.34rem;
  }

  .p-center-black.desktop-align-left {
    font-size: 14px;
    line-height: 21px;
  }

  .p-small-black-50 {
    font-size: 0.75rem;
  }

  .content-container-2 {
    padding-right: 32px;
    padding-left: 32px;
  }

  .featured-card {
    width: 50%;
    padding: 16px;
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

  .quotation-mark-icon {
    min-width: 41px;
    margin-right: 8px;
  }

  .image-263 {
    min-width: 40px;
  }

  .h1-display-parents-align-r {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .parents-love-us-blockquote {
    font-size: 0.89rem;
    line-height: 1.4rem;
  }

  .h1-display-parents-align-l {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .testimonial-mobile-image {
    max-width: 90px;
    min-width: 90px;
  }

  .blockquote-container {
    margin-left: 0px;
  }

  .testimonial-list-group {
    width: 80%;
  }

  .photo-group-container {
    width: 100%;
  }

  .event-list-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .event-list-item-graphic {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
  }

  .event-list-item-content {
    position: relative;
    padding: 24px;
  }

  .action-bar {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .date-title {
    font-size: 22px;
    line-height: 26px;
  }

  .content-container-3 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .content-container-4 {
    padding-right: 32px;
    padding-bottom: 100px;
    padding-left: 32px;
  }

  .terms-text {
    line-height: 18px;
  }

  .cottageclass-is-list-item {
    width: 100%;
    padding: 32px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .cottageclass-is-list-item-text {
    margin-left: 0px;
  }

  .cottage-class-is-list {
    margin-top: 32px;
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
  }

  .cottageclass-is-list-item-image {
    width: 30%;
    margin-top: -14px;
    margin-right: 24px;
    margin-bottom: 0px;
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

  .scrolling-wrapper {
    position: absolute;
    left: 0px;
    top: 5px;
    margin-top: 16px;
    padding-right: 24px;
    padding-left: 24px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .spacer {
    height: 100px;
    margin-bottom: 12px;
  }
}

@media (max-width: 479px) {
  .body {
    padding-bottom: 110px;
  }

  .nav-container {
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .nav-links {
    padding-right: 0px;
    padding-left: 0px;
  }

  .nav-tag {
    padding-left: 20px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .brand {
    width: 140px;
  }

  .div-block-32 {
    width: 100%;
    margin-right: 0px;
  }

  .tag-container-mobile {
    padding-right: 0px;
    padding-left: 0px;
  }

  .hero-container {
    padding-top: 32px;
    padding-bottom: 64px;
  }

  .hero-content {
    width: 100%;
  }

  .how-wrapper {
    padding: 0px;
  }

  .p-center-black {
    margin-bottom: 1rem;
  }

  .p-center-black.desktop-align-left {
    text-align: center;
  }

  .content-container-2 {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .featured-card {
    padding: 0px;
  }

  .image-261 {
    max-width: 100%;
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

  .testimonial-image-name-group {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .h1-display-parents-align-r {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .h1-display-parents-align-l {
    font-size: 1.76rem;
    line-height: 2.112rem;
  }

  .testimonial-list-item-divider {
    margin-bottom: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .testimonial-mobile-image {
    max-width: 75px;
    min-width: 75px;
    margin-top: 6px;
  }

  .testimonial-list-group {
    width: 100%;
  }

  .testimonial-list-item {
    margin-bottom: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .parents-heart-us-container {
    margin-bottom: 40px;
  }

  .photo-group-container {
    margin-top: 32px;
  }

  .our-story-photo {
    margin-bottom: 16px;
  }

  .event-heading {
    font-size: 18px;
    line-height: 25px;
  }

  .action-bar {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .button {
    width: 100%;
    margin-top: 20px;
  }

  .events-list-wrapper {
    margin-top: 32px;
  }

  .date-title {
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }

  .div-block-36 {
    padding: 24px;
  }

  .content-container-3 {
    padding: 64px 16px;
  }

  .content-container-4 {
    padding: 64px 16px;
  }

  .fb-button {
    width: 100%;
    padding-bottom: 17px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .fb-button:active {
    background-color: #3b5998;
  }

  .fb-button-text {
    font-weight: 400;
  }

  .terms-text {
    width: 80%;
    margin-top: 6px;
  }

  .cottageclass-is-list-item {
    margin-bottom: 32px;
    padding: 0px;
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

  .cottageclass-is-list-item-image {
    width: 50%;
    margin-top: 0px;
    margin-right: 16px;
  }

  .heading-2 {
    text-align: center;
  }

  .image-264 {
    width: 32px;
  }

  .image-265 {
    width: 32px;
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
}

/* For scrolling images */

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Remove inner shadow from inputs on mobile iOS */

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.scrolling-wrapper {
  overflow-x: auto;
}

.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
}

.scrolling-wrapper::-webkit-scrollbar {
  display: none;
}

.scrolling-wrapper::-webkit-scrollbar {
  width: 0 !important;
}

.scrolling-wrapper {
  overflow: -moz-scrollbars-none;
}

.scrolling-wrapper {
  -ms-overflow-style: none;
}

</style>
