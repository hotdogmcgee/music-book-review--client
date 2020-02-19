import React from "react";
import LoginModal from "./LoginModal";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("LoginModal component", () => {
  it("renders a LoginModal by default", () => {
    const wrapper = shallow(<LoginModal />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
