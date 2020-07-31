'use strict'

const authEvents = require('./auth/event')
const gameEvents = require('./game/event')
// const uiEvents = require('./game/ui')

$(() => {
  // URL view
  $('#authenticated-main').hide()
  $('#authenticated-stats').hide()
  $('#authenticated-password').hide()
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // View toggling
  $('#password').on('click', gameEvents.enterChangePassword)
  $('#game-stats').on('click', gameEvents.enterGameStats)
  $('#stats-return').on('click', gameEvents.exitGameStats)
  // Action
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.square').on('click', gameEvents.onClickBoard)
})
