const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')
const cardEvents = require('./events')


const createCardSuccess = function (response) {
  $('#messages').modal().html(modals.messagesHtml)
  $('.modal-title').text('Card Created!').css('color', 'black')
  $('.modal-body').text('Success! Create another or start to study!').css('color', 'green')
  $('.modal-footer').html(modals.cardbuttons)
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    // $('body').removeClass('modal-open')
  })
  $('.modal-footer').on('click', '.create', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.createCardHtml)
    $('.modal-title').text('Create a Card').css('color', 'black')
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      // $('body').removeClass('modal-open')
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#newterm').on('submit', cardEvents.onCreateCard)
  })
}

const onIndexSuccess = function (responseData) {
  const cards = responseData.cards

  let cardsHtml = ''
  cards.forEach(card => {
    cardsHtml += `
    <tr>
      <td>${card.term}</td>
      <td>${card.definition}</td>
      <td><button class='view' data-id=${card._id}>View Card</button></td>
      <td><button class='destroy' data-id=${card._id}>Delete</button></td>
      <td><button class='update' data-id=${card._id}>Update</button></td>
    </tr>
    `
  })
  $('#index').html(cardsHtml)

  $('#back').on('click', function () {
    $('.user').show()
    $('.table').hide()
  })
}

const deleteSuccess = function (responseData) {
  $('#messages').modal().html(modals.messagesHtml)
  $('.modal-title').text('Card Deleted!').css('color', 'red')
  $('#heyyou').html('Deletion Successful! Click Reload to update!').css('color', 'red')
  $('.modal-footer').html(modals.closeButton)
  $('.closeModal').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('body').removeClass('modal-open')
  })
  $('#messages').show()
  $('.modal-backdrop').show()
}

const showSuccess = function (responseData) {
  const card = responseData.card
  const showHtml = `
    <tr>
      <td>${card.term}</td>
      <td>${card.definition}</td>
      <td><button class='destroy' data- id=${card._id}>Delete</button></td>
      <td><button class='update' data-id=${card._id}>Update</button></td>
    </tr>`
  $('#showTable').show()
  $('#show').html(showHtml)
  $('#indexTable').hide()
}

const cardFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}

const updateCardSuccess = function (responseData) {
  $('#messages').modal().html(modals.messagesHtml)
  $('.modal-title').text('Card Created!').css('color', 'black')
  $('.modal-body').text('Success! Term Updated!').css('color', 'green')
  $('.modal-footer').html(modals.closeButton)
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('body').removeClass('modal-open')
  })
}
module.exports = {
  createCardSuccess,
  onIndexSuccess,
  cardFailure,
  deleteSuccess,
  showSuccess,
  updateCardSuccess
}
