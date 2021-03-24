import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import ProductListItem from "."

it("should render correctly", () => {
  const props = {
    name: "Test product!",
    img: "img.jpg",
    price: "15zł",
    id: "1",
  }
  const wrapped = shallow(<ProductListItem {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
