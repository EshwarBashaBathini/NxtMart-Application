import './cartitem.css'
import {useContext} from 'react'
import ReactContext from '../../context/ReactContext'

const CartItem = props => {
  const {product} = props
  const {decremantCartItem, incrementCartItem} = useContext(ReactContext)
  const {name, price, weight, image, quantity} = product

  const onIncrement = () => {
    incrementCartItem(product, quantity + 1)
  }
  const onDecrement = () => {
    decremantCartItem(product, quantity - 1)
  }

  return (
    <li className="cart-item" data-testid="cartItem">
      <img className="cart-product-image" src={image} alt={name} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{name}</p>
          <p className="cart-product-brand"> {weight}</p>
          <p>{price}</p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            data-testid="decrement-quantity"
            onClick={onDecrement}
          >
            -
          </button>
          <div data-testid="item-quantity">
            <p className="cart-quantity">{quantity}</p>
          </div>
          <button
            type="button"
            className="quantity-controller-button"
            data-testid="increment-quantity"
            onClick={onIncrement}
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
