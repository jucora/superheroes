/* global React, shallow, render */
import Footer from '../components/Footer';

it('should take a snapshot', () => {
  const wrapper = render(<Footer />);
  expect(wrapper).toMatchSnapshot();
});

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('should have a div', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('div').length).toBe(1);
});

test('the div tag should have a className: footerContainer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('div').prop('className')).toEqual('footerContainer');
});

it('should have a footer tag', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('footer').length).toBe(1);
});

it('should have a <p> tag', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('p').length).toBe(1);
});

test('the <p> tag should contain the text: Julian Belmonte copyright 2020', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('p').text()).toBe('Julian Belmonte copyright 2020');
});
