import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductsSlider from '.'

jest.mock('../../components/Carousel', () => {
  const Carousel = () => null
  return Carousel
})

const props = {
  products: [
    {
      brand: "Eigshow",
      categoryId: "3",
      description: "test opisu",
      id: "23",
      img: "pędzle.jpg",
      name: "Zestaw pędzli",
      price: "73 zł",
      rate: 8,
      volume: "120 ml",
    }
  ],
}

it('should render correctly', () => {
  const wrapped = shallow(<ProductsSlider {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
