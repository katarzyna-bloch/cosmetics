import categories from './categories'
import { FETCH_CATEGORIES_SUCCESS } from '../actions/categories'

it('should handle FETCH_CATEGORIES_SUCCESS successfully', () => {
  const categoriesData = [
    {"id": "1", "type": "care", "url": "/categories/care", "name": "Pielęgnacja", "description": "Aby uzyskać zdrowy wygląd skóry, należy przestrzegać codziennej pielęgnacji twarzy"},
    {"id": "2", "type": "perfume", "url": "/categories/perfume", "name": "Perfumy", "description": "Perfumy w których się zakochasz"},
    {"id": "3", "type": "makeup", "url": "/categories/makeup", "name": "Makijaż", "description": "Kosmetyki, które odmienią twoje spojrzenie"},
  ]
  const action = {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categoriesData,
  }
  expect(categories([], action)).toEqual(categoriesData)
})
