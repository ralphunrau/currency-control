import './styles/LoginForm.scss';
import axios from 'axios';
import React, { useState } from 'react';

function LoginForm(props) {

  const [errors, setErrors] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userInfo = {
      email: event.target[0].value,
      password: event.target[1].value
    }
    
    axios.post('/user/login', userInfo).then((res) => {
      if (typeof res.data[0] === 'string') {
        setErrors(res.data);
        return;
      }
      props.setUserForm('None');
    }).catch((err) => {
      console.log(err)
    })
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
        <ul>
          {errors.map(err => {
            return <li key='err'>{err}</li>
          })}
        </ul>
      </form>
    </div>
  );
}

export default LoginForm;