import { fetchDashboardData } from '../../services'

export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA'
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS'

export const requestDashboardData = () => (dispatch) => {
  dispatch({
    type: FETCH_DASHBOARD_DATA,
  })
  return fetchDashboardData()
    .then((response)=> {
      dispatch({
        type: FETCH_DASHBOARD_DATA_SUCCESS,
        payload: response,
      })
    })
}
