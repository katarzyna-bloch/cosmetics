import { FETCH_HOME_SPA_PRODUCTS_SUCCESS } from '../actions'

const initialState = []

const homeSpaProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_SPA_PRODUCTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default homeSpaProducts
