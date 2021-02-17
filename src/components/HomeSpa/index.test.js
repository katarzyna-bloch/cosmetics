import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HomeSpa from '.'

it('should render correctly', () => {
  let wrapped = shallow(<HomeSpa />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
