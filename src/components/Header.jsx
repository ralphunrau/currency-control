import './styles/Header.scss';
import Logo from '../Logo.png'

function Header() {
  return (
    <div className='Header'>
      <img src={Logo} alt='logo' />
      <h1>Currency Control</h1>
    </div>
  )
}

export default Header;