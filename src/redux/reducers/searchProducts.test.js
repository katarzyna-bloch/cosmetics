import searchProducts from './searchProducts'
import { FETCH_SEARCH_SUCCESS } from '../actions/searchProducts'

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
  
  const initialState = {
    searchProducts: [],
    loading: true,
  }

  const action = {
    type: FETCH_SEARCH_SUCCESS,
    payload: products,
  }

  const expectState = {
    searchProducts: products,
    loading: false, 
  }
     
  expect(searchProducts(initialState, action)).toEqual(expectState)
})
