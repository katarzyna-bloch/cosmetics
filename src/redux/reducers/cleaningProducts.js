import { FETCH_CLEANING_PRODUCTS_SUCCESS } from '../actions'

const initialState = []

const cleaningProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLEANING_PRODUCTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default cleaningProducts
