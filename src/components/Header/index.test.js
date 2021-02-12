import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '.';

it('should render correctly', () => {
  let wrapped = shallow(<Header/>);
  expect(toJson(wrapped)).toMatchSnapshot();
});