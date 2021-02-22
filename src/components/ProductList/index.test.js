import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductList from '.'

it('should render correctly', () => {
  let wrapped = shallow(<ProductList />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
