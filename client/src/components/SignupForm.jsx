import './styles/SignupForm.scss';

function SignupForm() {
  return (
    <div className='signup-page'>
      <div className='signup-form'>
        <div className='form-header'>
          <text>Create a Currency Control account.</text>
          <text>Get started on your personal money-saving journey!</text>
        </div>
        <div className='form-input'>
          <text>First Name</text>
          <input></input>
        </div>
        <div className='form-input'>
          <text>Last Name</text>
          <input></input>
        </div>
        <div className='form-input'>
          <text>Email</text>
          <input></input>
        </div>
        <div className='form-input'>
          <text>Password</text>
          <input type='password'></input>
        </div>
        <div className='form-input'>
          <text>Confirm Password</text>
          <input type='password'></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SignupForm;