import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Category } from '.'

jest.mock('../../components/ProductsList', () => {
  const ProductsList = () => null
  return ProductsList
})

it('should render correctly', () => {
  const props = {
    fetchCategoryByUrl: jest.fn(),
    category: {
      id: '3', 
      type: 'care', 
      url: '/categories/care', 
      name: 'Pielęgnacja', 
      description: 'Należy przestrzegać codziennej pielęgnacji twarzy',
      products: [
        {
        brand: 'iS Clinical',
        categoryId: '3',
        description: 'Lekki, bezzapachowy płyn, który łagodnie, usuwa makijaż bez konieczności spłukiwania.', 
        id: '19',
        img: 'img.jpg',
        name: 'Lipowy Płyn Micelarny',
        price: '27 zł',
        volume: '200 ml',
        }
      ]
    },
    match: {
      url: '/categories/care',
    }
  }
  const wrapped = mount(<Category {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
  wrapped.update()
  expect(props.fetchCategoryByUrl).toHaveBeenCalled()
})
