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
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.cardFailure)
}

const onDestroyCard = function (event) {
  event.preventDefault()

  const deleteButton = event.target
  const id = $(deleteButton).data('id')
  api.del(id)
    .then(ui.deleteSuccess)
    .catch(ui.cardFailure)
}

const onShowCard = function (event) {
  event.preventDefault()

  const showButton = event.target
  const id = $(showButton).data('id')

  api.show(id)
    .then(ui.showSuccess)
    .catch(ui.cardFailure)
}

const onUpdate = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)
  const id = formData.card.id

  api.update(id, formData)
    .then(ui.updateCardSuccess)
    .catch(ui.cardFailure)
}

module.exports = {
  onCreateCard,
  onIndexCard,
  onDestroyCard,
  onShowCard,
  onUpdate
}
