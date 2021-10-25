import category from './category'
import { FETCH_CATEGORY_SUCCESS } from '../actions/category'

it('should handle FETCH_CATEGORY_SUCCESS successfully', () => {
  const categoryData = {
    "id": "3",
    "type": "care",
    "url": "/categories/care",
    "name": "Pielęgnacja",
    "heading": "Należy przestrzegać codziennej pielęgnacji twarzy",
    "products": [
      {
      "brand": "iS Clinical",
      "categoryId": "1",
      "description": "Lekki, bezzapachowy płyn, który łagodnie, usuwa makijaż bez konieczności spłukiwania",
      "id": "19",
      "img": "img.jpg",
      "name": "Lipowy Płyn Micelarny",
      "price": "27 zł",
      "volume": "200 ml",
      }
    ]
  }
  
  const initialState = {
    category: null,
    loading: true,
  }

  const action = {
    type: FETCH_CATEGORY_SUCCESS,
    payload: categoryData,
  }

  const expectedState = {
    category: categoryData,
    loading: false,
  }
  
  expect(category(initialState, action)).toEqual(expectedState)
})
