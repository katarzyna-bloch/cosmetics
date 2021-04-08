import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductListItem from '.'

const props = {
  name: 'Test product!',
  img: 'img.jpg',
  price: '15zł',
  id: '1',
}

it('should render correctly', () => {
  const wrapped = shallow(<ProductListItem {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})

it('should render correctly with has discount', () => {
  const newProps = {
    ...props,
    oldPrice: '26 zł',
    hasDiscount: true,
  }
  const wrapped = shallow(<ProductListItem {...newProps} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})