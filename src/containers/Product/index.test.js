import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Product } from '.'

jest.mock('react-router-dom', () => ({ Link: () => 'Link' }))
jest.mock('../../components/Product', () => {
  const Product = () => null
  return Product
})
jest.mock('../../components/Breadcrumb', () => {
  const Breadcrumb = () => null
  return Breadcrumb
})

it('should render correctly', () => {
  const props = {
    fetchProducts: jest.fn(),
    product: {
      id: "7",
      brand: "mokosh",
      name: "Bambusowa Szczotka do Masażu na Sucho",
      volume: "1 szt.",
      price: "19 zł",
      categoryId: "1",
      img: "https://www.topestetic.pl/img/",
      description: "Opis produktu",
      category: {
        id: "1",
        type: "care",
        url: "/categories/care",
        name: "Pielęgnacja",
        description: "Profesjonalne SPA w domowym zaciszu",
      },
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
