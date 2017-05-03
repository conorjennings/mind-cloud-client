'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const ideaEvents = require('./ideas/events')
const ideaStore = require('./idea-store')
const ui = require('./ideas/ui')
const api = require('./ideas/api')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addAuthHandlers()
  ideaEvents.addIdeaHandlers()
  $('#welcome-modal').modal({
    backdrop: 'static',
    keyboard: false
  }).modal('show')
})

$(document).on('click', '.edit-idea-button', function (data) {
  event.preventDefault()
  // console.log('data looks like; ', data)
  const ideaId = $(this).data('id')
  ideaStore.id = ideaId
  api.getIdea(ideaStore.id)
    .then(ui.getIdeaSuccess)
    .catch(ui.getIdeaFailure)
  // console.log('ideaStore looks like ', ideaStore)
})

// use require without a reference to ensure a file is bundled
require('material-design-lite/src/material-design-lite.scss')
require('material-design-icons/iconfont/material-icons.css')
require('mdbootstrap/sass/mdb.scss')
