import { combineReducers } from 'redux'
import product from './product'
import search from './search'
import category from './category'
import sale from './sale'
import categories from './categories'

export default combineReducers({
  product,
  search,
  category,
  sale,
  categories,
})
