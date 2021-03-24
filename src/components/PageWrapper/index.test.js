import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import PageWrapper from "."

it("should render correctly", () => {
  const wrapped = shallow(<PageWrapper />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
