import { fetchCategory } from '../../services'

export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'

export const requestCategory = (url) => (dispatch) => {
  return fetchCategory(url)
    .then((response)=> {
      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: response,
      })
    })
}
