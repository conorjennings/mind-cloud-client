'use strict'

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.log(error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
