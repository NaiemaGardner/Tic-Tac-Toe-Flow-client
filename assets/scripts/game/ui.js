'use strict'

const store = require('../store')
const gameMove = require('./event')

// store.over = false

// store.winner = 'X'
// store.game.over = false
// store.game.index.win = [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ]

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
  $('#game-guide').text('Place X on the board.')
  store.game = response.game
}
const newGameFailure = function () {
  $('#main-attempt').text('The game failed to load.')
}

const clickBoardSuccess = function (response) {
  store.game = response.game
  if (store.game.player === 'X') {
    store.game.player = 'O'
  } else {
    store.game.player = 'X'
  }
  $('.square').text(store.game.player)
}
const clickBoardFailure = function () {
  $('#game-guide').text('An unexpected error has occurred.')
}

// const gameOverSuccess = function (response) {
//  store.game = response.game
//  if (store.index.win === 'X') {
//    store.winner = 'X'
//    $('#result').text('Player ' + store.winner + ' has won the game!')
//  } else if (store.index.win === 'O') {
//    store.winner = 'O'
//    $('#result').text('Player ' + store.winner + ' has won the game!')
//  } else {
//    $('#result').text('Draw!')
//  }
// }
// const gameOverFailure = function (response) {
//  store.game = response.game
//  $('#result').text('An unexpected error has occured.')
// }

module.exports = {
  enterChangePasswordView,
  enterStatsView,
  exitStatsView,
  newGameSuccess,
  newGameFailure,
  clickBoardSuccess,
  clickBoardFailure
  // gameOverSuccess,
  // gameOverFailure
  // getStatsSuccess,
  // getStatsFailure,
  // statsReturn,
  // pressPassword,
  // passwordReturn
}
