import './headerlg.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useContext} from 'react'
import {BiLogOut} from 'react-icons/bi'
import ReactContext from '../../context/ReactContext'

const HeaderLg = props => {
  const {history} = props
  const {activeTab, setNewTab} = useContext(ReactContext)
  const homeTab = activeTab === 'Home' ? 'green-color' : ''
  const cartTab = activeTab === 'Cart' ? 'green-color' : ''

  const onLogoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container-lg">
      <Link to="/" className="links" onClick={() => setNewTab('Home')}>
        <img
          src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718269995/nxtMart/fkvjpdhfywcpdzngq2le.png"
          alt="website logo"
          className="logo-size"
        />
      </Link>
      <ul className="ul-nav-lg">
        <li className="li-nav-lg">
          <Link to="/" className="links" onClick={() => setNewTab('Home')}>
            <button type="button" className={`nav-btn ${homeTab}`}>
              Home
            </button>
          </Link>
        </li>
        <li className="li-nav-lg">
          <Link to="/cart" className="links" onClick={() => setNewTab('Cart')}>
            <button type="button" className={`nav-btn ${cartTab}`}>
              Cart
            </button>
          </Link>
        </li>
        <li className="li-nav-lg" onClick={onLogoutBtn}>
          <button type="button" className="nav-btn">
            <BiLogOut /> Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(HeaderLg)
