import { FETCH_CATEGORY_DATA ,FETCH_CATEGORY_SUCCESS } from '../actions'

const initialState = {
  category: null,
  loading: false,
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CATEGORY_SUCCESS:
      return {
        category: action.payload,
        loading: false,      
      }
    default:
      return state
  }
}

export default category
