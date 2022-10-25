import './styles/LoginForm.scss';

function LoginForm() {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <div className='form-header'>
          <text>Log into your Currency Control account!</text>
        </div>
        <div className='form-input'>
          <text>Email</text>
          <input></input>
        </div>
        <div className='form-input'>
          <text>Password</text>
          <input type='password'></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default LoginForm;