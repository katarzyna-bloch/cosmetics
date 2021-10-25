import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Home } from '.'

jest.mock('react-slick', () => {
  const ProductsSlider = () => 'ProductsSlider'
  return ProductsSlider
})

const testProduct = { 
  id: "24",
  rate: 9.3,
  brand: "Xi Xiu",
  name: "Lasting Eyeliner Pencil",
  volume: "125 ml",
  price: "17 zł",
  categoryId: "3",
  img: "eyeliner.jpg",
  description: "Zapewnia możliwość wykonania precyzyjnej kreski",
}

const testBanner = {
  id: '3',
  img: 'makeup.jpg',
  url: '/categories/makeup', 
  text: 'Różnorodne rabaty dla Ciebie. Zobacz wybrane produkty w super cenach!',
}

const props = {
  fetchDashboardData: jest.fn(),
  saleProducts: [ testProduct ],
  topProducts: [ testProduct ],
  banners: [ testBanner ],
  loading: false,
}

it('should get the data correctly', () => {
  const wrapped = mount(<Home {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()

  wrapped.update()
  expect(props.fetchDashboardData).toHaveBeenCalled()
})
