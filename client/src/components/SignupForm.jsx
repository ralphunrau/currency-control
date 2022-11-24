import './styles/SignupForm.scss';
import axios from 'axios';
import React, { useState } from 'react';

function SignupForm(props) {

  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      confirmPass: event.target[4].value
    }

    axios.post('/user/signup', userData).then((res) => {
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
    <div className='signup-page'>
      <form className='signup-form' onSubmit={handleSubmit}>
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
        <ul>{errors.map(err => {
          return <li key={err}>{err}</li>
        })}</ul>
      </form>
    </div>
  );
}

export default SignupForm;