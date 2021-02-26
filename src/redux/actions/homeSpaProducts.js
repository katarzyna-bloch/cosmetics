import { fetchHomeSpaProducts as fetchApiProducts } from '../../services';
export const FETCH_HOME_SPA_PRODUCTS_SUCCESS = 'FETCH_HOME_SPA_PRODUCTS_SUCCESS'

export const fetchHomeSpaProducts = () => dispatch => {
  return fetchApiProducts()
    .then(response => {
      dispatch({
        type: FETCH_HOME_SPA_PRODUCTS_SUCCESS,
        payload: response,
      })
    })
}
