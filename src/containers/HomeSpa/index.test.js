import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import { HomeSpa } from "."

jest.mock("../../components/ProductsList", () => "ProductsList")

it("should render correctly", () => {
  const props = {
    fetchProducts: jest.fn(),
    products: [
      { name: "Test", img: "img.jpg", id: "1", price: "10zł" },
    ],
  }
  const wrapped = mount(<HomeSpa {...props} />)
  expect(toJson(wrapped)).toMatchSnapshot()
  wrapped.update()
  expect(props.fetchProducts).toHaveBeenCalled()
})
