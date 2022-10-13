import './styles/Header.scss';
import Button from './Button';
import Logo from '../Logo.png'

function Header() {
  return (
    <div className='Header'>
      <img src={Logo} alt='logo' />
      <h1>Currency Control</h1>
      <Button text='Login'/>
      <Button text='Signup'/>
    </div>
  )
}

export default Header;