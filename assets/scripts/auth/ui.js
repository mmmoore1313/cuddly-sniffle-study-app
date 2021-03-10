const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')

const signUpSuccess = function (response) {
  $('#messages').modal().html(modals.messagesHtml)
  $('#heyyou').html('Thanks for joining us! Click Login to start!')
  $('.close').click(function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
  })

  $('#signup').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user

  $('#messages').html(modals.messagesHtml)
  $('#heyyou').html('Welcome back!').css('color', 'green')
  $('.close').click(function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('#user').show()
    $('#front').hide()
  })
}
const authFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  authFailure
}
