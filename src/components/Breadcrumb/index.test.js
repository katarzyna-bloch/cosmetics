import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Breadcrumb from '.'

const props = {
  values: [
    { label: "Domowe SPA", link: "/categories/home-spa" },
    { label: "Cytrusowy Peeling Enzymatyczny w Żelu" }
  ],
}

it('should render correctly', () => {
  const wrapped = shallow(<Breadcrumb {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
