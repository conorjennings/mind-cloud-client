'use strict'

const showIdeasTemplate = require('../templates/display-ideas.handlebars')
const displaySingleIdeaTemplate = require('../templates/load-single-idea.handlebars')
const api = require('./api')
const salvattore = require('salvattore')
const ideaStore = require('../idea-store.js')

const getIdeasSuccess = (data) => {
  console.log(data)
  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  $('#hidden-dom-elements').append(showIdeasHtml)
  const gridContainer = document.getElementById('grid')
  let newItems = []
  $('.one-idea').each(function () {
    newItems.push($(this)[0])
  })
  salvattore.appendElements(gridContainer, newItems)
  $('#grid').show()
  $('#action-wrapper').show()
  $('#app-banner').show()
  $('.delete-idea-button').off()
  $('.edit-idea-button').off()
  $('.delete-idea-button').on('click', onDeleteIdea)
  $('.edit-idea-button').on('click', displayIdeaForm)
  newItems = []
}

const createIdeaFailure = (error) => {
  console.log(error)
}

const createIdeaSuccess = (data) => {
  console.log('confirm idea has an id ', data)
  const showIdeaHtml = displaySingleIdeaTemplate({ idea: data.idea })
  console.log('showIdeaHtml data ', showIdeaHtml)
  $('#hidden-dom-elements').append(showIdeaHtml)
  const gridContainer = document.getElementById('grid')
  console.log('grid container data ', gridContainer)
  let newItems = []
  $('.one-new-idea').each(function () {
    newItems.push($(this)[0])
    $('.one-new-idea').addClass('one-idea').removeClass('one-new-idea')
  })
  console.log('new items array ', newItems)
  salvattore.appendElements(gridContainer, newItems)
  newItems = []
  $('#grid').show()
  $('#new-idea-modal').modal('hide')
  $('.delete-new-idea-button').off()
  $('#submit-new-idea-button').off()
  $('.delete-idea-button').on('click', onDeleteIdea)
  $('.edit-idea-button').on('click', displayIdeaForm)
  $('#new-idea').val('')
}

const onDeleteIdea = function (data) {
  console.log('data looks like; ', data)
  const id = $(this).data('id')
  api.deleteIdea(id)
    .then(deleteIdeaSuccess)
    .catch(deleteIdeaFailure)
  $(this).closest('.thumbnail').remove()
}

const onEditIdea = function (event) {
  const content = document.getElementById('edit-idea').value
  console.log('content ', content)
  event.preventDefault()
  const data = {
    'idea': {
      'content': content
    }
  }
  api.editIdea(data)
  .then(editIdeaSuccess)
  .catch(editIdeaFailure)
  ideaStore.id = null
  console.log(' confirm ideaStore is null = ', ideaStore)
}

const onGetIdeas = function () {
  api.getIdeas()
    .then(getIdeasSuccess)
    .catch(getIdeasFailure)
}

const displayIdeaForm = function () {
  $('#edit-idea-modal').modal('show')
  $('.delete-edit-idea-button').on('click', hideIdeaForm)
  $('#submit-edited-idea-button').on('click', onEditIdea)
}

const getIdeaSuccess = (data) => {
  console.log('get successful ', data)
  $('#edit-idea').val(data.idea.content)
}

const getIdeaFailure = (error) => {
  console.log(error)
}

const hideIdeaForm = (event) => {
  event.preventDefault()
  $('.delete-edit-idea-button').off()
  $('#submit-edited-idea-button').off()
  $('#edit-idea-modal').modal('hide')
}

const editIdeaSuccess = () => {
  console.log('edit successful ')
  $('.delete-edit-idea-button').off()
  $('#submit-edited-idea-button').off()
  $('#edit-idea-modal').modal('hide')
  $('#grid').find('.one-idea').remove()
  onGetIdeas()
}

const editIdeaFailure = (error) => {
  console.log(error)
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
  createIdeaFailure,
  onEditIdea,
  editIdeaSuccess,
  editIdeaFailure,
  getIdeaSuccess,
  getIdeaFailure
}
