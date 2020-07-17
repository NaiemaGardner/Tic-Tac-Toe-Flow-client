'use strict'

const newGameSuccess = function () {

}

const newGameFailure = function () {
  $('#new-game').text('Game failed to load.')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
