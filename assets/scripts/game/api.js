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

const indexZero = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexOne = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexTwo = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexThree = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexFour = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexFive = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexSix = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexSeven = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexEight = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  indexZero,
  indexOne,
  indexTwo,
  indexThree,
  indexFour,
  indexFive,
  indexSix,
  indexSeven,
  indexEight
}
