import './styles/Button.scss';

function Button (props) {

  return (
    <button onClick={() => props.setUserForm(props.text)}>
      {props.text}
    </button>
  )
}

export default Button;