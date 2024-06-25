import './headersm.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useContext} from 'react'
import {TbLogout2} from 'react-icons/tb'
import {IoIosHome} from 'react-icons/io'
import {CiShoppingCart} from 'react-icons/ci'
import ReactContext from '../../context/ReactContext'

const HeaderSm = props => {
  const {history} = props
  const {activeTab, setNewTab} = useContext(ReactContext)
  const homeTab = activeTab === 'Home' ? 'green-color1' : ''
  const cartTab = activeTab === 'Cart' ? 'green-color1' : ''

  const onLogoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container-sm fixed-bottom">
      <ul className="ul-nav-sm">
        <li className="li-nav-lg">
          <button
            type="button"
            onClick={() => setNewTab('Home')}
            className="nav-btn-1"
          >
            <Link to="/" className={`links ${homeTab}`}>
              <IoIosHome size={20} color={homeTab} />
              Home
            </Link>
          </button>
        </li>
        <li className="li-nav-lg">
          <button
            type="button"
            onClick={() => setNewTab('Cart')}
            className="nav-btn-1"
          >
            <Link to="/cart" className={`links ${cartTab}`}>
              <CiShoppingCart size={20} />
              Cart
            </Link>
          </button>
        </li>
        <li className="li-nav-lg" onClick={onLogoutBtn}>
          <button type="button" className="nav-btn-1">
            <TbLogout2 size={20} /> Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(HeaderSm)
