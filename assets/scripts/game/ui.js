'use strict'

const store = require('../store')
store.player = 'X'
store.winner = 'X'
store.over = false
// store.index.win = [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ]

const newGameSuccess = function (response) {
  $('#result').text('Place X on the board.')
  store.game = response.game
}
const newGameFailure = function () {
  $('#result').text('The game failed to load.')
}

const clickBoardSuccess = function (response) {
  store.game = response.game
  $('#board').text(store.player)
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}
const clickBoardFailure = function () {
  $('#board').text('An unexpected error has occured.')
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
  newGameSuccess,
  newGameFailure,
  clickBoardSuccess,
  clickBoardFailure
//  gameOverSuccess,
//  gameOverFailure
}
