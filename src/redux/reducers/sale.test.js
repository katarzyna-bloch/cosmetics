import sale from './sale'
import { FETCH_SALE_SUCCESS } from '../actions/sale'

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
  const action = {
    type: FETCH_SALE_SUCCESS,
    payload: products,
  }
  expect(sale([], action)).toEqual(products)
})
