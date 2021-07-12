import { FETCH_CATEGORIES_SUCCESS } from '../actions'

const initialState = []

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default categories
