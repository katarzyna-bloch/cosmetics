import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductList from '.'

it('should render correctly', () => {
  const props = {
    products: ['Test', 'img']
    }
  const wrapped = shallow(<ProductList {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
