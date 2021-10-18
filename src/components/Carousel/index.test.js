import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Carousel from '.'

jest.mock('react-slick', () => {
  const Slider = () => 'Slider'
  return Slider
})

const Banner = ({ name }) => <div>Banner: {name}</div>

it('should render correctly', () => {
  const items = [
    <Banner name="Banner 1" />,
    <Banner name="Banner 2" />,
    <Banner name="Banner 3" />,
  ]
  const props = {
    settings: {
      dots: true,
    },
    items,
  }
  const wrapped = shallow(<Carousel {...props}/>)
  expect(toJson(wrapped)).toMatchSnapshot()
})

it('should not render dots for more items', () => {
  const banner = <Banner name="Banner" />
  const items = Array(12).fill(banner)
  const props = {
    settings: {
      dots: true,
    },
    items,
  }
  const wrapped = shallow(<Carousel {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})

it('should render correctly with a gap more than zero', () => { 
  const items = [
    <Banner name="Banner 1" />,
    <Banner name="Banner 2" />,
  ]
  const props = {
    settings: {
      gap: 30,
    },
    items,
  }
  const wrapped = shallow(<Carousel {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
