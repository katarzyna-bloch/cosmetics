import saleProducts from './saleProducts'
import { FETCH_SALE_SUCCESS } from '../actions/saleProducts'

it('should handle FETCH_SALE_SUCCESS successfully', () => {
  const products = [
    { 
      "id": "1",
      "name": "Peeling",
      "img": "peeling.png",
      "price": "17 zł",
      "oldPrice": "32 zł",
      "hasDiscount": true,
    },
    {  
      "id": "2",
      "name": "Tonik",
      "img": "tonik.png",
      "price": "58 zł",
      "oldPrice": "83 zł",
      "hasDiscount": true,
    },
  ]
  const initialState = {
    saleProducts: [],
    loading: true,
  }

  const action = {
    type: FETCH_SALE_SUCCESS,
    payload: products,
  }

  const expectState = {
    saleProducts: products,
    loading: false, 
  }

  expect(saleProducts(initialState, action)).toEqual(expectState)
})
