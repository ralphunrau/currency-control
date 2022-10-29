import './styles/LoginForm.scss';

function LoginForm(props) {
  return (
    <div className='login-page'>
      <form className='login-form' action='/login' method='get' onSubmit={() => props.setUserForm('None')}>
        <div className='form-header'>
          <label>Log into your Currency Control account!</label>
        </div>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password'></input>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;