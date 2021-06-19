import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/actionTypes'

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  }
}

export { addToCart, removeFromCart }
