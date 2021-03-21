'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const cardEvents = require('./card/events')
const forms = require('./templates/forms')
const modals = require('./templates/staticmodals')


$(() => {
  // index card
  $('.organize').on('click', cardEvents.onIndexCard)
  $('.organize').on('click', function () {
    $('.user').hide()
    $('#indexTable').show()
    $('#showTable').hide()
  })

  // Destroy card
  $('#index').on('click', '.destroy', cardEvents.onDestroyCard)

  // Show Card
  $('#index').on('click', '.view', cardEvents.onShowCard)

  // Update card
  $('#index').on('click', '.update', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.updateHtml)
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#updateTerm').on('submit', cardEvents.onUpdate)
  })

  $('#show').on('click', '.update', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.updateHtml)
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#updateTerm').on('submit', cardEvents.onUpdate)
  })

  // create card
  $('.create').on('click', function () {
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

  // about
  $('.about').on('click', function () {
    event.preventDefault()
    $('#messages').modal().html(modals.aboutHtml)
    $('.modal-title').text('About Us').css('color', 'black')
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      $('body').removeClass('modal-open')
    })
    $('#messages').show()
    $('.modal-backdrop').show()
  })

  // change password
  $('.user-settings').on('click', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.changePw)
    $('.modal-title').text('User Settings').css('color', 'black')
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      $('body').removeClass('modal-open')
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#changePw').on('submit', authEvents.onChangePassword)
  })

  // log out
  $('#log-out').on('click', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.signOutHtml)
    $('.modal-title').text('Is it something we said?').css('color', 'black')
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      $('body').removeClass('modal-open')
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#yeeah').on('click', authEvents.onSignOut)
  })

  // signUp
  $('#joinus').on('click', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.signUpHtml)
    $('#sign-up').on('submit', authEvents.onSignUp)
    $('.close').on('click', function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      $('body').removeClass('modal-open')
    })
    $('#messages').show()
    $('.modal-backdrop').show()
  })

  // login
  $('#login').on('click', function () {
    event.preventDefault()
    $('#messages').modal().html(forms.loginHtml)
    $('.close').click(function () {
      $('#messages').hide()
      $('.modal-backdrop').hide()
      $('.front').show()
      $('body').removeClass('modal-open')
    })
    $('#messages').show()
    $('.modal-backdrop').show()
    $('#sign-in').on('submit', authEvents.onSignIn)
  })
  $('.user').hide()
  $('.table').hide()
})
