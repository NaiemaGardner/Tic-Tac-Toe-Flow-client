'use strict'

const config = require('../config')
// const store = require('../store')

const newGame = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/game-create',
    method: 'POST',
    data: gameData
  })
}

module.exports = {
  newGame
}
