import cleaningProducts from './cleaningProducts'
import { FETCH_CLEANING_PRODUCTS_SUCCESS } from '../actions/cleaningProducts'

it('should handle FETCH_CLEANING_PRODUCTS_SUCCESS successfully ', () => {
  const products = [
    { 
      "id": "1",
      "name": "Peeling",
      "img": "peeling.png",
      "price": "10zł",
    },
    {  
      "id": "2",
      "name": "Tonik",
      "img": "tonik.png",
      "price": "10zł",
    },
  ]
  const action = {
    type: FETCH_CLEANING_PRODUCTS_SUCCESS,
    payload: products,
  }
  expect(cleaningProducts([], action)).toEqual(products)
})
