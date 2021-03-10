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
      <button type='button' class='login mr-auto' id='login'>
        Login
      </button>
      <button type='button' class='clamp' data-dismiss='modal'>
        Rodger dodger
      </button>
    </div>
  </div>
</div>
`

const howToHtml =
`
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        WaXOn, waXOff
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
      </div>
      <div class="modal-body">
        <p>
          Tic Tac Toe is an ancient training technique used to maintain the balance between the Xs and the Os
        </p>
        <p>
          This digital forray is just the next evolution of the battle; who will win?
        </p>
        <p>
          There are two arenas in which you may spar:
        </p>
        <ul>
          <li class='front-section'>
            Quick Game
          </li>
          <li class='front-section'>
            Sign Up!
          </li>
        </ul>
      </div>
      <div class="modal-footer">
        <p class='error'></p>
        <button type="button" class="close" data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
`
// <div id='about'>
//   <h2>About Us</h2>
//   <p> This is where you can read about our plans</p>
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
  howToHtml
}
