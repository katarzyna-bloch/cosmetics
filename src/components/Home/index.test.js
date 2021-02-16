import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '.'

it('should render correctly', () => {
  let wrapped = shallow(<Home />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
