import { fetchCategory } from '../../services'

export const FETCH_CATEGORY_DATA = 'FETCH_CATEGORY_DATA'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'

export const requestCategory = (url) => (dispatch) => {
  dispatch({
    type: FETCH_CATEGORY_DATA,
  })
  return fetchCategory(url)
    .then((response)=> {
      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: response,
      })
    })
}
