import React from "react";
import CategoryPage from "./CategoryPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("CategoryPage component", () => {
  it("renders a CategoryPage by default", () => {
      const context = {  filterObject: {
        searchValue: "",
        browseValue: "",
        instrumentValue: "",
        filterValue: "",
        sortValue: "",
        listSorted: false
      }}
    const wrapper = shallow(<CategoryPage />, { context }) ;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});