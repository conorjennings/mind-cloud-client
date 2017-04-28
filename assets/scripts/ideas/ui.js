'use strict'

const showIdeasTemplate = require('../templates/display-ideas.handlebars')
const api = require('./api')

const getIdeasSuccess = (data) => {
  console.log(data)
  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  $('#grid').append(showIdeasHtml)
  $('.delete-idea-button').on('click', onDeleteIdea)
}

const onDeleteIdea = function (data) {
  console.log('data looks like; ', data)
  const id = $(this).data('id')
  api.deleteIdea(id)
    .then(deleteIdeaSuccess)
    .catch(deleteIdeaFailure)
  $(this).closest('.thumbnail').hide()
}

const getIdeasFailure = (error) => {
  console.log(error)
}

const deleteIdeaSuccess = (data) => {
  console.log('delete successful')
  $('#new-idea-modal').modal('hide')
}

const deleteIdeaFailure = (error) => {
  console.log(error)
}

module.exports = {
  getIdeasSuccess,
  getIdeasFailure,
  deleteIdeaSuccess,
  deleteIdeaFailure,
  onDeleteIdea
}
