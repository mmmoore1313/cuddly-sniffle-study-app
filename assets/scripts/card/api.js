const config = require('../config')
const store = require('../store')

const createCard = function (data) {
  console.log(data)
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

const del = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cards',
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
