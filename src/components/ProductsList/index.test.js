import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductsList from '.'

it('should render correctly', () => {
  const props = {
    products: [
      { name: 'Test', 
        img: 'img.jpg', 
        id: '1', 
        price: '50zł',
      },
    ],
  }
  const wrapped = shallow(<ProductsList {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
