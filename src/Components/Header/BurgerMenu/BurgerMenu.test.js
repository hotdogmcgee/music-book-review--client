import React from "react";
import BurgerMenu from "./BurgerMenu";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("BurgerMenu component", () => {
  it("renders a BurgerMenu by default", () => {
    const wrapper = shallow(<BurgerMenu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
