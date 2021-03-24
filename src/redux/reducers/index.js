import { combineReducers } from 'redux'
import homeSpaProducts from './homeSpaProducts'
import cleaningProducts from './cleaningProducts'
import careProducts from './careProducts'
import product from './product'

export default combineReducers({
  homeSpaProducts,
  cleaningProducts,
  careProducts,
  product,
})
