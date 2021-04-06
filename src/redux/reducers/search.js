import { FETCH_SEARCH_SUCCESS } from '../actions'

const initialState = []

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default search
