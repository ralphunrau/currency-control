import './styles/Header.scss';
import Button from './Button';
import Logo from '../Logo.png';

function Header(props) {

  return (
    <div className='Header'>
      <section className='header-left'>
        <img src={Logo} alt='logo' />
        <h1>Currency Control</h1>
      </section>
      <section className='header-right'>
        <Button text='Login' setUserForm={props.setUserForm}/>
        <Button text='Signup' setUserForm={props.setUserForm}/>
      </section>
    </div>
  )
}

export default Header;