import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

const Header = () => (
  <header className='Header'>
    <h1 className='Header-title'>
      <Link to='/'>Platzi Conf Merch</Link>
    </h1>
    <div className='Header-checkout'>
      <Link to='/checkout'>
        <i className='fas fa-shopping-basket' />
      </Link>
    </div>
  </header>
)

export default Header
