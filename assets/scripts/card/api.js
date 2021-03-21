const config = require('../config')
const store = require('../store')

const createCard = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/cards',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/cards',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const del = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cards/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createCard,
  index,
  del
}
