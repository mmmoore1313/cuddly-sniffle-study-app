'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const forms = require('./templates/forms')
const modals = require('./templates/staticmodals')


$(() => {
  $('#user').hide()
  $('#login)').hide()

  $('#joinus').click(function () {
    event.preventDefault()
    $('#messages').modal().html(forms.signUpHtml)
    $('#sign-up').on('submit', authEvents.onSignUp)
    $('.close').click(function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
    })
    $('#clamp').click(function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
    })
    $('#messages').show()
    $('.modal-backdrop').show()
  })

})
