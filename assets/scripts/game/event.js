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
// View game stats
const enterGameStats = function (event) {
  event.preventDefault()
  api.showGame()
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailure)
}

const exitGameStats = function (event) {
  event.preventDefault()
  ui.exitStatsView()
}

// Start game events
const onNewGame = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.createGame(gameData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// Play game events
const onClickBoard = function (event) {
  event.preventDefault()
  // storing index(#) of element as a jquery object
  const gameMove = $(event.target)
  store.game.index = gameMove.index()

  // continue game play and place piece on board
  if (store.game.over !== true && store.game.cells[store.game.index] === '') {
    api.updateGame()
      .then(ui.clickBoardSuccess)
      .catch(ui.clickBoardFailure)
  // continue game play and prevent placing piece on board
  } else if (store.game.over !== true && store.game.cells[store.game.index] !== '') {
    // get element from page > insert string into element on page
    $('#game-guide').text('Invalid move. Select an empty space.')
  }
}

module.exports = {
  enterChangePassword,
  enterGameStats,
  exitGameStats,
  onNewGame,
  onClickBoard
}
