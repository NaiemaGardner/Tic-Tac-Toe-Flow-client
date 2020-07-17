'use strict'

const authEvents = require('./auth/event')
const gameEvents = require('./game/event')

$(() => {
  $('#authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onNewGame)
})
