import { fetchSearch } from '../../services'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'

export const requestSearch = (search) => (dispatch) => {
  return fetchSearch(search)
    .then((response)=> {
      dispatch({
        type: FETCH_SEARCH_SUCCESS,
        payload: response,
      })
    })
}
