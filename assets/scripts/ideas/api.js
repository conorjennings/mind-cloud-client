'use strict'

const config = require('../config')
const store = require('../store')

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
  deleteIdea
}
