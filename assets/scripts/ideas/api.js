'use strict'

const config = require('../config')
const store = require('../store')
const ideaStore = require('../idea-store')

// Pulls ideas for current user on authentication
const getIdeas = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/ideas',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getIdea = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/ideas/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createIdea = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/ideas',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editIdea = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/ideas/' + ideaStore.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteIdea = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/ideas/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getIdeas,
  deleteIdea,
  createIdea,
  editIdea,
  getIdea
}
