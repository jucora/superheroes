import React from "react";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { HeroCard } from "../containers/HeroCard";

afterEach(cleanup);

configure({ adapter: new Adapter() });

describe("HeroCard main structure", () => {
  const wrapper = shallow(
    <HeroCard
      id={1}
      name={"batman"}
      image={"batman.png"}
      addCurrentHero={() => {}}
      hero={{ name: "batman" }}
      addCurrentOption={() => "appearance"}
    />
  );
  it("should contain 2 divs", () => {
    expect(wrapper.find("div").length).toBe(2);
  });

  it("should contain a h1 tag with prop name as text", () => {
    expect(wrapper.find("h1").text()).toBe("batman");
  });

  it("should contain a img tag", () => {
    expect(wrapper.find("img").length).toBe(1);
  });

  test("img tag should have a src attribute with the image prop value", () => {
    expect(wrapper.find("img").prop("src")).toEqual("batman.png");
  });

  test("img tag should have a WIDTH attribute with value 300", () => {
    expect(wrapper.find("img").prop("width")).toEqual("300");
  });

  test("img tag should have a HEIGHT attribute with value 300", () => {
    expect(wrapper.find("img").prop("height")).toEqual("300");
  });

  test("img tag should have a HEIGHT attribute with value 300", () => {
    expect(wrapper.find("img").prop("height")).toEqual("300");
  });

  test("img tag should have an alt attribute with the name prop value", () => {
    expect(wrapper.find("img").prop("alt")).toEqual("batman");
  });

  it("should contain a hr tag", () => {
    expect(wrapper.find("hr").length).toBe(1);
  });

  it("should contain 3 Links", () => {
    expect(wrapper.find("Link").length).toBe(3);
  });

  test("The first Link contains the 'Appearance' string as value", () => {
    expect(wrapper.find("Link").at(0).text()).toBe("Appearance");
  });

  test("The Second Link contains the 'Biography' string as value", () => {
    expect(wrapper.find("Link").at(1).text()).toBe("Biography");
  });

  test("The third Link contains the 'Powerstats' string as value", () => {
    expect(wrapper.find("Link").at(2).text()).toBe("Powerstats");
  });
});
