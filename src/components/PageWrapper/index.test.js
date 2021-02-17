import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PageWrapper from '.'

it('should render correctly', () => {
  let wrapped = shallow(<PageWrapper />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
