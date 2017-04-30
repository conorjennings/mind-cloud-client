'use strict'

const showIdeasTemplate = require('../templates/display-ideas.handlebars')
const api = require('./api')
const salvattore = require('../../../node_modules/salvattore/dist/salvattore.js')

const getIdeasSuccess = (data) => {
  console.log(data)
  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  $('#hidden-dom-elements').append(showIdeasHtml)
  const gridContainer = document.getElementById('grid')
  console.log('grid container data ', gridContainer)
  const newItems = []
  console.log('new items ', newItems)
  $('.one-idea').each(function () {
    newItems.push($(this)[0])
  })
  salvattore.appendElements(gridContainer, newItems)
  $('#grid').show()
  $('#action-wrapper').show()
  $('.delete-idea-button').on('click', onDeleteIdea)
  $('.edit-idea-button').on('click', onEditIdea)
}

const createIdeaFailure = (error) => {
  console.log(error)
}

const createIdeaSuccess = (data) => {
  console.log(data)
  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  $('#grid').append(showIdeasHtml)
  $('#new-idea-modal').modal('hide')
}

const onDeleteIdea = function (data) {
  console.log('data looks like; ', data)
  const id = $(this).data('id')
  api.deleteIdea(id)
    .then(deleteIdeaSuccess)
    .catch(deleteIdeaFailure)
  $(this).closest('.thumbnail').hide()
}

const onEditIdea = function () {
  $('#new-idea-modal').modal('show')
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
  onDeleteIdea,
  createIdeaSuccess,
  createIdeaFailure
}
