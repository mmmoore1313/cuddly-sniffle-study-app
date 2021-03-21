const messagesHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class='modal-body' id='heyyou'>
    </div>
    <div class='modal-footer' id='feet'>
    </div>
  </div>
</div>
`

const aboutHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        About Us
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class="modal-body" id='about-it'>
      <p>
        Study Better is an offshoot precursor app to help you study! Inspired by Anki and years of chatter between two buds, Study This is but one of many steps along the way to perfect memorization, which in turn is the keystone to rapid understanding!
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="close" data-dismiss="modal">
        Close
      </button>
    </div>
  </div>
</div>
`
// const cardIndexHtml = `
// <table id='cardindex'>
//   <tr>
//     <th>Term</th>
//     <th>Definition</th>
//     <th>ID</th>
//   </tr>
//   <tr>
//     <td>${card.term}</td>
//     <td>${card.definition}</td>
//     <td>${card._id}</td>
//   </tr>
// </table>
// `
const cardbuttons = `
<button class='create'>Create another Card</button>
<button class='study'>Study</button>
<button class='close'>Close</button>
`
const closeButton = `
<button class='closeModal'>Close</button>`

// const updateButtons = `
// `
// $('.modal-title').text(`${card.term}`).css('color', 'black')
// $('.modal-body').text(`${card.definition}`).css('color', 'black')
// $('.modal-footer').text(`
//   <button class='destroy' data-id=${card._id}>Delete</button>
//   <button class='update' data-id=${card._id}>Update</button>
//   <button class='closeModal'>Close</button>
// `)

module.exports = {
  messagesHtml,
  aboutHtml,
  cardbuttons,
  closeButton
  // cardIndexHtml
}
