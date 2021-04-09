import { FETCH_SALE_SUCCESS } from '../actions'

const initialState = []

const sale = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALE_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default sale
