import './styles/LoginForm.scss';

function LoginForm() {
  return (
    <div className='login-page'>
      <h2>Login Form</h2>
      <div className='login-form'>
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
          <input></input>
        </div>
        <div className='form-input'>
          <text>Confirm Password</text>
          <input></input>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;