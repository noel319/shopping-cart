import { OPEN_CART, CLOSE_CART } from '../../constants/actionTypes'

const INIT_STATE = false

const isCartOpenReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case OPEN_CART:
      return true
    case CLOSE_CART:
      return false
    default:
      return state
  }
}

export default isCartOpenReducer
