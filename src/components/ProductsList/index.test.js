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
        oldPrice: '79 zł',
        hasDiscount: true,
      },
    ],
  }
  const wrapped = shallow(<ProductsList {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
