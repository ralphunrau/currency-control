import './styles/SignupForm.scss';

function SignupForm(props) {
  return (
    <div className='signup-page'>
      <form className='signup-form' action='/signup' method='post' onSubmit={() => props.setUserForm('None')} >
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
          <input type='email' name='email'></input>
        </div>
        <div className='form-input'>
          <text>Password</text>
          <input type='password' name='password'></input>
        </div>
        <div className='form-input'>
          <text>Confirm Password</text>
          <input type='password'></input>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignupForm;