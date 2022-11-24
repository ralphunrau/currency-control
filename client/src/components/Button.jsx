import './styles/Button.scss';
import axios from 'axios';

function Button (props) {

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.text === 'Logout') {
      axios.post('/user/logout').then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
      props.setUser();
      props.setUserForm('None');
      return;
    }

    props.setUserForm(props.text);
  }

  return (
    <button onClick={handleSubmit}>
      {props.text}
    </button>
  )
}

export default Button;