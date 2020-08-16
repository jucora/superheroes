import { HashRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Title from '../components/Title';
import Footer from '../components/Footer';


it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('should contain a Router', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Router).length).toBe(1);
});

it('renders Title component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Title).length).toBe(1);
});

it('renders 3 Route components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Route).length).toBe(3);
});
it('renders Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).length).toBe(1);
});
