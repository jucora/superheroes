import React from "react";
import { render, cleanup } from "@testing-library/react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { HeroForm } from "../containers/HeroForm";

afterEach(cleanup);

configure({ adapter: new Adapter() });

describe("HeroForm main structure", () => {
  it("should take a snapshot", () => {
    const originalError = console.error;
    console.error = jest.fn();

    const { asFragment } = render(<HeroForm />);
    expect(asFragment(<HeroForm />)).toMatchSnapshot();
    console.error = originalError;
  });
});
