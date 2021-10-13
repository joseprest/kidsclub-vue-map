import Vue from 'vue'
import Router from 'vue-router'
import RequestCare from '@/components/RequestCare.vue'
import Bookings from '@/components/Bookings'
import EmergencyInfo from '@/components/EmergencyInfo'
import ProviderProfile from '@/views/ProviderProfile.vue'
import RequestModal from '@/components/RequestModal.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import SplashPage from '@/views/SplashPage.vue'
import RequestModal2 from '@/components/RequestModal2.vue'
import RequestRecipients from '@/components/RequestRecipients.vue'
import AdminMessages from '@/components/AdminMessages.vue'
import EventPage from '@/components/EventPage.vue'
import Events from '@/views/Events.vue'
import EventsDetail from '@/views/EventsDetail.vue'
import RsvpInfoCollection from '@/components/RsvpInfoCollection.vue'
import RsvpConfirmation from '@/components/RsvpConfirmation.vue'
import CancelRSVP from '@/components/CancelRSVP.vue'
import MyRSVPs from '@/components/MyRSVPs.vue'
import Faq from '@/components/Faq.vue'
import MyEvents from '@/components/MyEvents.vue'
import SocialInvite from '@/views/SocialInvite.vue'
import EventEdit from '@/components/EventEdit.vue'
import ProfileEdit from '@/components/ProfileEdit.vue'
import EmergencyContacts from '@/components/FTE/EmergencyContacts.vue'
import ChildSpecialRequirements from '@/components/FTE/ChildSpecialRequirements.vue'
import ChildSpecialRequirementsYesNo from '@/components/FTE/ChildSpecialRequirementsYesNo.vue'
import SignInWithEmail from '@/views/SignInWithEmail.vue'
import SignUpWithEmail from '@/views/SignUpWithEmail.vue'
import OnboardNewUser from '@/views/OnboardNewUser.vue'
import RSVPPrompt from '@/views/RSVPPrompt.vue'
import InviteExistingUsers from '@/views/InviteExistingUsers.vue'
import PasswordReset from '@/views/PasswordReset.vue'
import ContactForm from '@/views/ContactForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SplashPage',
      component: SplashPage
    },
    {
      path: '/offer',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/request',
      name: 'Request',
      component: RequestCare
    },
    {
      path: '/bookings',
      redirect: '/offer'
    },
    {
      path: '/emergency-info/:id',
      name: 'emergencyInfo',
      component: EmergencyInfo
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
      props: true
    },
    {
      path: '/events/detail',
      name: 'EventsDetail',
      component: EventsDetail,
      props: true
    },
    {
      path: '/log-in',
      name: 'SignIn',
      component: SignInWithEmail
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUpWithEmail
    },
    {
      path: '/profile/edit',
      name: 'ProfileEdit',
      component: ProfileEdit
    },
    {
      path: '/users/:id',
      name: 'ProviderProfile',
      component: ProviderProfile,
      props: true
    },
    {
      path: '/event/:id/share',
      name: 'SocialInvite',
      component: SocialInvite
    },
    {
      path: '/event/:id/invite',
      name: 'InviteExistingUsers',
      component: InviteExistingUsers
    },
    {
      path: '/event/:id/edit',
      name: 'EventEdit',
      component: EventEdit
    },
    {
      path: '/event/:id/',
      name: 'EventPage',
      component: EventPage
    },
    {
      path: '/rsvp-confirmation/:eventId',
      name: 'RsvpConfirmation',
      component: RsvpConfirmation
    },
    {
      path: '/request/:id',
      name: 'RequestModal',
      component: RequestModal
    },
    {
      path: '/how-it-works',
      name: 'HowItWorks',
      component: HowItWorks
    },
    {
      path: '/request-create',
      name: 'RequestModal2',
      component: RequestModal2
    },
    {
      path: '/request-recipients',
      name: 'RequestRecipients',
      component: RequestRecipients
    },
    // Admin Routes
    {
      path: '/admin-messages',
      name: 'AdminMessages',
      component: AdminMessages
      // NB: this route has beforeRouteEnter redirect in the component
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
      // NB: this route has beforeRouteEnter redirect in the component
    },
    {
      path: '/my-events',
      name: 'MyEvents',
      component: MyEvents
    },
    {
      path: '/onboarding/emergency-contacts/:eventId?',
      name: 'EmergencyContacts',
      component: EmergencyContacts
    },
    {
      path: '/onboarding/child-special-requirements-2/:eventId?',
      name: 'ChildSpecialRequirements',
      component: ChildSpecialRequirements
    },
    {
      path: '/onboarding/child-special-requirements-1/:eventId?',
      name: 'ChildSpecialRequirementsYesNo',
      component: ChildSpecialRequirementsYesNo
    },
    {
      path: '/my-rsvps',
      name: 'MyRSVPs',
      component: MyRSVPs
    },
    {
      path: '/rsvp/:eventId/cancel',
      name: 'CancelRSVP',
      component: CancelRSVP,
      props: true
    },
    {
      path: '/rsvp/:eventId',
      name: 'RsvpInfoCollection',
      component: RsvpInfoCollection
    },
    {
      path: '/welcome',
      name: 'OnboardNewUser',
      component: OnboardNewUser
    },
    {
      path: '/welcome-RSVP',
      name: 'RSVPPrompt',
      component: RSVPPrompt
    },
    {
      path: '/password-reset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/contact/:eventId',
      name: 'ContactForm',
      component: ContactForm,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
