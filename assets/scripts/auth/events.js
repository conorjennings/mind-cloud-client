'use strict'

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = $('#sign-up').serialize()
  console.log('this is the data: ', data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = $('#sign-in').serialize()
  console.log('this is the data: ', data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // $('#side-nav').show()
  $('#welcome-modal').modal('hide')
  $('#action-wrapper').show()
}

const displaySignUp = function (event) {
  event.preventDefault()
  $('.sign-up-modal').show()
  $('.sign-in-modal').hide()
  $('.modal-content').css('background-color', '#fbe9e7')
}

const displaySignIn = function (event) {
  event.preventDefault()
  $('.sign-up-modal').hide()
  $('.sign-in-modal').show()
  $('.modal-content').css('background-color', '#e0f2f1')
}

const displayChangePw = function (event) {
  event.preventDefault()
  $('#change-password-modal').modal('show')
}

const onPasswordReset = function (event) {
  const data = $('#change-password').serialize()
  console.log('this is the data: ', data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
  $('#welcome-modal').modal('show')
  $('#action-wrapper').hide()
}

const cancelPasswordReset = function (event) {
  $('#change-password-modal').modal('hide')
}

// Add authentication event handlers to page
const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up-form-button').on('click', displaySignUp)
  $('#sign-in-form-button').on('click', displaySignIn)
  $('#sign-up-form-button').on('click', displaySignUp)
  $('#change-password-menu').on('click', displayChangePw)
  $('#sign-out-menu').on('click', onSignOut)
  $('#change-password').on('submit', onPasswordReset)
  $('#cancel-change-password-button').on('click', cancelPasswordReset)
}

module.exports = {
  addAuthHandlers
}
