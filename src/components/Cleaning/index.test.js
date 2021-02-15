import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Cleaning from '.'

it('should render correctly', () => {
  let wrapped = shallow(<Cleaning />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
