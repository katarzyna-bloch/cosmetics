import product from './product'
import { FETCH_PRODUCT_SUCCESS } from '../actions/product'

it('should handle FETCH_PRODUCT_SUCCESS successfully ', () => {
  const productData = { 
    "brand": "Dove",
    "name": "Peeling",
    "img": "peeling.png",
    "price": "10zł",
    "volume": "15ml",
    "description": "Opis produktu",
  }
  const action = {
    type: FETCH_PRODUCT_SUCCESS,
    payload: productData,
  }
  expect(product(null, action)).toEqual(productData)
})
