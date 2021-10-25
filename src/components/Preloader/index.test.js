import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Preloader from '.'

it('should render correctly', () => {
  const wrapped = shallow(<Preloader />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
