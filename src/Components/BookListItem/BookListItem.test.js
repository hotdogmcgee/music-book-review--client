import React from "react";
import BookListItem from "./BookListItem.js";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { STORE } from "../../store.js";

describe("BookList component", () => {
  const item = STORE.bookList[0];
  const authors = item.authors;

  it("renders a BookListItem by default", () => {
    const wrapper = shallow(<BookListItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the BookListItem given props", () => {
    const wrapper = shallow(<BookListItem item={item} authors={authors} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
