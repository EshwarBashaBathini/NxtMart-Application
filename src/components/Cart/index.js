import './cart.css'
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import CartListView from '../CartListView'
import ReactContext from '../../context/ReactContext'
import Footer from '../Footer'
import Header from '../Header'

const Cart = () => {
  const {cartList, setCartList, setNewTab} = useContext(ReactContext)
  const history = useHistory()

  const onReturnHome = () => {
    setNewTab('Home')
    setCartList([])
    history.push('/')
  }

  const renderSuccess = () => (
    <>
      <div className="cart-content-container">
        <h1 className="cart-heading">Items</h1>

        <CartListView />
      </div>

      <Footer />
    </>
  )

  const renderEmptyCart = () => (
    <>
      <div className="empty-cart">
        <img
          src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718269990/nxtMart/ybmj9lvlw4hayzbwyy6x.png"
          alt="empty cart"
          className="empty-cart-img"
        />
        <h1 className="cart-h1">Your cart is empty</h1>
        <button type="button" onClick={onReturnHome} className="return-home">
          Return to Homepage
        </button>
      </div>

      <Footer />
    </>
  )

  return (
    <div className="home-container1">
      <div className="header-lg">
        <Header />
      </div>

      {cartList.length === 0 ? renderEmptyCart() : renderSuccess()}

      <div className="header-sm">
        <Header />
      </div>
    </div>
  )
}

export default Cart
