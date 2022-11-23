import './styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import React, { useState } from 'react';

function App() {

  const [userForm, setUserForm] = useState('None');
  
  return (
    <div>
      <Header setUserForm={setUserForm}/>
      { userForm === 'None' && <Body /> }
      { userForm === 'Login' && <LoginForm setUserForm={setUserForm} /> }
      { userForm === 'Signup' && <SignupForm setUserForm={setUserForm} /> }
      <Footer />
    </div>
  );
}

export default App;
