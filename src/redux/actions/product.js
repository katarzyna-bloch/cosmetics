import { fetchProduct } from '../../services'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'

export const requestProduct = (id) => (dispatch) => {
  return fetchProduct(id)
    .then((response) => {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response,
      })
    })
}
