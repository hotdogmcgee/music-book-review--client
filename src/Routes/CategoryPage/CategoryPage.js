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
      browseTrue: false
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  componentDidMount() {
    if (!this.state.browseTrue) {
      this.setState({
        bookList: STORE.bookList
      });
    } else {
      console.log("did mount else");

      if (this.props.match.params.type) {
        const sortValue = this.props.match.params.type;
        const sortFunc = function(a, b) {
          console.log(a[sortValue], b[sortValue]);
          var thingA = a[sortValue].toUpperCase(); // ignore upper and lowercase
          var thingB = b[sortValue].toUpperCase(); // ignore upper and lowercase
          if (thingA < thingB) {
            return -1;
          }
          if (thingA > thingB) {
            return 1;
          }

          // titles must be equal
          return 0;
        };

        // this.handleSortOption(category);
        const newList = this.state.bookList.sort(sortFunc);
        this.setState({
          browseTrue: true,
          bookList: newList
        });
      } else return;
    }

    //load list in app and do a cb func?
  }

  //use context to access data
  //take conditional path as prop to determine what to show

  // static defaultProps = {
  //   category: "instrument",
  //   list: []
  // };

  handleSortOption(sortValue) {
    console.log("sortValue: ", sortValue);

    const list = this.state.bookList ? this.state.bookList : STORE.bookList;

    const sortFunc = function(a, b) {
      console.log(a[sortValue], b[sortValue]);
      var thingA = a[sortValue].toUpperCase(); // ignore upper and lowercase
      var thingB = b[sortValue].toUpperCase(); // ignore upper and lowercase
      if (thingA < thingB) {
        return -1;
      }
      if (thingA > thingB) {
        return 1;
      }

      // titles must be equal
      return 0;
    };

    let newList;
    switch (sortValue) {
      case "instrument":
        console.log("instrument sort");
        newList = list.sort(sortFunc);

        break;
      case "id":
        newList = list.sort((a, b) => {
          return a.id - b.id;
        });
        break;
      case "title":
        console.log("title sort");
        newList = list.sort(sortFunc);
        break;
      default:
        console.log("yo");
    }

    this.setState({
      bookList: newList
    });
  }

  // handleFilterOption = (filterValue, applyFilter) => {
  handleFilterOption = (filters) => {
    debugger
    console.log("filters: ", filters);

    // const list = this.state.bookList ? this.state.bookList : STORE.bookList
    const list = STORE.bookList;

    let newList;
    // switch (filterValue, applyFilter) {
    //   case "recent", true:
    //       newList = list.filter(item => item.published_year > 2000)

    //     break;
    //   case "old books":
    //       newList = list.filter(item => item.published_year <= 2000)
    //     ;
    //     break;
    //   case "under 25 dollars":
    //     console.log("under 25 dollars filter");
    //     newList = list.filter(item => item.cost < 25)
    //     break;
    //   default:
    //     console.log("yo");
    // }

    // if (!applyFilter) {

    //     for (let i= 0; i < filters.length; i++) {
    //       list.filter(item => filters[i]
    //     }
    //       )})

    // }

    // if (applyFilter) {
    // for (let i = 0; i < filters.length; i++) {
      // list.filter(item => filters[i]);

      // const filterValue = filters[i]

      if (!filters.includes('old books')) {
        newList = list.filter(item => item.published_year <= 2000);
      } else {
        newList = list
      }
      // switch ((filterValue)) {
      //   case ("recent"):
      //     newList = list.filter(item => item.published_year > 2000);

      //     break;
      //   case "old books":
      //     newList = list.filter(item => item.published_year <= 2000);
      //     break;
      //   case "under 25 dollars":
      //     console.log("under 25 dollars filter");
      //     newList = list.filter(item => item.cost < 25);
      //     break;
      //   default:
      //     console.log("yo");
      // }
    // }


    // console.log(list);
    // newList = list;
    // } else {
    //   return list
    // }

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
