import React from "react";
import NotFoundPage from "./NotFoundPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("NotFoundPage component", () => {
  it("renders a NotFoundPage by default", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
