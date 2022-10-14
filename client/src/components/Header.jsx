import './styles/Header.scss';
import Button from './Button';
import Logo from '../Logo.png';

function Header() {
  return (
    <div className='Header'>
      <section className='header-left'>
        <img src={Logo} alt='logo' />
        <h1>Currency Control</h1>
      </section>
      <section className='header-right'>
        <Button text='Login'/>
        <Button text='Signup'/>
      </section>
    </div>
  )
}

export default Header;