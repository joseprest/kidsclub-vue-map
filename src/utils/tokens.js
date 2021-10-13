const ADMIN_WHITELIST = [
  'holmes@cottageclass.com',
  'manisha@cottageclass.com',
  'developer@cottageclass.com',
  'asa@cottageclass.com'
]

export function parseJWT (token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(window.atob(base64))
}

export function getToken (vueAuth) {
  return vueAuth.getToken()
}

export function currentUserId (vueAuth) {
  let token = getToken(vueAuth)
  let userId = parseJWT(token).sub
  return userId
}

export function currentUserNetworkCode (vueAuth) {
  let token = getToken(vueAuth)
  let networkCode = parseJWT(token).network_code
  return networkCode
}

export function currentUserEmail (vueAuth) {
  let token = getToken(vueAuth)
  let email = parseJWT(token).email
  return email
}

export function isAdminUser (vueAuth) {
  let email = currentUserEmail(vueAuth)
  let isAdmin = ADMIN_WHITELIST.includes(email)
  return isAdmin
}

export function isLoggedIn (vueAuth) {
  let token = getToken(vueAuth)
  return (token && token.sub)
}
