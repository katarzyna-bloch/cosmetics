import { FETCH_SEARCH_DATA, FETCH_SEARCH_SUCCESS } from '../actions'

const initialState = {
  searchProducts: [],
  loading: false,
}

const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SEARCH_SUCCESS:
      return {
        searchProducts: action.payload,
        loading: false,      
      }
    default:
      return state
  }
}

export default searchProducts
