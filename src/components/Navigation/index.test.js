import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Navigation } from '.'

jest.mock('react-router-dom', () => ({ Link: () => 'Link' }))

const props = {
  categories: [
    { id: "1", type: "care", url: "/categories/care", name: "Pielęgnacja", description: "Należy przestrzegać codziennej pielęgnacji twarzy" },
    { id: "2", type: "perfume", url: "/categories/perfume", name: "Perfumy", description: "Prfumy w których się zakochasz" },
    { id: "3", type: "makeup", url: "/categories/makeup", name: "Makijaż", description: "Te kosmetyki odmienią twoje spojrzenie" },
  ],
  history: {
    push: jest.fn(),
  },
}

it('should render correctly', () => {
  const wrapped = shallow(<Navigation {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})

it('should submit form correctly', () => {
  const wrapped = mount(<Navigation {...props} />)

  const input = wrapped.find('input')
  input.simulate('change', { target: { value: 'Hello' } })

  expect(toJson(wrapped)).toMatchSnapshot()

  const form = wrapped.find('form')
  const event = { preventDefault: jest.fn() }
  form.simulate('submit', event)

  expect(event.preventDefault).toHaveBeenCalled()
  expect(props.history.push).toHaveBeenCalledWith('/search?q=Hello')
  expect(toJson(wrapped)).toMatchSnapshot()
})
