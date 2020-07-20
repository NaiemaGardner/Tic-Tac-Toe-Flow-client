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
  $('.zero').on('click', gameEvents.onClickZero)
  $('.one').on('click', gameEvents.onClickOne)
  $('.two').on('click', gameEvents.onClickTwo)
  $('.three').on('click', gameEvents.onClickThree)
  $('.four').on('click', gameEvents.onClickFour)
  $('.five').on('click', gameEvents.onClickFive)
  $('.six').on('click', gameEvents.onClickSix)
  $('.seven').on('click', gameEvents.onClickSeven)
  $('.eight').on('click', gameEvents.onClickEight)
})
