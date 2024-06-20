import './cartitem.css'
import {useContext} from 'react'
import ReactContext from '../../context/ReactContext'

const CartItem = props => {
  const {product} = props
  const {decremantCartItem, incrementCartItem} = useContext(ReactContext)
  const {name, price, weight, quantity} = product
  const images =
    'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'

  const onIncrement = () => {
    incrementCartItem(product, quantity + 1)
  }
  const onDecrement = () => {
    decremantCartItem(product, quantity - 1)
  }

  return (
    <li data-testid="cartItem" className="cart-list">
      <div className="cart-li">
        <div className="cart-details">
          <img src={images} alt={name} className="cart-img" />
          <div className="cart-name-details">
            <p className="cart-name">{name}</p>
            <p className="cart-weight">{weight}</p>
            <p className="cart-price">{price}</p>
          </div>
        </div>
        <div className="cart-btn-container">
          <button
            type="button"
            data-testid="decrement-count"
            onClick={onDecrement}
            className="btn"
          >
            -
          </button>
          <p className="quantity" data-testid="item-quantity">
            {quantity}
          </p>
          <button
            type="button"
            data-testid="increment-count"
            onClick={onIncrement}
            className="btn"
          >
            +
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CartItem