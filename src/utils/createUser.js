import _ from 'lodash'

export const createUser = (data) => {
  const includedChildren = data.child
  const id = _.keys(data.user)[0]
  const p = data.user[id].attributes
  const childIds = data.user[id].relationships.children.data.map(e => e.id)
  const children = _.map(childIds, id => parseChildData(includedChildren[id]))
  const hasAllRequiredFields = !!(p.phone && p.latitude && p.longitude)
  const activities = (p.activities || []).map(activity => activity.replace(/_/g, ' '))
  const location = {
    lat: parseFloat(p.fuzzyLatitude),
    lng: parseFloat(p.fuzzyLongitude)
  }
  return {
    ...p,
    id: id,
    lastInitial: p.lastName && p.lastName[0],
    activities: activities,
    networkCode: 'brooklyn-events', // give everyone the new network code
    location,
    facebookMapIcon: 'https://graph.facebook.com/' + p.facebook_uid + '/picture?width=30',
    children,
    hasAllRequiredFields
  }
}

const parseChildData = (c) => {
  const attributes = c.attributes
  attributes.firstName = attributes.firstName && _.capitalize(attributes.firstName)
  return {
    id: c.id,
    emergencyContacts: c.relationships.emergencyContacts && _.map(c.relationships.emergencyContacts.data, 'id'),
    ...attributes
  }
}
