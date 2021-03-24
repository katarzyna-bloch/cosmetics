import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Main from "."

it("should render correctly", () => {
  const wrapped = shallow(<Main />)
  expect(toJson(wrapped)).toMatchSnapshot()
})
