import React from "react";
import SuccessIcon from "./SuccessIcon";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("SuccessIcon component", () => {
  it("renders a SuccessIcon by default", () => {
    const wrapper = shallow(<SuccessIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
