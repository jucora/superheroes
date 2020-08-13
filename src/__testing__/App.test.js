import React from "react";
import Adapter from "enzyme-adapter-react-16";
import App from "../components/App";
import Title from "../components/Title";
import HeroForm from "../containers/HeroForm";
import Footer from "../components/Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  shallow(<App />);
});

it("should contain a Router", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Router).length).toBe(1);
});

it("renders Title component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Title).length).toBe(1);
});

it("renders HeroForm component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(HeroForm).length).toBe(1);
});

it("renders 3 Route components", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Route).length).toBe(3);
});
it("renders Footer component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).length).toBe(1);
});
