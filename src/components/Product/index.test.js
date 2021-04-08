import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from '.'

const props = {
  brand: 'Nivea',
  name: 'Test product!',
  img: 'img.jpg',
  price: '15 zł',
  volume: '15 ml',
  description: 'Opis produktu',
}

it('should render correctly', () => {
  const wrapped = shallow(<Product {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})

it('should render correctly with discount', () => {
  const newProps = {
    ...props,
    oldPrice: '50 zł',
    hasDiscount: true,
  }
  const wrapped = shallow(<Product {...newProps} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
