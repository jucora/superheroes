import React from "react";
import { render, cleanup } from "@testing-library/react";
import Author from "../components/Author";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<Author />);
  expect(asFragment(<Author />)).toMatchSnapshot();
});
