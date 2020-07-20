'use strict'

const store = require('../store')

const newGameSuccess = function (response) {
  $('#new-game').text('Place X on the board.')
  store.game = response.game
}
const newGameFailure = function () {
  $('#new-game').text('Game failed to load.')
}

const clickZeroSuccess = function (response) {
  $('.zero').text('X')
  store.game = response.game._id
}
const clickZeroFailure = function () {
  $('.zero').text('Unexpected error.')
}

const clickOneSuccess = function (response) {
  $('.one').text('X')
  store.game = response.game._id
}
const clickOneFailure = function () {
  $('.one').text('Unexpected error.')
}

const clickTwoSuccess = function (response) {
  $('.two').text('X')
  store.game = response.game._id
}
const clickTwoFailure = function () {
  $('.two').text('Unexpected error.')
}

const clickThreeSuccess = function (response) {
  $('.three').text('X')
  store.game = response.game._id
}
const clickThreeFailure = function () {
  $('.three').text('Unexpected error.')
}

const clickFourSuccess = function (response) {
  $('.four').text('X')
  store.game = response.game._id
}
const clickFourFailure = function () {
  $('.four').text('Unexpected error.')
}

const clickFiveSuccess = function (response) {
  $('.five').text('X')
  store.game = response.game._id
}
const clickFiveFailure = function () {
  $('.five').text('Unexpected error.')
}

const clickSixSuccess = function (response) {
  $('.six').text('X')
  store.game = response.game._id
}
const clickSixFailure = function () {
  $('.six').text('Unexpected error.')
}

const clickSevenSuccess = function (response) {
  $('.seven').text('X')
  store.game = response.game._id
}
const clickSevenFailure = function () {
  $('.seven').text('Unexpected error.')
}

const clickEightSuccess = function (response) {
  $('.eight').text('X')
  store.game = response.game._id
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
