import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MakeUpRemoval from '.'

it('should render correctly', () => {
  let wrapped = shallow(<MakeUpRemoval />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
