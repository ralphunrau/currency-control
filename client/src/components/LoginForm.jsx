import './styles/LoginForm.scss';
import axios from 'axios';

function LoginForm(props) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      email: event.target[0].value,
      password: event.target[1].value
    }

    axios.post('/user/login', userInfo).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })

    props.setUserForm('None');
  }

  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={handleSubmit}>
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