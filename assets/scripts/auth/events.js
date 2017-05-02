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
  $('.modal-content').css('background-color', '#fbe9e7')

  // Logic to confirm if passwords match
  $('#sign-up-password, #sign-up-password-confirm').on('keyup', function () {
    if ($('#sign-up-password').val().length === 0 || $('#sign-up-password-confirm').val().length === 0) {
      $('#sign-up-message').html('')
    } else if ($('#sign-up-password').val() === $('#sign-up-password-confirm').val()) {
      $('#sign-up-message').html('matching').css('color', 'green')
      $('#sign-up-button').prop('disabled', false)
    } else {
      $('#sign-up-message').html('not matching').css('color', 'red')
      $('#sign-up-button').prop('disabled', true)
    }
  })
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

  // Logic to confirm if passwords match
  $('#new-password, #new-password-confirm').on('keyup', function () {
    if ($('#new-password').val().length === 0 || $('#new-password-confirm').val().length === 0) {
      $('#pw-change-message').html('')
    } else if ($('#new-password').val() === $('#new-password-confirm').val()) {
      $('#pw-change-message').html('matching').css('color', 'green')
      $('#change-password-button').prop('disabled', false)
    } else {
      $('#pw-change-message').html('not matching').css('color', 'red')
      $('#change-password-button').prop('disabled', true)
    }
  })
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
  $('#grid').hide()
  $('#nav').hide()
  $('#app-banner').hide()
}

const cancelPasswordReset = function (event) {
  $('#pw-change-message').html('')
  $('#old-password').val('')
  $('#new-password').val('')
  $('#new-password-confirm').val('')
  $('#change-password-modal').modal('hide')
}

// Add authentication event handlers to page
const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up-form-button').on('click', displaySignUp)
  $('#sign-in-form-button').on('click', displaySignIn)
  $('#sign-up-form-button').on('click', displaySignUp)
  $('#change-pw-menu-item').on('click', displayChangePw)
  $('#sign-out-menu-item').on('click', onSignOut)
  $('#change-password').on('submit', onPasswordReset)
  $('#cancel-change-password-button').on('click', cancelPasswordReset)
}

module.exports = {
  addAuthHandlers
}
