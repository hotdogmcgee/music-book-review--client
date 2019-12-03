import React from "react";
import { Link } from "react-router-dom";
import BookList from "../../Components/BookList/BookList";
import FilterSortBar from "../../Components/FilterSortBar/FilterSortBar";
import { Section } from "../../Components/Utils/Utils";
import { STORE } from "../../store.js";
import "./CategoryPage.css";

export default class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      browseTrue: false,
      listSorted: false,
      sortVal: null
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params);
    this.setState(
      {
        bookList: STORE.bookList
      },
      () => {
        //still need to include instrument filters, put this cb in a separate method

        // const instrument = this.props.match.params.instrument;
        // if (instrument) {
        //   this.handleSortOption(instrument);
        // }
        const type = this.props.match.params.type;
        if (type) {
          this.handleSortOption(type);
        }
      }
    );
  }

  //load list in app and do a cb func?

  //use context to access data
  //take conditional path as prop to determine what to show

  // static defaultProps = {
  //   category: "instrument",
  //   list: []
  // };

  // handleInstrumentCategory = () => {
  //   if (this.props.match.)
  // }

  handleSortOption(sortValue) {
    console.log("sortValue: ", sortValue);

    const list = this.state.bookList ? this.state.bookList : STORE.bookList;

    const sortFunc = function(a, b) {
      var thingA = a[sortValue].toUpperCase();
      var thingB = b[sortValue].toUpperCase();
      if (thingA < thingB) {
        return -1;
      }
      if (thingA > thingB) {
        return 1;
      }

      return 0;
    };

    let newList;

    if (sortValue !== this.state.sortVal) {
      switch (sortValue) {
        case "instrument":
          newList = list.sort(sortFunc);

          break;
        case "author":
          console.log("author");
          newList = list.sort(sortFunc);
          break;
        case "id":
          newList = list.sort((a, b) => {
            return a.id - b.id;
          });
          break;
        case "title":
          newList = list.sort(sortFunc);
          break;
        case "rating":
          newList = list.sort((a, b) => {
            return b.rating - a.rating;
          });
          break;
        default:
          console.log("yo");
      }

      this.setState({
        bookList: newList,
        listSorted: true,
        sortVal: sortValue
      });
    } else if (this.state.listSorted) {
      newList = list.reverse();

      this.setState({
        bookList: newList
      });
    }
  }

  handleFilterOption = filters => {
    //store big list in context
    //is it better to just hide an element based on filter?
    // const list = this.state.bookList ? this.state.bookList : STORE.bookList
    const list = STORE.bookList;

    let newList = list;

    if (!filters.includes("old books")) {
      newList = newList.filter(item => item.published_year <= 2000);
    }

    if (!filters.includes("under 25 dollars")) {
      newList = newList.filter(item => item.cost < 25);
    }
    if (!filters.includes("recent")) {
      newList = newList.filter(item => item.published_year > 2000);
    }

    this.setState({
      bookList: newList
    });
  };

  render() {
    return (
      <>
        <Section>
          <Link to="/">Music Book Review</Link>
        </Section>

        <FilterSortBar
          onSortOptionClick={this.handleSortOption}
          onFilterOptionClick={this.handleFilterOption}
        />

        <BookList bookList={this.state.bookList} />
      </>
    );
  }
}
