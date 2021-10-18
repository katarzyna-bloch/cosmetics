import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

jest.mock('./Routes', () => {
  const Routes = () => null
  return Routes
})

it('renders correctly', () => {
  const wrapped = shallow(<App />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
