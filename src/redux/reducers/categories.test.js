import categories from './categories'
import { FETCH_CATEGORIES_SUCCESS } from '../actions/categories'

it('should handle FETCH_CATEGORIES_SUCCESS successfully', () => {
  const categoriesData = [
    {"id": "1", "type": "homeSpa", "url": "/categories/home-spa", "name": "Domowe SPA", "description": "Profesjonalne SPA w domowym zaciszu to relaks dla ciała i duszy"},
    {"id": "2", "type": "cleaning", "url": "/categories/cleaning", "name": "Oczyszczanie", "description": "Oczyszczanie to podstawowy krok w dojściu do pięknej cery"},
    {"id": "3", "type": "care", "url": "/categories/care", "name": "Pielęgnacja", "description": "Należy przestrzegać codziennej pielęgnacji twarzy"},
  ]
  const action = {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categoriesData,
  }
  expect(categories([], action)).toEqual(categoriesData)
})
