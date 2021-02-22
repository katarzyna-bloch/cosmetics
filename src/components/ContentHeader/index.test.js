import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContentHeader from '.'

it('should render correctly', () => {
  const wrapped = shallow(<ContentHeader />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
