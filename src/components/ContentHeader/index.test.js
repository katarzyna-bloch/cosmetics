import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContentHeader from '.'

it('should render correctly', () => {
  let wrapped = shallow(<ContentHeader />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
