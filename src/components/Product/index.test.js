import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from '.'

it('should render correctly', () => {
  const wrapped = shallow(<Product />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
