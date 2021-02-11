import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders correctly', () => {
  let wrapped = shallow(<App />);
  expect(toJson(wrapped)).toMatchSnapshot();
});
