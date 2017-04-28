'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetIdeas = function () {
  api.getIdeas()
    .then(ui.getIdeasSuccess)
    .catch(ui.getIdeasFailure)
}

const displayIdeaForm = function () {
  $('#new-idea-modal').modal('show')
  $('.delete-new-idea-button').on('click', hideIdeaForm)
}

const hideIdeaForm = () => {
  $('#new-idea-modal').modal('hide')
}

// Add authentication event handlers to page
const addIdeaHandlers = () => {
  $('#new-idea-button').on('click', displayIdeaForm)
}

module.exports = {
  onGetIdeas,
  addIdeaHandlers
}
