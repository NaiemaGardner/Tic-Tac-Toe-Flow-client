'use strict'

const store = require('../store')
const win = require('./winner')

// Screen toggling
const enterChangePasswordView = function () {
  $('#authenticated-main').hide()
  $('#authenticated-password').show()
}
const exitStatsView = function () {
  $('#authenticated-stats').hide()
  $('#authenticated-main').show()
}

// Game events
const newGameSuccess = function (response) {
  $('.board').show()
  $('#game-guide').text('Place X on the board.')
  $('#game-guide').show()
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
  win.checkDraw()
  // toggling player
  if (currentPlayer === 'X') {
    store.game.player = 'O'
  } else {
    store.game.player = 'X'
  }
  if (store.game.over !== true) {
    $('#game-guide').text('Place ' + store.game.player + ' on board.')
  }
}
const clickBoardFailure = function () {
  $('#game-guide').text('An unexpected error has occurred.')
}

const gameStatsSuccess = function (response) {
  $('#authenticated-main').hide()
  $('#authenticated-stats').show()
  if (response.games.length === 0) {
    $('#stats').text('Games played: 0')
  } else {
    $('#stats').html('Games played: ' + response.games.length)
  }
}
const gameStatsFailure = function () {
  $('#stats').text('An unexpected error has occurred.')
}

module.exports = {
  enterChangePasswordView,
  exitStatsView,
  newGameSuccess,
  newGameFailure,
  clickBoardSuccess,
  clickBoardFailure,
  gameStatsSuccess,
  gameStatsFailure
}
