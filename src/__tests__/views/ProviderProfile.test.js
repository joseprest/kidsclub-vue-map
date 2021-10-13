import { mount } from '@vue/test-utils'
import ProviderProfile from '@/views/ProviderProfile.vue'

describe('ProviderProfile', async () => {
  let wrapper
  describe('no current user', () => {
    beforeAll(async () => {
      const $route = {
        path: '/user/1281',
        params: { id: 1281 }
      }
      const $store = {
        getters: { currentUser: null }
      }
      wrapper = mount(ProviderProfile, {
        mocks: { $route, $store },
        stubs: [ 'GmapMap', 'GmapMarker' ] // because the are globally registered.  this silences the warning
      })
    })

    it('mounts with the correct information', async () => {
      const name = wrapper.find('h1.providerp-h1')
      expect(name.text()).toBe('Ari')

      const memberSince = wrapper.find('div.providerp-member-since')
      expect(memberSince.text()).toBe('Member since March, 2019')

      const employment = wrapper.find('div.providerp-occupation')
      expect(employment.text()).toBe('coder, KidsClub!!!!')

      const edit = wrapper.find('div.edit-button')
      expect(edit.exists()).toBeFalsy()
    })
  })

  describe('with current user', () => {
    beforeAll(async () => {
      const $route = {
        path: '/user/1281',
        params: { id: 1281 }
      }
      const $store = {
        getters: { currentUser: { id: 1281 } }
      }
      wrapper = mount(ProviderProfile, {
        mocks: { $route, $store },
        stubs: [ 'GmapMap', 'GmapMarker' ] // because the are globally registered.  this silences the warning
      })
    })

    it('mounts with the correct information', async () => {
      const name = wrapper.find('h1.providerp-h1')
      expect(name.text()).toBe('Ari')

      const memberSince = wrapper.find('div.providerp-member-since')
      expect(memberSince.text()).toBe('Member since March, 2019')

      const employment = wrapper.find('div.providerp-occupation')
      expect(employment.text('coder, KidsClub!!!!'))

      const edit = wrapper.find('div.edit-button')
      expect(edit.exists()).toBeTruthy()
    })

    it.skip('shows the correct availability', () => {
      // FIXIT this isn't working because backend doesn't provide the right info
      const times = wrapper.findAll('div.times-container div.time').wrappers
      expect(times).toHaveLength(2)
      expect(times[0].text()).toBe('3p–7p')
      expect(times[1].text()).toBe('7p-')
    })

    it.skip('shows the correct activities', () => {
      // FIXIT this isn't working because backend doesn't provide the right info
      const activities = wrapper.findAll('div.activities div div').wrappers
      expect(activities).toHaveLength(2)
      expect(activities[0].text()).toBe('travel')
      expect(activities[1].text()).toBe('movies')
    })

    it('shows the correct bio blurb', () => {
      const blurb = wrapper.find('.blurb')
      expect(blurb.text()).toBe('I was born outside of boston and now i live in nyc')
    })

    it('shows the correct languages', () => {
      const languages = wrapper.find('.languages')
      expect(languages.text()).toBe('Speaks English, Italian and Spanish')
    })
  })
})
