import careProducts from './careProducts'
import { FETCH_CARE_PRODUCTS_SUCCESS } from '../actions/careProducts'

it('should handle FETCH_CARE_PRODUCTS_SUCCESS successfully ', () => {
  const products = [
    { 
      "id": "1",
      "name": "Peeling",
      "img": "peeling.png",
      "price": "10zł"
    },
    {  
      "id": "2",
      "name": "Tonik",
      "img": "tonik.png",
      "price": "10zł"
    },
  ]
  const action = {
    type: FETCH_CARE_PRODUCTS_SUCCESS,
    payload: products,
  }
  expect(careProducts([], action)).toEqual(products)
})
