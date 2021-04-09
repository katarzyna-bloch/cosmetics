import { fetchSale } from '../../services';
export const FETCH_SALE_SUCCESS = 'FETCH_SALE_SUCCESS'

export const requestSale = () => (dispatch) => {
  return fetchSale()
    .then((response)=> {
      dispatch({
        type: FETCH_SALE_SUCCESS,
        payload: response,
      })
    })
}
