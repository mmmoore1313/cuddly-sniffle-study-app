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

const onIndexCard = function (event) {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.cardFailure)
}

const onDestroyCard = function (event) {
  const form = event.target
  const formData = getFormFields(form)

  api.del(formData.card.id)
    .then(ui.deleteSuccess)
    .catch(ui.cardFailure)
}
module.exports = {
  onCreateCard,
  onIndexCard,
  onDestroyCard
}
