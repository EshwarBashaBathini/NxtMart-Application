import './cartsummary.css'
import {useContext} from 'react'
import ReactContext from '../../context/ReactContext'

const CartSummary = props => {
  const {toggleCheckout} = props
  const {cartList} = useContext(ReactContext)

  const renderPrice = () => {
    const totalAmount = cartList.reduce(
      (acc, item) => acc + item.price.slice(1) * item.quantity,
      0,
    )
    return totalAmount
  }

  const onCheckOut = () => {
    toggleCheckout()
  }

  return (
    <div className="summary-div">
      <p className="summaary-p">
        Total ({cartList.length} {cartList.length > 1 ? 'items' : 'item'}) : $
        <span data-testid="total-price">{renderPrice()}</span>
      </p>

      <button type="button" onClick={onCheckOut} className="checkout">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
