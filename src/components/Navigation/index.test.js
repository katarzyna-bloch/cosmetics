import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Navigation from '.'

it('should render correctly', () => {
  const wrapped = shallow(<Navigation />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
