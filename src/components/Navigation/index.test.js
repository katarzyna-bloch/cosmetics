import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Navigation from '.'

it('should render correctly', () => {
  let wrapped = shallow(<Navigation />)
  expect(toJson(wrapped)).toMatchSnapshot()
})