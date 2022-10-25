import './styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Testing from './Testing';
import React, { useState } from 'react';

function App() {

  const [userForm, setUserForm] = useState('none');
  
  return (
    <div>
      {/* <Testing /> */}
      <Header />
      { userForm === 'none' && <Body /> }
      { userForm === 'login' && <LoginForm /> }
      { userForm === 'signup' && <SignupForm /> }
      <Footer />
    </div>
  );
}

export default App;
