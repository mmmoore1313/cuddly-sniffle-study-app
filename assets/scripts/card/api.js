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
    url: config.apiUrl + '/cards/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    id
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/cards/' + store.card._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/cards/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    formData
  })
}
module.exports = {
  createCard,
  index,
  del,
  show,
  update
}
