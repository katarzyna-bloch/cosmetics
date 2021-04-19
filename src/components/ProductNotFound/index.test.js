import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductNotFound from '.'

it('should render correctly', () => {
  const wrapped = shallow(<ProductNotFound />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
