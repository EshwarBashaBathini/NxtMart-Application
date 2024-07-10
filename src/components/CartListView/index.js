import {IoIosArrowRoundBack} from 'react-icons/io'
import {useContext, useState} from 'react'
import CartItem from '../CartItem'
import Payment from '../Payment'
import ReactContext from '../../context/ReactContext'
import './index.css'

const CartListView = () => {
  const [isPaymentDone, setPayment] = useState(false)
  const {cartList} = useContext(ReactContext)

  const renderCartListView = () => {
    let total = 0
    cartList.forEach(eachCartItem => {
      total +=
        parseFloat(eachCartItem.price.replace('₹', '')) * eachCartItem.quantity
    })

    const onClickCheckout = () => {
      setPayment(true)
    }

    const onReturnHome = () => {
      // Add navigation logic to return to the home page
    }

    return (
      <>
        {!isPaymentDone && (
          <div className="cart-success">
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
            <div className="cart-container">
              <ul className="cart-ul">
                {cartList.map(item => (
                  <CartItem key={item.id} product={item} />
                ))}
              </ul>
              <div className="cart-summary-container">
                <h1 className="order-total-value">
                  Total ({cartList.length} Items):
                </h1>
                <p data-testid="total-price" className="total-price-p">
                  {total}
                </p>
                <button
                  type="button"
                  className="checkout-button"
                  onClick={onClickCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
        {isPaymentDone && <Payment />}
      </>
    )
  }

  return renderCartListView()
}

export default CartListView
