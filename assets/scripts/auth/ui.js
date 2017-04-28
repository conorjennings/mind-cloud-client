'use strict'

const store = require('../store.js')
const ideaEvents = require('../ideas/events.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  ideaEvents.onGetIdeas()
  console.log(data)
}

const signInFailure = (error) => {
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordFailure = (error) => {
  console.log(error)
}

const signOutSuccess = () => {
  store.user = null
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
