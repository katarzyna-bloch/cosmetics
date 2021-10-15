import { fetchBanners } from '../../services'

export const FETCH_BANNERS_SUCCESS = 'FETCH_BANNERS_SUCCESS'

export const requestBanners = () => (dispatch) => {
  return fetchBanners()
    .then((response)=> {
      dispatch({
        type: FETCH_BANNERS_SUCCESS,
        payload: response,
      })
    })
}
