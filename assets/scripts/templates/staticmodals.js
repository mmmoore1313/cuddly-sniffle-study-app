const messagesHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        Sign In
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class='modal-body' id='heyyou'>
    </div>
    <div class='modal-footer'>
      <button type='button' class='close' data-dismiss='modal'>
        Rodger dodger
      </button>
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
//   <button class='front'>
//     Back
//   </button>
//   <button class='home'>
//     Home
//   </button>
// </div>
// <div id='stats'>
//   <button id='games-index'>
//     All games
//   </button>
//   <button class='home'>
//     Home
//   </button>
//
// </div>

module.exports = {
  messagesHtml,
  aboutHtml
}
