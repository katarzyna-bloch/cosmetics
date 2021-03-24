import { fetchCareProducts } from '../../services';
export const FETCH_CARE_PRODUCTS_SUCCESS = 'FETCH_CARE_PRODUCTS_SUCCESS'

export const requestCareProducts = () => (dispatch) => {
  return fetchCareProducts()
    .then((response)=> {
      dispatch({
        type: FETCH_CARE_PRODUCTS_SUCCESS,
        payload: response,
      })
    })
}
