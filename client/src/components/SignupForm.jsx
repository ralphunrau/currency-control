import './styles/SignupForm.scss';
import React from 'react';
import axios from 'axios';

function SignupForm(props) {

  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPassRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    axios.post('http://localhost:8000/user/signup', newUser)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='signup-page'>
      <form className='signup-form' action='/signup' method='post' onSubmit={handleSubmit} >
        <div className='form-header'>
          <text>Create a Currency Control account.</text>
          <text>Get started on your personal money-saving journey!</text>
        </div>
        <div className='form-input'>
          <text>First Name</text>
          <input ref={firstNameRef}></input>
        </div>
        <div className='form-input'>
          <text>Last Name</text>
          <input ref={lastNameRef}></input>
        </div>
        <div className='form-input'>
          <text>Email</text>
          <input type='email' ref={emailRef}></input>
        </div>
        <div className='form-input'>
          <text>Password</text>
          <input type='password' ref={passwordRef}></input>
        </div>
        <div className='form-input'>
          <text>Confirm Password</text>
          <input type='password' ref={confirmPassRef}></input>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignupForm;