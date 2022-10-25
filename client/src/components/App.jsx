import './styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// import Testing from './Testing';
import React, { useState } from 'react';

function App() {

  const [userForm, setUserForm] = useState('None');
  
  return (
    <div>
      {/* <Testing /> */}
      <Header setUserForm={setUserForm}/>
      { userForm === 'None' && <Body /> }
      { userForm === 'Login' && <LoginForm /> }
      { userForm === 'Signup' && <SignupForm /> }
      <Footer />
    </div>
  );
}

export default App;
