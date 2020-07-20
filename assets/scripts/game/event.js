'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.newGame(gameData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onClickZero = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexZero(gameData)
    .then(ui.clickZeroSuccess)
    .catch(ui.clickZeroFailure)
}

const onClickOne = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexOne(gameData)
    .then(ui.clickOneSuccess)
    .catch(ui.clickOneFailure)
}

const onClickTwo = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexTwo(gameData)
    .then(ui.clickTwoSuccess)
    .catch(ui.clickTwoFailure)
}

const onClickThree = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexThree(gameData)
    .then(ui.clickThreeSuccess)
    .catch(ui.clickThreeFailure)
}

const onClickFour = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexFour(gameData)
    .then(ui.clickFourSuccess)
    .catch(ui.clickFourFailure)
}

const onClickFive = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexFive(gameData)
    .then(ui.clickFiveSuccess)
    .catch(ui.clickFiveFailure)
}

const onClickSix = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexSix(gameData)
    .then(ui.clickSixSuccess)
    .catch(ui.clickSixFailure)
}

const onClickSeven = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexSeven(gameData)
    .then(ui.clickSevenSuccess)
    .catch(ui.clickSevenFailure)
}

const onClickEight = function (event) {
  event.preventDefault()
  const game = event.target
  const gameData = getFormFields(game)
  api.indexEight(gameData)
    .then(ui.clickEightSuccess)
    .catch(ui.clickEightFailure)
}

module.exports = {
  onNewGame,
  onClickZero,
  onClickOne,
  onClickTwo,
  onClickThree,
  onClickFour,
  onClickFive,
  onClickSix,
  onClickSeven,
  onClickEight
}
