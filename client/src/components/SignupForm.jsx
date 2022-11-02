import './styles/SignupForm.scss';

function SignupForm(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log('got to handle submit');
  }

  return (
    <div className='signup-page'>
      <form className='signup-form' action='/user/signup' method='POST' onSubmit={handleSubmit}>
        <div className='form-header'>
          <label>Create a Currency Control account.</label>
          <label>Get started on your personal money-saving journey!</label>
        </div>
        <div className='form-input'>
          <label htmlFor='firstName'>First Name</label>
          <input id='firstName'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='lastName'>Last Name</label>
          <input id='lastName'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='confirmPass'>Confirm Password</label>
          <input type='password' id='confirmPass'></input>
        </div>
        <input type='submit'/>
      </form>
    </div>
  );
}

export default SignupForm;