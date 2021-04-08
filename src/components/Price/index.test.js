import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Price from '.'

const props = {
  price: '15 zł',
}

it('should render correctly', () => {
  const wrapped = shallow(<Price {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})

it('should render correctly with has discount', () => {
  const newProps = {
    ...props,
    oldPrice: '50 zł',
    hasDiscount: true,
  }
  const wrapped = shallow(<Price {...newProps} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
