import homeSpaProducts from './homeSpaProducts'
import { FETCH_HOME_SPA_PRODUCTS_SUCCESS } from '../actions/homeSpaProducts'

it('should handle FETCH_HOME_SPA_PRODUCTS_SUCCESS successfully ', () => {
  const products = [
    { 
      "id": "1",
      "name": "Peeling",
      "img": "peeling.png"
    },
    {  
      "id": "2",
      "name": "Szczotka",
      "img": "szczotka.png"
    },
  ]
  const action = {
    type: FETCH_HOME_SPA_PRODUCTS_SUCCESS,
    payload: products,
  }
  expect(homeSpaProducts([], action)).toEqual(products)
})
