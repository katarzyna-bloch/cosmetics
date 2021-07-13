import { FETCH_CATEGORY_SUCCESS } from '../actions'

const initialState = null

const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default category
