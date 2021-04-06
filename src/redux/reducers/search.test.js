import search from './search'
import { FETCH_SEARCH_SUCCESS } from '../actions/search'

it('should handle FETCH_SEARCH_SUCCESS successfully', () => {
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
    type: FETCH_SEARCH_SUCCESS,
    payload: products,
  }
  expect(search ([], action)).toEqual(products)
})
