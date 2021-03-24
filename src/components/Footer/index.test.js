import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from '.'

it('should render correctly', () => {
  const wrapped = shallow(<Footer />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
