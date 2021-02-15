import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Care from '.'

it('should render correctly', () => {
  let wrapped = shallow(<Care />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
