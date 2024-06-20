import './home.css'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import HeaderLg from '../HeaderLg'
import CategoryItems from '../CategoryItems'
import Content from '../Content'
import Footer from '../Footer'
import HeaderSm from '../HeaderSm'
import CategorySmItem from '../CategorySmItem'

const constApiStatus = {
  INITIAL: 'INITIAL',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Home = () => {
  const [productsData, setProductData] = useState([])
  const [apiStatus, setApiStatus] = useState(constApiStatus.INITIAL)
  const [categoryId, setCategoryId] = useState('all')

  const onChangeCategoryId = id => {
    setCategoryId(id)
    console.log(id)
  }

  const fetchData = async () => {
    setApiStatus(constApiStatus.IN_PROGRESS)
    const apiUrl =
      'https://run.mocky.io/v3/8177da5e-b2fd-4474-9bb7-457f4099ae4e'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      setProductData(data.categories)
      setApiStatus(constApiStatus.SUCCESS)
    } else {
      setApiStatus(constApiStatus.FAILURE)
      const data = {
        categories: [
          {
            id: 1,
            name: 'Vegetables',
            products: [
              {
                id: 101,
                name: 'Tomato',
                weight: '1kg',
                price: '$2',
                image: 'https://example.com/images/tomato.jpg',
              },
              {
                id: 102,
                name: 'Potato',
                weight: '1kg',
                price: '$1',
                image: 'https://example.com/images/potato.jpg',
              },
              {
                id: 103,
                name: 'Carrot',
                weight: '500g',
                price: '$1.5',
                image: 'https://example.com/images/carrot.jpg',
              },
              {
                id: 104,
                name: 'Broccoli',
                weight: '300g',
                price: '$2.5',
                image: 'https://example.com/images/broccoli.jpg',
              },
              {
                id: 105,
                name: 'Spinach',
                weight: '200g',
                price: '$1',
                image: 'https://example.com/images/spinach.jpg',
              },
              {
                id: 106,
                name: 'Cabbage',
                weight: '1kg',
                price: '$1.2',
                image: 'https://example.com/images/cabbage.jpg',
              },
              {
                id: 107,
                name: 'Cauliflower',
                weight: '1kg',
                price: '$1.8',
                image: 'https://example.com/images/cauliflower.jpg',
              },
              {
                id: 108,
                name: 'Bell Pepper',
                weight: '500g',
                price: '$2',
                image: 'https://example.com/images/bell-pepper.jpg',
              },
              {
                id: 109,
                name: 'Onion',
                weight: '1kg',
                price: '$1',
                image: 'https://example.com/images/onion.jpg',
              },
              {
                id: 110,
                name: 'Garlic',
                weight: '200g',
                price: '$1.5',
                image: 'https://example.com/images/garlic.jpg',
              },
              {
                id: 111,
                name: 'Zucchini',
                weight: '500g',
                price: '$1.8',
                image: 'https://example.com/images/zucchini.jpg',
              },
            ],
          },
          {
            id: 2,
            name: 'Fruits',
            products: [
              {
                id: 201,
                name: 'Apple',
                weight: '1kg',
                price: '$3',
                image: 'https://example.com/images/apple.jpg',
              },
              {
                id: 202,
                name: 'Banana',
                weight: '1kg',
                price: '$1',
                image: 'https://example.com/images/banana.jpg',
              },
              {
                id: 203,
                name: 'Orange',
                weight: '1kg',
                price: '$2.5',
                image: 'https://example.com/images/orange.jpg',
              },
              {
                id: 204,
                name: 'Strawberry',
                weight: '500g',
                price: '$4',
                image: 'https://example.com/images/strawberry.jpg',
              },
              {
                id: 205,
                name: 'Grapes',
                weight: '1kg',
                price: '$3',
                image: 'https://example.com/images/grapes.jpg',
              },
              {
                id: 206,
                name: 'Pineapple',
                weight: '1kg',
                price: '$2',
                image: 'https://example.com/images/pineapple.jpg',
              },
              {
                id: 207,
                name: 'Watermelon',
                weight: '3kg',
                price: '$5',
                image: 'https://example.com/images/watermelon.jpg',
              },
              {
                id: 208,
                name: 'Mango',
                weight: '1kg',
                price: '$4',
                image: 'https://example.com/images/mango.jpg',
              },
              {
                id: 209,
                name: 'Blueberry',
                weight: '200g',
                price: '$3',
                image: 'https://example.com/images/blueberry.jpg',
              },
              {
                id: 210,
                name: 'Peach',
                weight: '1kg',
                price: '$3',
                image: 'https://example.com/images/peach.jpg',
              },
              {
                id: 211,
                name: 'Kiwi',
                weight: '500g',
                price: '$2.5',
                image: 'https://example.com/images/kiwi.jpg',
              },
            ],
          },
          {
            id: 3,
            name: 'Dairy Products',
            products: [
              {
                id: 301,
                name: 'Milk',
                weight: '1L',
                price: '$1.5',
                image: 'https://example.com/images/milk.jpg',
              },
              {
                id: 302,
                name: 'Cheese',
                weight: '500g',
                price: '$5',
                image: 'https://example.com/images/cheese.jpg',
              },
              {
                id: 303,
                name: 'Yogurt',
                weight: '1kg',
                price: '$3',
                image: 'https://example.com/images/yogurt.jpg',
              },
              {
                id: 304,
                name: 'Butter',
                weight: '200g',
                price: '$2',
                image: 'https://example.com/images/butter.jpg',
              },
              {
                id: 305,
                name: 'Cream',
                weight: '250g',
                price: '$2.5',
                image: 'https://example.com/images/cream.jpg',
              },
              {
                id: 306,
                name: 'Cottage Cheese',
                weight: '500g',
                price: '$3.5',
                image: 'https://example.com/images/cottage-cheese.jpg',
              },
              {
                id: 307,
                name: 'Ice Cream',
                weight: '1L',
                price: '$4',
                image: 'https://example.com/images/ice-cream.jpg',
              },
              {
                id: 308,
                name: 'Sour Cream',
                weight: '250g',
                price: '$1.8',
                image: 'https://example.com/images/sour-cream.jpg',
              },
              {
                id: 309,
                name: 'Whipping Cream',
                weight: '500g',
                price: '$3',
                image: 'https://example.com/images/whipping-cream.jpg',
              },
              {
                id: 310,
                name: 'Ghee',
                weight: '500g',
                price: '$5',
                image: 'https://example.com/images/ghee.jpg',
              },
              {
                id: 311,
                name: 'Paneer',
                weight: '500g',
                price: '$4',
                image: 'https://example.com/images/paneer.jpg',
              },
            ],
          },
          {
            id: 4,
            name: 'Beverages',
            products: [
              {
                id: 401,
                name: 'Cola',
                weight: '1.5L',
                price: '$1.5',
                image: 'https://example.com/images/cola.jpg',
              },
              {
                id: 402,
                name: 'Orange Juice',
                weight: '1L',
                price: '$2.5',
                image: 'https://example.com/images/orange-juice.jpg',
              },
              {
                id: 403,
                name: 'Apple Juice',
                weight: '1L',
                price: '$2.5',
                image: 'https://example.com/images/apple-juice.jpg',
              },
              {
                id: 404,
                name: 'Lemonade',
                weight: '1.5L',
                price: '$2',
                image: 'https://example.com/images/lemonade.jpg',
              },
              {
                id: 405,
                name: 'Green Tea',
                weight: '500ml',
                price: '$2',
                image: 'https://example.com/images/green-tea.jpg',
              },
              {
                id: 406,
                name: 'Coffee',
                weight: '250g',
                price: '$4',
                image: 'https://example.com/images/coffee.jpg',
              },
              {
                id: 407,
                name: 'Black Tea',
                weight: '500ml',
                price: '$1.5',
                image: 'https://example.com/images/black-tea.jpg',
              },
              {
                id: 408,
                name: 'Energy Drink',
                weight: '500ml',
                price: '$3',
                image: 'https://example.com/images/energy-drink.jpg',
              },
              {
                id: 409,
                name: 'Mineral Water',
                weight: '1L',
                price: '$1',
                image: 'https://example.com/images/mineral-water.jpg',
              },
              {
                id: 410,
                name: 'Smoothie',
                weight: '500ml',
                price: '$2.5',
                image: 'https://example.com/images/smoothie.jpg',
              },
              {
                id: 411,
                name: 'Milkshake',
                weight: '500ml',
                price: '$3',
                image: 'https://example.com/images/milkshake.jpg',
              },
            ],
          },
          {
            id: 5,
            name: 'Snacks',
            products: [
              {
                id: 501,
                name: 'Chips',
                weight: '200g',
                price: '$2',
                image: 'https://example.com/images/chips.jpg',
              },
              {
                id: 502,
                name: 'Cookies',
                weight: '300g',
                price: '$3',
                image: 'https://example.com/images/cookies.jpg',
              },
              {
                id: 503,
                name: 'Chocolate',
                weight: '100g',
                price: '$2.5',
                image: 'https://example.com/images/chocolate.jpg',
              },
              {
                id: 504,
                name: 'Popcorn',
                weight: '200g',
                price: '$1.5',
                image: 'https://example.com/images/popcorn.jpg',
              },
              {
                id: 505,
                name: 'Nuts',
                weight: '250g',
                price: '$5',
                image: 'https://example.com/images/nuts.jpg',
              },
              {
                id: 506,
                name: 'Pretzels',
                weight: '300g',
                price: '$3',
                image: 'https://example.com/images/pretzels.jpg',
              },
              {
                id: 507,
                name: 'Granola Bar',
                weight: '50g',
                price: '$1',
                image: 'https://example.com/images/granola-bar.jpg',
              },
              {
                id: 508,
                name: 'Crackers',
                weight: '200g',
                price: '$2',
                image: 'https://example.com/images/crackers.jpg',
              },
              {
                id: 509,
                name: 'Candy',
                weight: '100g',
                price: '$1.5',
                image: 'https://example.com/images/candy.jpg',
              },
              {
                id: 510,
                name: 'Trail Mix',
                weight: '300g',
                price: '$4',
                image: 'https://example.com/images/trail-mix.jpg',
              },
              {
                id: 511,
                name: 'Beef Jerky',
                weight: '200g',
                price: '$6',
                image: 'https://example.com/images/beef-jerky.jpg',
              },
            ],
          },
          {
            id: 6,
            name: 'Bakery',
            products: [
              {
                id: 601,
                name: 'Bread',
                weight: '500g',
                price: '$2',
                image: 'https://example.com/images/bread.jpg',
              },
              {
                id: 602,
                name: 'Bagel',
                weight: '100g',
                price: '$1',
                image: 'https://example.com/images/bagel.jpg',
              },
              {
                id: 603,
                name: 'Croissant',
                weight: '80g',
                price: '$1.5',
                image: 'https://example.com/images/croissant.jpg',
              },
              {
                id: 604,
                name: 'Muffin',
                weight: '100g',
                price: '$2',
                image: 'https://example.com/images/muffin.jpg',
              },
              {
                id: 605,
                name: 'Donut',
                weight: '50g',
                price: '$1',
                image: 'https://example.com/images/donut.jpg',
              },
              {
                id: 606,
                name: 'Cake',
                weight: '500g',
                price: '$8',
                image: 'https://example.com/images/cake.jpg',
              },
              {
                id: 607,
                name: 'Pie',
                weight: '500g',
                price: '$6',
                image: 'https://example.com/images/pie.jpg',
              },
              {
                id: 608,
                name: 'Pastry',
                weight: '150g',
                price: '$2',
                image: 'https://example.com/images/pastry.jpg',
              },
              {
                id: 609,
                name: 'Baguette',
                weight: '250g',
                price: '$1.5',
                image: 'https://example.com/images/baguette.jpg',
              },
              {
                id: 610,
                name: 'Biscuit',
                weight: '100g',
                price: '$1',
                image: 'https://example.com/images/biscuit.jpg',
              },
              {
                id: 611,
                name: 'Tart',
                weight: '200g',
                price: '$3',
                image: 'https://example.com/images/tart.jpg',
              },
            ],
          },
        ],
      }
      setProductData(data.categories)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#263868" height={50} width={50} />
    </div>
  )
  const onRetryBtn = () => {
    fetchData()
    console.log('hhhh')
  }

  const renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718269991/nxtMart/eutnohgrrguctkbjqecr.png"
        alt="failure view"
        className="failure-img"
      />
      <h2 className="failure-head">Oops! Something went wrong.</h2>
      <p className="failure-para">We are having some trouble.</p>
      <button type="button" onClick={onRetryBtn} className="failure-btn">
        Retry
      </button>
    </div>
  )

  const renderSuccess = () => (
    <>
      <CategorySmItem
        onChangeCategoryId={onChangeCategoryId}
        categoryId={categoryId}
        productitems={productsData}
        className="fixed-top"
      />
      <div className="items">
        <CategoryItems
          onChangeCategoryId={onChangeCategoryId}
          categoryId={categoryId}
          productitems={productsData}
        />
        <Content productDetails={productsData} />
      </div>
      <Footer />
    </>
  )

  const renderSwitchOperation = () => {
    switch (apiStatus) {
      case constApiStatus.IN_PROGRESS:
        return renderLoading()
      case constApiStatus.SUCCESS:
        return renderSuccess()
      case constApiStatus.FAILURE:
        return renderFailure()
      default:
        return null
    }
  }

  return (
    <div className="home-container1">
      <HeaderLg />
      {renderSwitchOperation()}
      <HeaderSm />
    </div>
  )
}

export default Home
