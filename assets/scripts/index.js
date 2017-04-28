'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
// const ideaEvents = require('./ideas/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addAuthHandlers()
  // ideaEvents.addIdeaHandlers()
  $('.sign-up-modal').hide()
  $('#action-wrapper').hide()
  $('#welcome-modal').modal({
    backdrop: 'static',
    keyboard: false
  }).modal('show')
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('material-design-lite/src/material-design-lite.scss')
require('material-design-icons/iconfont/material-icons.css')
require('mdbootstrap/css/bootstrap.css')
