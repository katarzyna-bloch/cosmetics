import { FETCH_CARE_PRODUCTS_SUCCESS } from "../actions"

const initialState = []

const careProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARE_PRODUCTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default careProducts
