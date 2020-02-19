import React from "react";
import MyReviewsList from "./MyReviewsList";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("MyReviewsList component", () => {
  it("renders a MyReviewsList by default", () => {
    const wrapper = shallow(<MyReviewsList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
