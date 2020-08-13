import React from "react";
import { render, cleanup } from "@testing-library/react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { HeroDetails } from "../containers/HeroDetails";

afterEach(cleanup);

configure({ adapter: new Adapter() });

describe("HeroDetails main structure", () => {
  it("should take a snapshot", () => {
    const originalError = console.error;
    console.error = jest.fn();

    const { asFragment } = render(
      <HeroDetails
        option={"appearance"}
        match={{ params: { id: "0" } }}
        heroResults={[
          {
            id: "5",
            name: "batman",
            image: { url: "batman.png" },
            appearance: {
              gender: "male",
              height: ["5'10", "178 cm"],
              weight: ["170 lb", "77 kg"],
            },
          },
        ]}
      />
    );
    expect(asFragment(<HeroDetails />)).toMatchSnapshot();
    console.error = originalError;
  });
});
