import { fetchSearch } from '../../services'

export const FETCH_SEARCH_DATA = 'FETCH_SEARCH_DATA'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'

export const requestSearch = (search) => (dispatch) => {
  dispatch({
    type: FETCH_SEARCH_DATA,
  })
  return fetchSearch(search)
    .then((response)=> {
      dispatch({
        type: FETCH_SEARCH_SUCCESS,
        payload: response,
      })
    })
}
