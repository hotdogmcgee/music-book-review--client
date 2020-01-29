import React from "react";
import { Link } from "react-router-dom";
import BookList from "../../Components/BookList/BookList";
import FilterSortBar from "../../Components/FilterSortBar/FilterSortBar";
import { Section } from "../../Components/Utils/Utils";
import BookListContext from "../../Contexts/BookListContext";
import "./CategoryPage.css";

export default class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      browseTrue: false,
      listSorted: false
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  static contextType = BookListContext;

  componentDidMount() {
    console.log("mount");
  }

  //put filtering here
  renderBooks = () => {
    const {
      bookList = [],
      searchValue = "",
      instrumentValue = "",
      filterValue = "",
      sortValue = "",
      savedList = [],
      filterObject = {}
    } = this.context;

    let currentList = [];
    let newList = [];

    //why is searchValue not updating?  The setSearchValue function works in BookListContext

    console.log("context search value", searchValue);

    if (searchValue !== "") {
      currentList = savedList;
      console.log(currentList);
      newList = currentList.filter(book => {
        const lc = book.title.toLowerCase();
        const filter = searchValue.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = bookList;
    }

    console.log("new list", newList);

    return <BookList bookList={newList} />;
  };

  handleSortOption(sortValue) {
    let list = this.context.bookList;
    console.log(list);

    const instrument = this.props.match.params.instrument;
    if (instrument) {
      this.handleFilterInstrument(instrument);
    }

    const sortFunc = function(a, b) {
      let thingA, thingB;
      if (sortValue === "authors") {
        console.log(a[sortValue][0].last_name);
        thingA = a[sortValue][0].last_name.toUpperCase();
        thingB = b[sortValue][0].last_name.toUpperCase();
      } else {
        thingA = a[sortValue].toUpperCase();
        thingB = b[sortValue].toUpperCase();
      }
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
        case "authors":
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
            return b.avg_rating - a.avg_rating;
          });
          break;
        default:
          console.log("yo");
      }

      this.setState({
        listSorted: true
      });
    } else if (this.state.listSorted) {
      newList = list.reverse();

      // this.setState({
      //   bookList: newList
      // });

      this.context.setBookList(newList);
    }
  }

  handleFilterInstrument = instrument => {
    const list = this.context.bookList;
    let newList;
    newList = list.filter(item => item.instrument === instrument);
    // this.setState({
    //   bookList: newList
    // });
    this.context.setBookList(newList);
  };

  handleFilterOption = filters => {
    //store big list in context
    //is it better to just hide an element based on filter?
    const list = this.context.savedList;
    console.log(list);

    let newList = list;

    const instrument = this.props.match.params.instrument;
    if (instrument) {
      newList = list.filter(item => item.instrument === instrument);
    }

    if (!filters.includes("old books")) {
      newList = newList.filter(item => item.published_year <= 2000);
    }

    if (!filters.includes("under 25 dollars")) {
      newList = newList.filter(item => item.cost < 25);
    }
    if (!filters.includes("recent")) {
      newList = newList.filter(item => item.published_year > 2000);
    }

    // this.setState({
    //   bookList: newList
    // });
    this.context.setBookList(newList);
  };

  render() {
    // const {filterObject} = this.context

    return (
      <>
        <Section>
          <Link to="/">Music Book Review</Link>
        </Section>

        <FilterSortBar
          onSortOptionClick={this.handleSortOption}
          onFilterOptionClick={this.handleFilterOption}
        />

        {/* changed from state, mess around with this */}
        {/* <BookList bookList={this.state.bookList} /> */}
        {this.renderBooks()}
      </>
    );
  }
}
