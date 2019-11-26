import React from "react";
import { Link } from "react-router-dom";
import BookList from "../../Components/BookList/BookList";
import FilterSortBar from '../../Components/FilterSortBar/FilterSortBar'
import { Section } from "../../Components/Utils/Utils";
import {STORE} from '../../store.js'
import "./CategoryPage.css";

export default class CategoryPage extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        bookList: []
      }
this.handleSortOption = this.handleSortOption.bind(this)
      
  }

  componentDidMount() {
    this.setState({
      bookList: STORE.bookList
    })
  }

  //use context to access data
  //take conditional path as prop to determine what to show

  // static defaultProps = {
  //   category: "instrument",
  //   list: []
  // };


  handleSortOption(sortValue) {
    const list = this.state.bookList

    let newList;
    switch (sortValue) {
      case "id":
        newList = list.sort((a, b) => {
          return a.id - b.id;
        });
        break
      case "title":
        console.log('title sort');
          newList = list.sort(function(a, b) {
            var titleA = a.title.toUpperCase(); // ignore upper and lowercase
            var titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
          
            // titles must be equal
            return 0;
          })
          break
      default: 
      console.log('yo');
  }

    this.setState({
      bookList: newList
    })
}

  render() {
    return (
      <>
        <Section>
          <Link to="/">Music Book Review</Link>
        </Section>

          <FilterSortBar onSortOptionClick={this.handleSortOption}/>

        <BookList bookList={this.state.bookList} />
      </>
    );
  }
}
