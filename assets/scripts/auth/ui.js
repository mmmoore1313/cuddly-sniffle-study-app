const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')

const signUpSuccess = function (response) {
  // debugger

  $('#messages').modal().html(modals.messagesHtml)
  $('#heyyou').html('Thanks for joining us! Click Login to start!')
  // $('#login').show()
  $('#signup').trigger('reset')
}

const authFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  authFailure
}
