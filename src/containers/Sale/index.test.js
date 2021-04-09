import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Sale from '.'

it('should render correctly', () => {
  const wrapped = shallow(<Sale />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
