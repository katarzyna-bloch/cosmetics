import { FETCH_DASHBOARD_DATA, FETCH_DASHBOARD_DATA_SUCCESS } from '../actions'

const initialState = {
  saleProducts: [],
  topProducts: [],
  banners: [],
  loading: false,
}

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default dashboard
