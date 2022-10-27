import './styles/LoginForm.scss';

function LoginForm(props) {
  return (
    <div className='login-page'>
      <form className='login-form' action='/login' method='get' onSubmit={() => props.setUserForm('None')}>
        <div className='form-header'>
          <text>Log into your Currency Control account!</text>
        </div>
        <div className='form-input'>
          <text>Email</text>
          <input type='email' name='email'></input>
        </div>
        <div className='form-input'>
          <text>Password</text>
          <input type='password' name='password'></input>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;