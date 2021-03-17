const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-Form-Fields')

const onCreateCard = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.createCard(data)
    .then(ui.createCardSuccess)
    .catch(ui.cardFailure)
}

module.exports = {
  onCreateCard
}
