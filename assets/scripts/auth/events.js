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
}

const displaySignUp = function (event) {
  event.preventDefault()
  $('.sign-up-modal').show()
  $('.sign-in-modal').hide()
  $('#landing-modal').css('background-color', '#fbe9e7')
}

const displaySignIn = function (event) {
  event.preventDefault()
  $('.sign-up-modal').hide()
  $('.sign-in-modal').show()
  $('#landing-modal').css('background-color', '#e0f2f1')
}

// Add authentication event handlers to page
const addAuthHandlers = () => {
  $('#sign-up-button').on('click', onSignUp)
  $('#sign-in-button').on('click', onSignIn)
  $('#sign-up-form-button').on('click', displaySignUp)
  $('#sign-in-form-button').on('click', displaySignIn)
  $('#sign-up-form-button').on('click', displaySignUp)
  // $('#sign-out').on('click', onSignOut)
  // $('#change-password').on('submit', onPasswordReset)
  // $('#changePasswordModal').on('submit', passwordResetConfirm)
}

module.exports = {
  addAuthHandlers
}
