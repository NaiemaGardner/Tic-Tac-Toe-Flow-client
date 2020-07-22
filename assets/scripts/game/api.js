'use strict'

const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

const clickBoard = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: store.index,
          value: store.player
        },
        over: store.over
      }
    }
  })
}

module.exports = {
  newGame,
  clickBoard
}
