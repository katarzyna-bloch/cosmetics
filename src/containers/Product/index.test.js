import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Product } from '.'

it('should render correctly', () => {
  const props = {
    fetchProducts: jest.fn(),
    product: {
      brand: 'Dove',
      name: 'Test',
      img: 'img.jpg',
      volume: '20ml',
      price: '10zł',
      description: 'Opis produktu',
      },
    match: {
      params: {
        id: '1',
      },
    },
  }
  const wrapped = mount(<Product {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
  expect(props.fetchProducts).toHaveBeenCalled()
})
