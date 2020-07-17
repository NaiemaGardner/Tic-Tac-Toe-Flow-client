'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#attempt').text('Sign up was successful! Sign in now to play.')
}
const signUpFailure = function () {
  $('#attempt').text('Sign up attempt failed. Please try again.')
}

const signInSuccess = function (response) {
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#attempt').text('Ready, set, play!')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const signInFailure = function () {
  $('#attempt').text('Sign in attempt failed. Please try again.')
}

const changePasswordSuccess = function () {
  $('#auth-attempt').text('Your password has been updated successfully.')
}
const changePasswordFailure = function () {
  $('#auth-attempt').text('Failed to update your password. Please try again.')
}

const signOutSuccess = function () {
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('#auth-attempt').text('User signed out. See you soon!')
  store.user = null
}
const signOutFailure = function () {
  $('#auth-attempt').text('Sign out attempt failed. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
