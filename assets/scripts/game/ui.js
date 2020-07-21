'use strict'

const store = require('../store')
const array = []

const newGameSuccess = function (response) {
  $('#new-game').text('Place X on the board.')
  store.game = response.game
}
const newGameFailure = function () {
  $('#new-game').text('Game failed to load.')
}

const clickZeroSuccess = function (response) {
  store.game = response.game._id
  if (array.length % 2 === 0) {
    $('.zero').text('X')
    array[0] = 'X'
  } else {
    $('.zero').text('O')
    array[0] = 'O'
  }
}
const clickZeroFailure = function () {
  $('.zero').text('Unexpected error.')
}

const clickOneSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.one').text('X')
    array[1] = 'X'
  } else {
    $('.one').text('O')
    array[1] = '0'
  }
}
const clickOneFailure = function () {
  $('.one').text('Unexpected error.')
}

const clickTwoSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.two').text('X')
    array[2] = 'X'
  } else {
    $('.two').text('O')
    array[2] = 'O'
  }
}
const clickTwoFailure = function () {
  $('.two').text('Unexpected error.')
}

const clickThreeSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.three').text('X')
    array[3] = 'X'
  } else {
    $('.three').text('O')
    array[3] = 'O'
  }
}
const clickThreeFailure = function () {
  $('.three').text('Unexpected error.')
}

const clickFourSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.four').text('X')
    array[4] = 'X'
  } else {
    $('.four').text('O')
    array[4] = 'O'
  }
}
const clickFourFailure = function () {
  $('.four').text('Unexpected error.')
}

const clickFiveSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.five').text('X')
    array[5] = 'X'
  } else {
    $('.five').text('O')
    array[5] = 'O'
  }
}
const clickFiveFailure = function () {
  $('.five').text('Unexpected error.')
}

const clickSixSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.six').text('X')
    array[6] = 'X'
  } else {
    $('.six').text('O')
    array[6] = 'O'
  }
}
const clickSixFailure = function () {
  $('.six').text('Unexpected error.')
}

const clickSevenSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.seven').text('X')
    array[7] = 'X'
  } else {
    $('.seven').text('O')
    array[7] = 'O'
  }
}
const clickSevenFailure = function () {
  $('.seven').text('Unexpected error.')
}

const clickEightSuccess = function (response) {
  store.game = response.game._id
  if (array.lenth % 2 === 0) {
    $('.eight').text('X')
    array[8] = 'X'
  } else {
    $('.eight').text('O')
    array[8] = 'O'
  }
}
const clickEightFailure = function () {
  $('.eight').text('Unexpected error.')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickZeroSuccess,
  clickZeroFailure,
  clickOneSuccess,
  clickOneFailure,
  clickTwoSuccess,
  clickTwoFailure,
  clickThreeSuccess,
  clickThreeFailure,
  clickFourSuccess,
  clickFourFailure,
  clickFiveSuccess,
  clickFiveFailure,
  clickSixSuccess,
  clickSixFailure,
  clickSevenSuccess,
  clickSevenFailure,
  clickEightSuccess,
  clickEightFailure
}
