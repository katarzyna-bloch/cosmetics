import { fetchTopProducts } from '../../services'
export const FETCH_TOP_PRODUCTS_SUCCESS = 'FETCH_TOP_PRODUCTS_SUCCESS'

export const requestTopProducts = () => (dispatch) => {
  return fetchTopProducts()
    .then((response) => {
      dispatch({
        type: FETCH_TOP_PRODUCTS_SUCCESS,
        payload: response,
      })
    })
}
