const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')

const createCardSuccess = function (response) {
  $('#messages').modal().html(modals.messagesHtml)
  $('#heyyou').html('Study aid forged! Click Review to start studying!')
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
  })

  $('#newterm').trigger('reset')
}

const cardFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}









module.exports = {
  createCardSuccess,
  cardFailure
}
