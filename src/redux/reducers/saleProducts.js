import { FETCH_SALE_DATA, FETCH_SALE_SUCCESS } from '../actions'

const initialState = {
  saleProducts: [],
  loading: false,
}

const saleProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALE_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SALE_SUCCESS:
      return {
        saleProducts: action.payload,
        loading: false,      
      }
    default:
      return state
  }
}

export default saleProducts
