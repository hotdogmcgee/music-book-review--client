import React from "react";
import { Link } from "react-router-dom";
import BookList from "../../Components/BookList/BookList";
import FilterSortBar from '../../Components/FilterSortBar/FilterSortBar'
import { Section } from "../../Components/Utils/Utils";
import {STORE} from '../../store.js'
import "./CategoryPage.css";

export default class CategoryPage extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  //use context to access data
  //take conditional path as prop to determine what to show

  static defaultProps = {
    category: "instrument",
    list: []
  };

  render() {
    return (
      <>
        <Section>
          <Link to="/">Music Book Review</Link>
        </Section>

          <FilterSortBar />

        <BookList list={STORE.bookList} />
      </>
    );
  }
}
