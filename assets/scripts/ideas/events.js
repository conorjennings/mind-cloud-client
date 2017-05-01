'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetIdeas = function () {
  api.getIdeas()
    .then(ui.getIdeasSuccess)
    .catch(ui.getIdeasFailure)
}

const onCreateIdea = function (event) {
  console.log('click!')
  const data = $('.new-idea-input').serialize()
  console.log('this is the data: ', data)
  event.preventDefault()
  api.createIdea(data)
    .then(ui.createIdeaSuccess)
    .catch(ui.createIdeaFailure)
}

const hideIdeaForm = (event) => {
  event.preventDefault()
  $('#new-idea-modal').modal('hide')
}

const displayIdeaForm = function () {
  $('#new-idea-modal').modal('show')
  $('.delete-new-idea-button').on('click', hideIdeaForm)
  $('#submit-new-idea-button').on('click', onCreateIdea)
}

// Add idea event handlers to page
const addIdeaHandlers = () => {
  $('#new-idea-button').on('click', displayIdeaForm)
}

module.exports = {
  onGetIdeas,
  addIdeaHandlers,
  onCreateIdea
}
