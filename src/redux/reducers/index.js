import { combineReducers } from 'redux'
import homeSpaProducts from './homeSpaProducts'
import cleaningProducts from './cleaningProducts'
import careProducts from './careProducts'
import product from './product'
import search from './search'
import sale from './sale'

export default combineReducers({
  homeSpaProducts,
  cleaningProducts,
  careProducts,
  product,
  search,
  sale,
})
