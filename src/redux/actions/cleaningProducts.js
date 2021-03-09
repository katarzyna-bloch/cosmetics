import { fetchCleaningProducts } from '../../services';
export const FETCH_CLEANING_PRODUCTS_SUCCESS = 'FETCH_CLEANING_PRODUCTS_SUCCESS'

export const requestCleaningProducts = () => dispatch => {
  return fetchCleaningProducts()
    .then(response => {
      dispatch({
        type: FETCH_CLEANING_PRODUCTS_SUCCESS,
        payload: response,
      })
    })
}
