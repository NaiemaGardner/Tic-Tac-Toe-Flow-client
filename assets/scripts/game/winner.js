'use strict'

const store = require('../store')

// check winner X
const checkWinnerX = function () {
  if (store.game.cells[0] === store.game.cells[1] &&
      store.game.cells[0] === store.game.cells[2] &&
      store.game.cells[0] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[3] === store.game.cells[4] &&
             store.game.cells[3] === store.game.cells[5] &&
             store.game.cells[3] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[6] === store.game.cells[7] &&
             store.game.cells[6] === store.game.cells[8] &&
             store.game.cells[6] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[0] === store.game.cells[3] &&
             store.game.cells[0] === store.game.cells[6] &&
             store.game.cells[0] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[1] === store.game.cells[4] &&
             store.game.cells[1] === store.game.cells[7] &&
             store.game.cells[1] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[2] === store.game.cells[5] &&
             store.game.cells[2] === store.game.cells[8] &&
             store.game.cells[2] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[2] === store.game.cells[5] &&
             store.game.cells[2] === store.game.cells[8] &&
             store.game.cells[2] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[0] === store.game.cells[4] &&
             store.game.cells[0] === store.game.cells[8] &&
             store.game.cells[0] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[2] === store.game.cells[4] &&
             store.game.cells[2] === store.game.cells[6] &&
             store.game.cells[2] === 'X') {
    $('.board').hide()
    $('#game-guide').text('X has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  }
}

// check winner O
const checkWinnerO = function () {
  if (store.game.cells[0] === store.game.cells[1] &&
      store.game.cells[0] === store.game.cells[2] &&
      store.game.cells[0] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[3] === store.game.cells[4] &&
             store.game.cells[3] === store.game.cells[5] &&
             store.game.cells[3] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[6] === store.game.cells[7] &&
             store.game.cells[6] === store.game.cells[8] &&
             store.game.cells[6] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[0] === store.game.cells[3] &&
             store.game.cells[0] === store.game.cells[6] &&
             store.game.cells[0] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[1] === store.game.cells[4] &&
             store.game.cells[1] === store.game.cells[7] &&
             store.game.cells[1] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[2] === store.game.cells[5] &&
             store.game.cells[2] === store.game.cells[8] &&
             store.game.cells[2] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[2] === store.game.cells[5] &&
             store.game.cells[2] === store.game.cells[8] &&
             store.game.cells[2] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[0] === store.game.cells[4] &&
             store.game.cells[0] === store.game.cells[8] &&
             store.game.cells[0] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  } else if (store.game.cells[2] === store.game.cells[4] &&
             store.game.cells[2] === store.game.cells[6] &&
             store.game.cells[2] === 'O') {
    $('.board').hide()
    $('#game-guide').text('O has won! Start a new game.')
    store.game.over = true
    $('.square').text('')
  }
}

// check tie game
const checkDraw = function () {
  if (store.game.cells[0] !== '' && store.game.cells[1] !== '' &&
      store.game.cells[2] !== '' && store.game.cells[3] !== '' &&
      store.game.cells[4] !== '' && store.game.cells[5] !== '' &&
      store.game.cells[6] !== '' && store.game.cells[7] !== '' &&
      store.game.cells[8] !== '') {
    $('.board').hide()
    $('#game-guide').text('It is a draw! Start a new game.')
    store.game.over = true
    $('.square').text('')
  }
}

module.exports = {
  checkWinnerX,
  checkWinnerO,
  checkDraw
}
