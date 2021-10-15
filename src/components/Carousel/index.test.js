import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Carousel from '.'

jest.mock('react-slick', () => {
  const Slider = () => 'Slider'
  return Slider
})

it('should render correctly', () => {
  const Banner = ({ name }) => <div>Banner: {name}</div>
  const items = [
    <Banner name="Banner 1" />,
    <Banner name="Banner 2" />,
    <Banner name="Banner 3" />,
  ]
  
  const props = {
    settings: {},
    items,
  }
  const wrapped = shallow(<Carousel {...props}/>)
  expect(toJson(wrapped)).toMatchSnapshot()
})
