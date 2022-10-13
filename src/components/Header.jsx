import './styles/Header.scss';
import Logo from '../Logo.png'

function Header() {
  return (
    <div className='Header'>
      <img src={Logo} alt='logo' />
      Currency Control
    </div>
  )
}

export default Header;