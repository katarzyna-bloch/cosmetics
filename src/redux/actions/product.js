import { fetchProduct } from '../../services'

export const FETCH_PRODUCT_DATA = 'FETCH_PRODUCT_DATA'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'

export const requestProduct = (id) => (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT_DATA,
  })
  return fetchProduct(id)
    .then((response) => {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response,
      })
    })
}
