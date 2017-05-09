'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetIdeas = function () {
  api.getIdeas()
    .then(ui.getIdeasSuccess)
    .catch(ui.getIdeasFailure)
}

const onCreateIdea = function (event) {
  const data = $('.new-idea-input').serialize()
  // console.log('this is the data: ', data)
  event.preventDefault()
  api.createIdea(data)
    .then(ui.createIdeaSuccess)
    .catch(ui.createIdeaFailure)
}

const hideIdeaForm = (event) => {
  event.preventDefault()
  document.getElementById('new-idea-form').reset()
  $('#new-idea-modal').modal('hide')
  $('.delete-new-idea-button').off()
  $('#submit-new-idea-button').off()
}

const displayIdeaForm = function () {
  $('#new-idea-modal').modal({
    backdrop: 'static',
    keyboard: false
  }).modal('show')
  $('#submit-new-idea-button').prop('disabled', true)
  $('.delete-new-idea-button').on('click', hideIdeaForm)
  $('#submit-new-idea-button').on('click', onCreateIdea)
  $('#new-idea').on('keyup', function () {
    if ($('#new-idea').val().length !== 0) {
      $('#submit-new-idea-button').prop('disabled', false)
    } else {
      $('#submit-new-idea-button').prop('disabled', true)
    }
  })
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
