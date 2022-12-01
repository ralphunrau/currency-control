import './styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [userForm, setUserForm] = useState('None');
  const [user, setUser] = useState({});
  
  // Keeps user logged in if page refreshes
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('/user/login')
      .then((res) => {
        if (res.data.loggedIn) {
          setUser(res.data.user)
        }
      })
  }, [])

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
