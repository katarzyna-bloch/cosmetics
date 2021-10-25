import { mount } from 'enzyme'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Search } from '.'

jest.mock('../../components/ProductsList', () => {
  const ProductsList = () => null
  return ProductsList
})

it('should render correctly', () => {
  const props = {
    fetchProducts: jest.fn(),
    searchProducts: [
      { 
        name: 'Test', 
        img: 'img.jpg', 
        id: '1', 
        price: '10zł',
      },
    ],
    location: {
      search: '?q=krem',
    },
    loading: false,
  }
  const wrapped = mount(<Search {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
  wrapped.update()
  expect(props.fetchProducts).toHaveBeenCalled()
})

it('should render correctly without products', () => {
  const props = {
    fetchProducts: jest.fn(),
    searchProducts: [],
    location: {
      search: '?q=krem',
    },
    loading: false,
  }
  const wrapped = shallow(<Search {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
