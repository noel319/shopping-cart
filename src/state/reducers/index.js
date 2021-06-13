import isCartOpen from './isCartOpen'
import products from './products'
import cart from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isCartOpen,
  products,
  cart
})

export default rootReducer