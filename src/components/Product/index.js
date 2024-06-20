import './product.css'
import {useState, useContext} from 'react'
import ReactContext from '../../context/ReactContext'

const Product = props => {
  const [quantity, setQuantity] = useState(0)
  const {decremantCartItem, incrementCartItem} = useContext(ReactContext)
  const {details} = props
  const {name, price, weight} = details
  const onDecrement = () => {
    setQuantity(prevqun => prevqun - 1)
    decremantCartItem(details, quantity - 1)
  }
  const onInrement = () => {
    setQuantity(prevqun => prevqun + 1)
    incrementCartItem(details, quantity + 1)
  }
  const images =
    'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'

  return (
    <li className="li-items" data-testid="product">
      <img src={images} alt={name} className="img-size" />
      <div className="product-details">
        <div className="details">
          <p className="name">{name}</p>
          <p className="weight">{weight}</p>
          <p className="price">{price}</p>
        </div>
        {quantity === 0 && (
          <button
            type="button"
            data-testid="add-button"
            onClick={onInrement}
            className="add-btn"
          >
            Add
          </button>
        )}
        {quantity !== 0 && (
          <div className="quantity-container1">
            <button
              type="button"
              data-testid="decrement-count"
              onClick={onDecrement}
              className="btm"
            >
              -
            </button>
            <p className="count1" data-testid="active-count">
              {quantity}
            </p>
            <button
              type="button"
              data-testid="increment-count"
              className="btm"
              onClick={onInrement}
            >
              +
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

export default Product
