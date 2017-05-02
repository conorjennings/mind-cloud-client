'use strict'

const store = require('../store.js')
const ideaEvents = require('../ideas/events.js')

const signUpSuccess = () => {
  $('#sign-up-message').html('account created!').css('color', 'black')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
}

const signUpFailure = () => {
  $('#sign-up-message').html('account already exists').css('color', 'black')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  ideaEvents.onGetIdeas()
  console.log(data)
  $('#welcome-modal').modal('hide')
  $('#sign-in-error-field span').text('')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-message').text('')
  $('#sign-up-message').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
}

const signInFailure = () => {
  $('#sign-in-error-field span').text('invalid credentials')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

const changePasswordSuccess = (data) => {
  $('#change-password-modal').modal('hide')
  $('#old-password').val('')
  $('#new-password').val('')
  $('#new-password-confirm').val('')
  $('#pw-change-message').text('')
}

const changePasswordFailure = () => {
  $('#pw-change-message').text('current password is incorrect').css('color', 'black')
  $('#old-password').val('')
  $('#new-password').val('')
  $('#new-password-confirm').val('')
}

const signOutSuccess = () => {
  store.user = null
  $('#grid').find('.one-idea').remove()
  console.log('signOut success ran and nothing was returned')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
