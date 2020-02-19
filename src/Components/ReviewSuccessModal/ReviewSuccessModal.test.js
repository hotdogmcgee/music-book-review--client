import React from "react";
import ReviewSuccessModal from "./ReviewSuccessModal";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ReviewSuccessModal component", () => {
  it("renders a ReviewSuccessModal by default", () => {
    const wrapper = shallow(<ReviewSuccessModal />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
