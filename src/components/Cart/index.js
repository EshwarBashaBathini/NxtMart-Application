import './cart.css'
import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {CiShoppingCart} from 'react-icons/ci'
import {IoIosArrowRoundBack} from 'react-icons/io'

import ReactContext from '../../context/ReactContext'
import Footer from '../Footer'
import HeaderSm from '../HeaderSm'
import HeaderLg from '../HeaderLg'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'

const Cart = () => {
  const {cartList, setCartList, setNewTab} = useContext(ReactContext)
  const history = useHistory()
  const [isCheckOut, setCheckOut] = useState(false)

  const toggleCheckout = () => {
    setCheckOut(true)
    setCartList([])
  }

  const onReturnHome = () => {
    setNewTab('Home')
    history.push('/')
  }

  const renderSuccess = () => (
    <>
      <div className="cart-success">
        <h1 className="items-head">Items</h1>
        <div className="cart-container">
          <ul className="cart-ul">
            {cartList.map(item => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
          <CartSummary toggleCheckout={toggleCheckout} />
        </div>
      </div>
      <div className="cart-success-sm">
        <div className="checkout-container-sm">
          <button
            type="button"
            aria-label="Return to Home"
            onClick={onReturnHome}
            className="btn-arrow"
          >
            <IoIosArrowRoundBack size={25} />
          </button>
          <h1 className="checkout-heading-sm">Checkout</h1>
        </div>
        <p className="items-cart-sm">Items ({cartList.length})</p>
        <div className="cart-items-sm">
          <ul className="cart-ul ">
            {cartList.map(item => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
          <CartSummary toggleCheckout={toggleCheckout} />
        </div>
      </div>

      <Footer />
    </>
  )

  const renderEmptyCart = () => (
    <>
      {isCheckOut ? (
        <div className="checkout-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            className="cart-empty-img"
            alt="empty cart"
          />
          <h1 className="checkout-head">Payment Successful</h1>
          <p className="thank-you">Thank you for ordering.</p>
          <p className="thank-you">Your Payment is Sucessfully completed.</p>
          <button className=" btn-return" onClick={onReturnHome} type="button">
            Return to Homepage
          </button>
        </div>
      ) : (
        <div className="empty-cart">
          <CiShoppingCart color="green" size={50} />
          <p className="cart-p">Your Cart is Empty</p>
          <button type="button" onClick={onReturnHome} className="return-home">
            Return to Homepage
          </button>
        </div>
      )}
      <Footer />
    </>
  )

  return (
    <div className="home-container1">
      <HeaderLg />
      {cartList.length === 0 ? renderEmptyCart() : renderSuccess()}
      <HeaderSm />
    </div>
  )
}

export default Cart
