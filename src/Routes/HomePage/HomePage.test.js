import React from "react";
import HomePage from "./HomePage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("HomePage component", () => {
  it("renders a HomePage by default", () => {
    const context = {
      bookList: [],
      filterObject: {
        searchValue: "",
        browseValue: "",
        instrumentValue: "",
        filterValue: "",
        sortValue: "",
        listSorted: false
      }
    };
    const wrapper = shallow(<HomePage />, { context });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
