const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')

const signUpSuccess = function (response) {
  $('#messages').modal().html(modals.messagesHtml)
  $('#heyyou').html('Thanks for joining us! Click Login to start!')
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
  })

  $('#signup').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#messages').html(modals.messagesHtml)
  $('#heyyou').text('Welcome back!').css('color', 'green')
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('.user').show()
    $('.front').hide()
  })
  $('#messages').show()
  $('.modal-backdrop').show()
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function () {
  $('#messages').html(modals.messagesHtml)
  $('#heyyou').text('You will be back... They always come back...')
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('.user').hide()
    $('.front').show()
  })
  $('#messages').show()
  $('.modal-backdrop').show()
  store.user = null
}

const changePasswordSuccess = function () {
  $('#messages').html(modals.messagesHtml)
  $('#heyyou').text('Old passwords are like yesterdays pants; you changed them!').css('color', 'green')
  $('.close').on('click', function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
  })
  $('#messages').show()
  $('.modal-backdrop').show()
  $('#changePw').trigger('reset')
}

const authFailure = function (response) {
  $('.error').text('Something went wrong. Please try again.').css('color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  authFailure,
  changePasswordSuccess
}
