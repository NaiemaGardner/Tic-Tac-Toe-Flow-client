'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

// View toggling
const enterChangePassword = function (event) {
  event.preventDefault()
  ui.enterChangePasswordView()
}
const enterGameStats = function (event) {
  event.preventDefault()
  ui.enterStatsView()
}
const exitGameStats = function (event) {
  event.preventDefault()
  ui.exitStatsView()
}

// Game events
const onNewGame = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.createGame(gameData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onClickBoard = function (event) {
  event.preventDefault()
  // storing index(#) of element
  const gameMove = $(event.target)
  store.game.index = gameMove.index()
  if (store.game.cells[store.game.index] === '') {
    api.updateGame()
      .then(ui.clickBoardSuccess)
      .catch(ui.clickBoardFailure)
  } else {
    $('#game-guide').text('Invalid move.')
  } // get element from page > insert string into element on page
}

// if (store.over === true) {
//   event.preventDefault()
//   const game = event.target
//   const gameData = getFormFields(game)
//   api.clickBoard(gameData)
//     .then(ui.gameOverSuccess)
//     .catch(ui.gameOverFailure)
// } else if (store.over === false && store.index === '') {
//   event.preventDefault()
//   const game = event.target
//   const gameData = getFormFields(game)
//   api.clickBoard(gameData)
//     .then(ui.clickBoardSuccess)
//     .catch(ui.clickBoardFailure)
// }

module.exports = {
  enterChangePassword,
  enterGameStats,
  exitGameStats,
  onNewGame,
  onClickBoard
}
