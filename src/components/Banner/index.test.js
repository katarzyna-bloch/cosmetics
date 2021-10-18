import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Banner from '.'

const props = {
  id: '3',
  img: 'makeup.jpg',
  url: '/categories/makeup', 
  text: 'Różnorodne rabaty dla Ciebie. Zobacz wybrane produkty w super cenach!',
}

it('should render correctly', () => {
  const wrapped = shallow(<Banner {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
