import React from "react";
import InstrumentCard from "./InstrumentCard";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("InstrumentCard component", () => {
  it("renders a InstrumentCard by default", () => {
    const wrapper = shallow(<InstrumentCard title="guitar" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
