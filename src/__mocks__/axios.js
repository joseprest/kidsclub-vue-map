const event2186 = require('./__mockData__/event_2186.json')
const allEvents = require('./__mockData__/all_events.json')
const user1230Events = require('./__mockData__/user_1230_events.json')
const user1230 = require('./__mockData__/user_1230.json')
const user1228 = require('./__mockData__/user_1228.json')
const user1281 = require('./__mockData__/user_1281.json')
const distanceEvents = require('./__mockData__/distance_events.json')

export default {
  get: jest.fn((url) => {
    const eventUrl = `${process.env.BASE_URL_API}/api/events/`
    const userUrl = `${process.env.BASE_URL_API}/api/users/`
    if (url === eventUrl + '2186') {
      return Promise.resolve(event2186)
    }
    if (url === eventUrl || url === eventUrl + 'upcoming') {
      return Promise.resolve(allEvents)
    }
    if (url === eventUrl + 'upcoming/miles/10/latitude/42.2798738/longitude/-71.7900378/page/1/page_size/10') {
      return Promise.resolve(distanceEvents)
    }
    if (url === userUrl + `1230/events/created/upcoming/page/1/page_size/100`) {
      return Promise.resolve(user1230Events)
    }

    // this is the unauthenticated endpont
    if (url === `${process.env.BASE_URL_API}/api/users/1230`) {
      return Promise.resolve(user1230)
    }
    if (url === `${process.env.BASE_URL_API}/api/users/1281`) {
      return Promise.resolve(user1281)
    }

    // this is the authenticated endpont
    if (url === `${process.env.BASE_URL_API}/users/1228`) {
      return Promise.resolve(user1228)
    }
  })
}
