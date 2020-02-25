import React from "react";
import ProfilePage from "./ProfilePage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ProfilePage component", () => {
  it("renders a ProfilePage by default", () => {
    const wrapper = shallow(<ProfilePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});