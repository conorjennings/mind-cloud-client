'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetIdeas = function (event) {
  event.preventDefault()
  api.getIdeas()
    .then(ui.getIdeasSuccess)
    .catch(ui.getIdeasFailure)
}

// Add authentication event handlers to page
const addIdeaHandlers = () => {
  $('#get-ideas-button').on('click', onGetIdeas)
}

module.exports = {
  addIdeaHandlers
}
