import { fetchCategories } from '../../services'

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

export const requestCategories = () => (dispatch) => {
  return fetchCategories()
    .then((response)=> {
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: response,
      })
    })
}
