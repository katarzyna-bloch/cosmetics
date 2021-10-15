import { FETCH_TOP_PRODUCTS_SUCCESS } from '../actions'

const initialState = []

const topProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_PRODUCTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default topProducts
 