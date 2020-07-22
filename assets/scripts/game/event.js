'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.newGame(gameData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onClickBoard = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.clickBoard(gameData)
    .then(ui.clickBoardSuccess)
    .catch(ui.clickBoardFailure)
}

if (store.over === true) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.clickBoard(gameData)
    .then(ui.gameOverSuccess)
    .catch(ui.gameOverFailure)
} else if (store.over === false && store.index === '') {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.clickBoard(gameData)
    .then(ui.clickBoardSuccess)
    .catch(ui.clickBoardFailure)
}

module.exports = {
  onNewGame,
  onClickBoard
}
