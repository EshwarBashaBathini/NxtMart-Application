import './headerlg.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useContext} from 'react'
import {BiLogOut} from 'react-icons/bi'
import {IoIosHome} from 'react-icons/io'
import {CiShoppingCart} from 'react-icons/ci'
import ReactContext from '../../context/ReactContext'

const Header = props => {
  const {history} = props
  const {activeTab, setNewTab} = useContext(ReactContext)
  const homeTab = activeTab === 'Home' ? 'green-color' : ''
  const cartTab = activeTab === 'Cart' ? 'green-color' : ''

  const onLogoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <header className="header-desktop">
      <nav className="nav-container-lg">
        <Link to="/" className="links" onClick={() => setNewTab('Home')}>
          <img
            src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718269995/nxtMart/fkvjpdhfywcpdzngq2le.png"
            alt="website logo"
            className="logo-size"
          />
        </Link>
        <ul className="ul-nav-lg">
          <li onClick={() => setNewTab('Home')} className="li-nav-lg">
            <Link to="/" className="links">
              <button type="button" className={`btn-header ${homeTab}`}>
                <IoIosHome className="icons-p" size={20} />
                Home
              </button>
            </Link>
          </li>
          <li onClick={() => setNewTab('Cart')} className="li-nav-lg">
            <Link to="/cart" className="links">
              <button type="button" className={`btn-header ${cartTab}`}>
                <CiShoppingCart className="icons-p" size={20} />
                Cart
              </button>
            </Link>
          </li>
          <li className="li-nav-lg" onClick={onLogoutBtn}>
            <button type="button" className="btn-header">
              <BiLogOut />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default withRouter(Header)
