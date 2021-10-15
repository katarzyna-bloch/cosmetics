import { combineReducers } from 'redux'
import product from './product'
import search from './search'
import category from './category'
import sale from './sale'
import categories from './categories'
import topProducts from './topProducts'
import banners from './banners'

export default combineReducers({
  product,
  search,
  category,
  sale,
  categories,
  topProducts,
  banners,
})
