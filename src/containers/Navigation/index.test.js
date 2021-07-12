import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Navigation } from '.'

jest.mock('../../components/Navigation', () => {
  const Nav = () => null
  return Nav
})

it('should render correctly', () => {
  const props = {
    fetchCategories: jest.fn(),
    categories: [
      { id: "1", type: "homeSpa", url: "/categories/home-spa", name: "Domowe SPA", description: "Profesjonalne SPA w domowym zaciszu to relaks dla ciała i duszy" },
      { id: "2", type: "cleaning", url: "/categories/cleaning", name: "Oczyszczanie", description: "Oczyszczanie to podstawowy krok w dojściu do pięknej cery" },
      { id: "3", type: "care", url: "/categories/care", name: "Pielęgnacja", description: "Należy przestrzegać codziennej pielęgnacji twarzy" },
    ]    
  }
  const wrapped = mount(<Navigation {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
  wrapped.update()
  expect(props.fetchCategories).toHaveBeenCalled()
})

it('should render correctly without categories', () => {
  const props = {
    fetchCategories: jest.fn(),
    categories: null,
  }
  const wrapped = shallow(<Navigation {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
