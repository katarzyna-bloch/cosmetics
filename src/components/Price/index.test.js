import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Price from '.'

it('should render correctly', () => {
  const props = {
    price: '15 zł',
    oldPrice: '50 zł',
    hasDiscount: true,
  }
  const wrapped = shallow(<Price {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
