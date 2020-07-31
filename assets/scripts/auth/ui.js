'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#auth-attempt').text('Sign up was successful! Sign in now to play.')
  $('#sign-up')[0].reset()
}
const signUpFailure = function () {
  $('#auth-attempt').text('Sign up attempt failed. Please try again.')
}

// const signUpSuccess = function (response) {
//   $('#unauthenticated').hide()
//   $('#authenticated-main').show()
//   // console.log(store)
//   // store.user = response.user
//   // console.log('store: ', store)
//   // console.log('token: ', store.user.token)
//   $('#sign-up')[0].reset()
// }
// const signUpFailure = function () {
//   $('#auth-attempt').text('Sign up attempt failed. Please try again.')
// }

const signInSuccess = function (response) {
  $('#unauthenticated').hide()
  $('#authenticated-main').show()
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('#sign-in')[0].reset()
  $('#main-attempt').text('Ready, set, play!')
}
const signInFailure = function () {
  $('#auth-attempt').text('Sign in attempt failed. Please check your credentials and try again.')
}

const changePasswordSuccess = function () {
  $('#authenticated-password').hide()
  $('#authenticated-main').show()
  $('#change-password')[0].reset()
  $('#main-attempt').text('Your password has been updated successfully!')
}
const changePasswordFailure = function () {
  $('#authenticated-password').hide()
  $('#authenticated-main').show()
  $('#main-attempt').text('Failed to update your password. Please try again.')
}

const signOutSuccess = function () {
  $('#authenticated-main').hide()
  $('#unauthenticated').show()
  $('#auth-attempt').text('User signed out. See you soon!')
  store.user = null
}
const signOutFailure = function () {
  $('#main-attempt').text('Sign out attempt failed. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
