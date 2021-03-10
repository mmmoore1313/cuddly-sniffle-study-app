const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-Form-Fields')

const onSignUp = function (event) {
  //debugger
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.authFailure)
}

module.exports = {
  onSignUp
}
