const signUpHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        Sign Up
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <form id='sign-up'>
        <div class='form-group'>
          <input type="text" class='form-control' name='credentials[email]' placeholder='Your Email' required>
          <input class='form-control' name='credentials[password]' type='password' placeholder='Enter password' required>
          <input class='form-control' name='credentials[password_confirmation]' type='password' placeholder='Confirm password' required>
          <button type='submit'>
            Sign me up!
          </button>
        </div>
      </form>
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

const loginHtml = `
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
      <div class="modal-body">
        <form id='sign-in'>
          <div class='form-group'>
            <input type="text" class='form-control' name='credentials[email]' placeholder='Your Email' required>
            <input id="password" class='form-control' name='credentials[password]' type='password' placeholder='Your Password' required>
            <button type='submit'>
              Login
            </button>
          </div>
        </form>
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

const signOutHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        Is it something we said?
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <h6>
        Are you sure you want to leave?
      </h6>
    </div>
    <div class='modal-footer'>
      <form id='#sign-out'>
        <div class='form-control'>
          <button type='submit' id='yeeah'>
            Yes
          </button>
          <button type='buton' class='naah'>
            No
          </button>
        </div>
      </form>
      <p class='error'></p>
    </div>
  </div>
</div>
`
// const changePw = `
// <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLongTitle">Change Password</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <form class="modal-body" id='change-password'>
//         <input name='passwords[old]' type='password' placeholder='Old Password' required>
//         <input name='passwords[new]' type='password' placeholder='New Password' required>
//         <br>
//         <button>
//           Change Password
//         </button>
//       </form>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         </div>
//       </div>
//     </div>
// `

module.exports = {
  signUpHtml,
  loginHtml,
  signOutHtml
  // changePw
}
