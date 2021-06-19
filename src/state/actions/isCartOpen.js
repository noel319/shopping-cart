import { OPEN_CART, CLOSE_CART } from '../../constants/actionTypes'

const openCart = () => {
  return {
    type: OPEN_CART,
  }
}

const closeCart = () => {
  return {
    type: CLOSE_CART,
  }
}

export { openCart, closeCart }
