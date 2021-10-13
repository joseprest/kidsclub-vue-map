import { createEvent, createEvents } from '@/utils/createEvent'
import mockAxios from 'axios'
import normalize from 'json-api-normalizer'
import moment from 'moment'

describe('createEvent for one event', () => {
  let event
  beforeAll(async () => {
    const request = await mockAxios.get(`${process.env.BASE_URL_API}/api/events/2186`)
    event = createEvent(normalize(request.data))
  })

  it('returns the correct basic information', async () => {
    expect(event.id).toBe('2186')
    expect(event.hostId).toBe('1184')
    expect(event.participatingChildren).toEqual(['227', '228'])
    expect(event.name).toBe('Arts & crafts & tacos 🌮 with Asa')
    expect(event.startsAt).toEqual(moment('2019-03-23T18:00:00-04:00'))
    expect(event.endsAt).toEqual(moment('2019-03-23T21:00:00-04:00'))
    expect(event.activityName).toBe('arts & crafts')
    expect(event.food).toBe('tacos 🌮')
  })
})

describe('createEvents for multiple events', () => {
  let events
  beforeAll(async () => {
    const request = await mockAxios.get(`${process.env.BASE_URL_API}/api/events/`)
    events = createEvents(normalize(request.data))
  })

  it('returns the correct basic information', async () => {
    expect(events.all['2186'].id).toBe('2186')
    expect(events[0].id).toEqual('2139')
    expect(events[1].hostId).toBe('1175')
  })
})
