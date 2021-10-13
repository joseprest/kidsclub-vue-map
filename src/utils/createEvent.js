import _ from 'lodash'
import moment from 'moment'
import { capitalize } from './utils'

export const createEvent = (data) => {
  const id = _.keys(data.event)[0]
  // console.log(data.event)
  const event = data.event[id]
  const attributes = cleanEvent(event.attributes)

  const participatingChildren = _.map(event.relationships.participants.data, e => e.id)
  const participatingParents = _.map(_.values(data.participant), p => cleanPerson(p.attributes))

  return {
    data,
    id,
    ...attributes,
    participatingChildren,
    participatingParents
  }
}

export const createEvents = (data, sortFunction) => {
  const all = _.mapValues(data.event, e => {
    return {
      id: e.id,
      ...cleanEvent(e.attributes)
    }
  })

  // if no sort method is given, sort by id ascending (use int value, not lexiacal)
  sortFunction = sortFunction || (e => parseInt(e.id))
  // use this to sort by distance or
  const sorted = _.sortBy(all, sortFunction)
  sorted.all = all

  return sorted
}

/*
 * Sanitizing helper methods
*/
function cleanEvent (attributes) {
  const res = _.clone(attributes)
  res.hostId = attributes.hostId.toString()
  res.startsAt = moment(attributes.startsAt)
  res.endsAt = moment(attributes.endsAt)
  res.hostFirstName = capitalize(attributes.hostFirstName)
  res.hostFuzzyLatitude = parseFloat(attributes.hostFuzzyLatitude)
  res.hostFuzzyLongitude = parseFloat(attributes.hostFuzzyLongitude)
  res.activityName = attributes.activityNames.length > 0 ? attributes.activityNames[0] : null
  res.food = attributes.foods.length > 0 ? attributes.foods[0] : null
  return res
}

function cleanPerson (attributes) {
  const res = _.clone(attributes)
  res.userFuzzyLatitude = parseFloat(attributes.userFuzzyLatitude)
  res.userFuzzyLongitude = parseFloat(attributes.userFuzzyLongitude)
  res.userFirstName = capitalize(attributes.userFirstName)
  return res
}
