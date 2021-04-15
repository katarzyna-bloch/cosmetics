import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Sale } from '.'

jest.mock('../../components/ProductsList', () => {
  const ProductsList = () => null
  return ProductsList
})

it('should render correctly', () => {
  const props = {
    fetchProducts: jest.fn(),
    products: [
      { 
      name: 'Test',
      img: 'img.jpg',
      id: '1',
      price: '10zł',
      oldPrice: '49zł',
      hasDiscount: true,
      },
    ],
  }
  const wrapped = mount(<Sale {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
  wrapped.update()
  expect(props.fetchProducts).toHaveBeenCalled()
})
