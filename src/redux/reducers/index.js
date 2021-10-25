import { combineReducers } from 'redux'
import product from './product'
import searchProducts from './searchProducts'
import category from './category'
import saleProducts from './saleProducts'
import categories from './categories'
import dashboard from './dashboard'

export default combineReducers({
  product,
  searchProducts,
  category,
  saleProducts,
  categories,
  dashboard,
})
