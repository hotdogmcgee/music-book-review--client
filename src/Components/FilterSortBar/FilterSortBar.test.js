import React from "react";
import FilterSortBar from "./FilterSortBar.js";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("FilterSortBar component", () => {
  it("renders a FilterSortBar by default", () => {
    const wrapper = shallow(<FilterSortBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
