import { fetchUpcomingEventsWithinDistance } from '@/utils/api'

export const mutations = {
  setEvents (state, payload) {
    state.events = payload.events
  },
  addEvents (state, payload) {
    if (!state.events) {
      state.events = payload.events
    } else {
      state.events.push(...payload.events)
    }
  },
  clearEvents (state) {
    state.events = null
  }
}

export default {
  state: {
    events: null
  },
  mutations,
  actions: {
    async fetchUpcomingEventsWithinDistance ({ commit }, params) {
      const events = await fetchUpcomingEventsWithinDistance(params)
      commit('setEvents', { events })
    }
    // we should move logic here for api calls and pagination when the time comes.
  },
  getters: {
    events: state => state.events
    // we can do filtering here if the backend istn't doing it
  }
}
