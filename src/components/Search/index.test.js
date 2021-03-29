import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Search from '.'

it('should render correctly', () => {
  const wrapped = shallow(<Search />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
