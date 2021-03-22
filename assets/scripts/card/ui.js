const store = require('./../store')
const modals = require('../templates/staticmodals')
const forms = require('../templates/forms')
const cardEvents = require('./events')

const createCardSuccess = function (response) {
  $('#messages').modal().html(modals.messagesHtml)
  $('.modal-title').text('Card Created!').css('color', 'black')
  $('.modal-body').text('Success! Create another card!').css('color', 'green')
  $('.modal-footer').html(modals.closeButton)
  $('.closeModal').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    // $('body').removeClass('modal-open')
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
      <td>${card._id}</td>
      <td><button class='view' data-id=${card._id}>View Card</button></td>
      <td><button class='destroy' data-id=${card._id}>Delete</button></td>
      <td><button class='update' data-id=${card._id}>Update</button></td>
    </tr>
    `
    // // Update card
    // $('#index').on('click', '.update', function () {
    //   event.preventDefault()
    //   $('#messages').modal().html(forms.updateHtml)
    //   $('#cardId').text(`${card._id}`)
    //   $('.close').on('click', function () {
    //     $('#messages').hide()
    //     $('.modal-backdrop').hide()
    //   })
    //   $('#messages').show()
    //   $('.modal-backdrop').show()
    //   $('#updateTerm').on('submit', (event.preventDefault(), cardEvents.onUpdate))
    // })
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
      <td>${card._id}</td>
      <td><button class='destroy' data-id=${card._id}>Delete</button></td>
      <td><button class='update' data-id=${card._id}>Update</button></td>
    </tr>`
  $('#showTable').show()
  $('#show').html(showHtml)
  $('#indexTable').hide()
}

const updateCardSuccess = function (responseData) {
  $('#messages').modal().html(modals.messagesHtml)
  $('.modal-title').text('Card Created!').css('color', 'black')
  $('.modal-body').text('Success! Term Updated!').css('color', 'green')
  $('.modal-footer').html(modals.closeButton)
  $('.closeModal').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('body').removeClass('modal-open')
  })
}

const cardFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  createCardSuccess,
  onIndexSuccess,
  cardFailure,
  deleteSuccess,
  showSuccess,
  updateCardSuccess
}
