'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const forms = require('./templates/forms')
const modals = require('./templates/staticmodals')


$(() => {
  // $('.user').hide()
  $('#yeeah').on('click', authEvents.onSignOut)
  $('.about').on('click', function () {
    event.preventDefault()
    $('#messages').modal().html(modals.aboutHtml)
    $('.close').click(function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
    })
    $('#messages').show()
    $('.modal-backdrop').show()
  })

  // signUp
  $('#joinus').click(function () {
    event.preventDefault()
    $('#messages').modal().html(forms.signUpHtml)
    $('#sign-up').on('submit', authEvents.onSignUp)
    $('.close').click(function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
    })
    $('#messages').show()
    $('.modal-backdrop').show()
  })

  // login
  $('#login').click(function () {
    event.preventDefault()
    $('#messages').modal().html(forms.loginHtml)
    $('.close').click(function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      $('.front').show()
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#sign-in').on('submit', authEvents.onSignIn)
  })

  // log out
  // $('.user').on('show', '#logout', function () {
  //   $('#logout').click(function () {
  //     $('#message').modal(forms.signOutHtml)
  //     $('#yeeah').on('click', authEvents.onSignOut)
  //     $('#naah').click(function () {
  //       event.preventDefault()
  //       $('#message').html('')
  //     })
  //   })
  // })
})
