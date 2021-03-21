const updateHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        Update Term
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class='modal-body'>
      <form id='updateTerm'>
        <p>Term:</p>
        <input type='text' name='card[term]' placeholder='Change Term' class='form-control' >
        <p>Definition:</p>
        <input type='text' name='card[definition]' placeholder='Change definition' class='form-control' >
        <button type='submit' class='again'>
          Update
        </button>
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
const createCardHtml = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        Create a card
      </h5>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class='modal-body'>
      <form id='newterm'>
        <p>Term:</p>
        <input type='text' name='card[term]' placeholder='Add term' class='form-control' required>
        <p>Definition:</p>
        <input type='text' name='card[definition]' placeholder='Add definition' class='form-control' required>
        <button type='submit' class='again'>
          Create
        </button>
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
        </div>
      </form>
      <button type="button" class="close" data-dismiss="modal">
        No
      </button>
      </div>
    </div>
  </div>
</div>
`

const changePw = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">
        <h5 class="modal-title">
          Change Password
        </h5>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class='modal-body'>
        <form id='changePw'>
          <div class='form-group'>
            <input type='password' name='passwords[old]' class="form-control" placeholder="Old Password" required>
            <input name='passwords[new]' type='password' placeholder='New Password' class='form-control' required>
            <button type='submit'>
              Change Password
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

module.exports = {
  signUpHtml,
  loginHtml,
  signOutHtml,
  changePw,
  createCardHtml,
  updateHtml
}
