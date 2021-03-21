const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')
const cardEvents = require('./events')


const createCardSuccess = function (response) {
  $('#messages').modal().html(forms.createCardHtml)
  $('.modal-title').text('Card Created!').css('color', 'black')

  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
  })

  $('#newterm').trigger('reset')
}

const onIndexSuccess = function (responseData) {
  const cards = responseData.cards

  let cardsHtml = ''
  cards.forEach(card => {
    cardsHtml += `
    <tr>
      <td>${card.term}</td>
      <td>${card.definition}</td>
      <td>${card._id}</td>
      <td><button name=${card._id} class='view'>View Card</button></td>
      <td><button class='destroy' data-id=${card._id}>Delete</button></td>
      <td><button type="button" id="close">Close</button></td>
    </tr>
    `
  })
  $('#index').html(cardsHtml)
  // $('.destroy').on('click', cardEvents.onDestroyCard)
  $('.view').on('click', function () {
    console.log('this should show one card')
  })
  $('#close').on('click', function () {
    $('.user').show()
    $('.table').hide()
  })
}

const deleteSuccess = function (responseData) {
  $('#messages').modal().html(modals.messagesHtml)
  $('.modal-title').text('Card Deleted!').css('color', 'red')
  $('#heyyou').text('Deletion Successful').css('color', 'red')
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
  })
  $('#messages').show()
  $('.modal-backdrop').show()
}
const cardFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  createCardSuccess,
  onIndexSuccess,
  cardFailure,
  deleteSuccess
}
