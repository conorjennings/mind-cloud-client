'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addAuthHandlers()
  $('#landing-modal').show()
  $('.sign-up-modal').hide()
  $('#side-nav').hide()
  $('#action-wrapper').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('material-design-lite/src/material-design-lite.scss')
require('materialize-css/sass/materialize.scss')
