import { shallowMount } from '@vue/test-utils'
import Events from '@/views/Events.vue'
import _ from 'lodash'

describe('Events', async () => {
  let wrapper
  describe('no current user', () => {
    beforeAll(async () => {
      const $store = {
        getters: {
          currentUser: null,
          isAuthenticated: false
        }
      }
      wrapper = shallowMount(Events, {
        mocks: { $store },
        stubs: [ 'GmapMap', 'GmapMarker' ] // because the are globally registered.  this silences the warning
      })
    })

    it('mounts with a map and a list', async () => {
      const map = wrapper.find('.map')
      expect(map.exists()).toBeTruthy()
      const list = wrapper.find('.list')
      expect(list.exists()).toBeTruthy()
    })
  })
})
