import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Home } from '.'

jest.mock('react-slick', () => {
  const ProductsSlider = () => 'ProductsSlider'
  return ProductsSlider
})

const testProduct = { 
  brand: "Rimmel",
  categoryId: "3",
  description: "kremowa pomadka",
  hasDiscount: true,
  id: "22",
  img: "pomadka.jpg",
}

const testBanner = {
  id: '3',
  img: 'makeup.jpg',
  url: '/categories/makeup', 
  text: 'Różnorodne rabaty dla Ciebie. Zobacz wybrane produkty w super cenach!',
}

const props = {
  fetchSaleProducts: jest.fn(),
  fetchTopProducts: jest.fn(),
  fetchBanners: jest.fn(),
  saleProducts: [ testProduct ],
  topProducts: [ testProduct ],
  banners: [ testBanner ],
}

it('should get the data correctly', () => {
  const wrapped = mount(<Home {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()

  wrapped.update()
  expect(props.fetchSaleProducts).toHaveBeenCalled()
  expect(props.fetchTopProducts).toHaveBeenCalled()
  expect(props.fetchBanners).toHaveBeenCalled()
})
