import { FETCH_PRODUCT_SUCCESS } from '../actions'

const initialState = null

const product = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default product
