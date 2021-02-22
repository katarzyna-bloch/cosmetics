import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from '.'

it('should render correctly', () => {
  const props = {
    name: 'Test product!',
    img: 'img',
  }
  const wrapped = shallow(<Product {...props}/>)
  expect(toJson(wrapped)).toMatchSnapshot()
})
