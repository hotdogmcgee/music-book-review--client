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
    const instrument = this.props.match.params.instrument;
    if (instrument) {
      this.context.setInstrumentValue(instrument);
    }
    const type = this.props.match.params.type;
    if (type) {
      this.context.setSortValue(type);
    }
  }

  //put filtering here
  renderBooks = () => {
    console.log('RENDER');
    const { bookList = [], savedList = [], filterObject } = this.context;

    const {
      searchValue,
      browseValue,
      instrumentValue,
      filterValue,
      sortValue
    } = filterObject;

    console.log("filterObject: ", filterObject);

    let currentList = savedList;
    let newList;

    if (instrumentValue !== "") {
      newList = this.handleFilterInstrument(instrumentValue, currentList);

    }
    if (sortValue !== "") {
      newList = this.handleSortOption(sortValue, newList);
    }

    if (searchValue !== "") {
      // currentList = this.context.bookList;
      newList = newList.filter(book => {
        const lc = book.title.toLowerCase();
        const filter = searchValue.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = newList;
    }

    return <BookList bookList={newList} />;
  };

  handleSortOption(sortValue, list) {
    const sortFunc = function(a, b) {
      let thingA, thingB;
      if (sortValue === "authors") {
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

    if (sortValue) {
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

      debugger;

      // this.setState({
      //   listSorted: true
      // });
    }
    //put reverse function back in
    //  else if (this.state.listSorted) {
    //   newList = list.reverse();

    // }
    return newList;
  }

  handleFilterInstrument(instrument, list) {
    let newList;
    newList = list.filter(item => item.instrument === instrument);
    return newList;
  };

  handleFilterOption = filters => {
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

    return (
      <>
        <Section>
          <Link to="/">Music Book Review</Link>
        </Section>

        <FilterSortBar
          // onSortOptionClick={this.handleSortOption}
          onFilterOptionClick={this.handleFilterOption}
        />
        {this.renderBooks()}
      </>
    );
  }
}
