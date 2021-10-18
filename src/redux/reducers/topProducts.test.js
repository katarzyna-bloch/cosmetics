import topProducts from './topProducts'
import { FETCH_TOP_PRODUCTS_SUCCESS } from '../actions/topProducts'

it('should handle FETCH_TOP_PRODUCTS_SUCCESS successfully', () => {
  const products = [
    { 
      "brand": "Eigshow",
      "categoryId": "3",
      "description": "Poznaj jedyny w swoim rodzaju zestaw pędzli do blendowania.",
      "id": "23",
      "img": "pędzle.jpg",
      "name": "Zestaw pędzli z etui",
      "price": "73 zł",
      "rate": 8,
      "volume": "120 ml",
    },
    {  
      "brand": "MYRIAMK",
      "categoryId": "2",
      "description": "Kompozycję Argan mood otwiera smakowita świeżość dzikich truskawek.",
      "id": "13",
      "img": "perfum6.jpg",
      "name": "Argan mood",
      "price": "78 zł",
      "rate": 9,
      "volume": "50 ml",
    },
  ]
  const action = {
    type: FETCH_TOP_PRODUCTS_SUCCESS,
    payload: products,
  }
  expect(topProducts([], action)).toEqual(products)
})
