import { combineReducers } from 'redux'
import homeSpaProducts from './homeSpaProducts'
import cleaningProducts from './cleaningProducts'
import careProducts from './careProducts'


export default combineReducers({
  homeSpaProducts,
  cleaningProducts,
  careProducts,
})
