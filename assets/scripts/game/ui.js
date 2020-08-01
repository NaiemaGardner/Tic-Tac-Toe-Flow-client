'use strict'

const store = require('../store')
const win = require('./checkWinner')

// Screen toggling
const enterChangePasswordView = function () {
  $('#authenticated-main').hide()
  $('#authenticated-password').show()
}
const enterStatsView = function () {
  $('#authenticated-main').hide()
  $('#authenticated-stats').show()
}
const exitStatsView = function () {
  $('#authenticated-stats').hide()
  $('#authenticated-main').show()
}

// Game events
const newGameSuccess = function (response) {
  // $('.board')[0].reset()
  $('.board').show()
  $('#game-guide').text('Place X on the board.')
  store.game = response.game
  store.game.player = 'X'
}
const newGameFailure = function () {
  $('#main-attempt').text('The game failed to load.')
}

const clickBoardSuccess = function (response) {
  // setting board text
  const gameMove = $('.square').eq(store.game.index)
  gameMove.text(store.game.player)
  const currentPlayer = store.game.player
  // setting the game object
  store.game = response.game
  // winner logic
  win.checkWinnerX()
  win.checkWinnerO()
  // toggling player
  if (currentPlayer === 'X') {
    store.game.player = 'O'
  } else {
    store.game.player = 'X'
  }
}
const clickBoardFailure = function () {
  $('#game-guide').text('An unexpected error has occurred.')
}

module.exports = {
  enterChangePasswordView,
  enterStatsView,
  exitStatsView,
  newGameSuccess,
  newGameFailure,
  clickBoardSuccess,
  clickBoardFailure
}
