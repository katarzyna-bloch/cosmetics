import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from '.'

it('should render correctly', () => {
  let wrapped = shallow(<Footer />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
