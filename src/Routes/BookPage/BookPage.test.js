import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BookPage from "./BookPage";
import { STORE } from '../../store'

describe.skip(`BookPage component`, () => {
  const item = STORE.bookList[0]

  it("renders a BookPage by default", () => {
    const wrapper = shallow(<BookPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Book given props", () => {
    const wrapper = shallow(<BookPage props={item} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
