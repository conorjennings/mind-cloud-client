'use strict'

const config = require('../config')
const store = require('../store')

const getIdeas = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/ideas',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getIdeas
}
