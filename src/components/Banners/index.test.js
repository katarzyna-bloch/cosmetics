import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Banners from '.'

jest.mock('../../components/Carousel', () => {
  const Carousel = () => null
  return Carousel
})

const props = {
  banners: [
    { id: '1', img: 'pielegnacja.jpg', url: '/categories/care', text: 'Miks produktów aby zadbać o swoją cere.' },
    { id: '2', img: 'perfumy.jpg', url: '/categories/perfume', text: 'Bestsellery perfum w atrakcyjnych cenach.' },
    { id: '3', img: 'makeup.jpg', url: '/categories/makeup', text: 'Różnorodne rabaty dla Ciebie.' },
  ]
}

it('should render correctly', () => {
  const wrapped = shallow(<Banners {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
