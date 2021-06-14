import isCartOpenReducer from './isCartOpen'
import productsReducer from './products'
import cartReducer from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  products: productsReducer,
  cart: cartReducer
})

export default rootReducer