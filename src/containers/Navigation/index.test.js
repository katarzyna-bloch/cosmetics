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
      { id: "1", type: "care", url: "/categories/care", name: "Pielęgnacja", description: "Należy przestrzegać codziennej pielęgnacji twarzy" },
      { id: "2", type: "perfume", url: "/categories/perfume", name: "Perfumy", description: "Prfumy w których się zakochasz" },
      { id: "3", type: "makeup", url: "/categories/makeup", name: "Makijaż", description: "Te kosmetyki odmienią twoje spojrzenie" },
    ],  
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
