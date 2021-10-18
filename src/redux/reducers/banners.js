import { FETCH_BANNERS_SUCCESS } from '../actions'

const initialState = []

const banners = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANNERS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default banners
