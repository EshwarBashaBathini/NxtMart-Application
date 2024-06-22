import './cart.css'
import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {IoIosArrowRoundBack} from 'react-icons/io'
import {IoCheckmarkCircleOutline} from 'react-icons/io5'

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
          <IoCheckmarkCircleOutline color="green" size={30} />
          <h1 className="checkout-head">Payment Successful</h1>
          <p className="thank-you">Thank you for ordering</p>
          <p className="thank-you">Your Payment is Sucessfully completed.</p>
          <button className=" btn-return" onClick={onReturnHome} type="button">
            Return to Homepage
          </button>
        </div>
      ) : (
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
