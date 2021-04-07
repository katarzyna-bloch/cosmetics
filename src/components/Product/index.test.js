import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from '.'

it('should render correctly', () => {
  const props = {
    brand: 'Nivea',
    name: 'Test product!',
    img: 'img.jpg',
    price: '15 zł',
    volume: '15 ml',
    description: 'Opis produktu',
    oldPrice: '50 zł',
    hasDiscount: true,
  }
  const wrapped = shallow(<Product {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
