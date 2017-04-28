'use strict'

const showIdeasTemplate = require('../templates/display-ideas.handlebars')

const getIdeasSuccess = (data) => {
  console.log(data)
  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  $('#grid').append(showIdeasHtml)
}

const getIdeasFailure = (error) => {
  console.log(error)
}

module.exports = {
  getIdeasSuccess,
  getIdeasFailure
}
