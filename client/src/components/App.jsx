import './styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import React, { useState } from 'react';

function App() {

  const [userForm, setUserForm] = useState('None');
  const [user, setUser] = useState({});
  
  return (
    <div>
      <Header user={user} setUser={setUser} setUserForm={setUserForm}/>
      { userForm === 'None' && <Body /> }
      { userForm === 'Login' && <LoginForm setUserForm={setUserForm} setUser={setUser}/> }
      { userForm === 'Signup' && <SignupForm setUserForm={setUserForm} setUser={setUser}/> }
      <Footer />
    </div>
  );
}

export default App;
