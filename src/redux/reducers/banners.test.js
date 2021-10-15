import banners from './banners'
import { FETCH_BANNERS_SUCCESS } from '../actions/banners'

it('should handle FETCH_BANNERS_SUCCESS successfully', () => {
  const bannersData = [
    { id: '1', img: 'pielegnacja.jpg', url: '/categories/care', text: 'Miks produktów aby zadbać o swoją cere.' },
    { id: '2', img: 'perfumy.jpg', url: '/categories/perfume', text: 'Bestsellery perfum w atrakcyjnych cenach.' },
    { id: '3', img: 'makeup.jpg', url: '/categories/makeup', text: 'Różnorodne rabaty dla Ciebie.' },
  ]
  const action = {
    type: FETCH_BANNERS_SUCCESS,
    payload: bannersData,
  }
  expect(banners([], action)).toEqual(bannersData)
})
