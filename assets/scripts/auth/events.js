const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-Form-Fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.authFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}
