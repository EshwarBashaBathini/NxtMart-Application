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
    <header className="nav-container-lg">
      <Link to="/" className="links">
        <img
          src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718269995/nxtMart/fkvjpdhfywcpdzngq2le.png"
          alt="website logo"
          className="logo-size"
        />
      </Link>
      <ul className="ul-nav-lg">
        <li onClick={() => setNewTab('Home')} className="li-nav-lg">
          <Link to="/" className={`links ${homeTab}`}>
            <h1 className="header-route-p">Home</h1>
          </Link>
        </li>
        <li
          type="button"
          onClick={() => setNewTab('Cart')}
          className="li-nav-lg"
        >
          <Link to="/cart" className={`links ${cartTab}`}>
            <h1 className="header-route-p">Cart</h1>
          </Link>
        </li>
        <li className="li-nav-lg" onClick={onLogoutBtn}>
          <button type="button" className="nav-btn">
            <BiLogOut />
            Logout
          </button>
        </li>
      </ul>
    </header>
  )
}

export default withRouter(HeaderLg)
