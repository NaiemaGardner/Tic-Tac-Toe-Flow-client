'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame
}
