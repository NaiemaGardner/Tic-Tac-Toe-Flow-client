'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Sign up was successful! Sign in now to play.')
}
const signUpFailure = function () {
  $('#message').text('Sign up attempt failed. Please try again.')
}

const signInSuccess = function (response) {
  $('#message').text('Ready, set, play!')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('#authenticated').show()
  $('#unauthenticated').hide()
}
const signInFailure = function () {
  $('#message').text('Sign in attempt failed. Please try again.')
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been updated successfully.')
}
const changePasswordFailure = function () {
  $('#message').text('Failed to update your password. Please try again.')
}

const signOutSuccess = function () {
  $('#message').text('User signed out. See you soon!')
  $('#unauthenticated').show()
  $('#authenticated').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Sign out attempt failed. Please try again.')
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
