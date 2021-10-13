'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_URL_API: '"https://localhost:3000"',
  // - ship with Heroku URL, and change up locally for simplicity's sake
  BASE_URL_API: '"https://cottageclass-app-api.herokuapp.com"',
  GOOGLE_ANALYTICS_ID: '"UA-62051804-2"',
})
