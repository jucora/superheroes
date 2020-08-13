import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Author from '../components/Author';

afterEach(cleanup);

configure({ adapter: new Adapter() });
it('should take a snapshot', () => {
  const { asFragment } = render(<Author />);
  expect(asFragment(<Author />)).toMatchSnapshot();
});

it('should contain a div with className author', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('div.author').length).toBe(1);
});

it('should contain a h1', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('h1').length).toBe(1);
});

it('should contain the text: JULIAN BELMONTE inside the h1 tag', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('h1').text()).toBe('JULIAN BELMONTE');
});

it('should contain an img tag', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('img').length).toBe(1);
});

test('the img tag should contain an alt attribute with the value: Author', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('img').prop('alt')).toEqual('Author');
});

test('the img tag should contain a src attribute', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('img').prop('src')).toBeTruthy();
});

it('should contain a div with a className portfolioLink', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('div.portfolioLink')).toBeTruthy();
});

it('should contain an <a> tag to link to Author portfolio page', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('a').length).toBe(1);
});
test('The <a> tag should contain a href', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('a').prop('href')).toBe('https://jucora.github.io/');
});
test('The <a> tag should contain a target _blank', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('a').prop('target')).toBe('_blank');
});

test('The <a> tag should contain a rel attribute with value: noopener noreferrer', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('a').prop('rel')).toBe('noopener noreferrer');
});

it('should contain a h2', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('h2').length).toBe(1);
});

test('The test inside h2 tag should be: Please visit my portfolio', () => {
  const wrapper = shallow(<Author />);
  expect(wrapper.find('h2').text()).toBe('Please visit my portfolio');
});
