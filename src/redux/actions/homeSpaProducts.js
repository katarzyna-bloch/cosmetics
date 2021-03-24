import { fetchHomeSpaProducts } from "../../services";
export const FETCH_HOME_SPA_PRODUCTS_SUCCESS = "FETCH_HOME_SPA_PRODUCTS_SUCCESS"

export const requestHomeSpaProducts = () => (dispatch) => {
  return fetchHomeSpaProducts()
    .then((response) => {
      dispatch({
        type: FETCH_HOME_SPA_PRODUCTS_SUCCESS,
        payload: response,
      })
    })
}
