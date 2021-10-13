import { mutations } from '@/store/events'
import { fetchUpcomingEventsWithinDistance } from '@/utils/api'

describe('events module', () => {
  describe('mutations', () => {
    const state = { events: null }
    it('gets events and sets them as an array', async () => {
      const events = await fetchUpcomingEventsWithinDistance({ miles: 10, lat: 42.2798738, lng: -71.7900378 })
      mutations.setEvents(state, { events })
      expect(state.events).toHaveLength(10)
    })
    it('adds more events to the array', async () => {
      const events = await fetchUpcomingEventsWithinDistance({ miles: 10, lat: 42.2798738, lng: -71.7900378 })
      mutations.addEvents(state, { events })
      expect(state.events).toHaveLength(20)
    })
  })
})
