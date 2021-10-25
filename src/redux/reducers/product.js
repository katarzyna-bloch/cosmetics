import { FETCH_PRODUCT_DATA, FETCH_PRODUCT_SUCCESS } from '../actions'

 const initialState = {
  product: null,
  loading: false,
}

const product = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        loading: false,      
      }
    default:
      return state
  }
}

export default product
