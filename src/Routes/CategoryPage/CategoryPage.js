import React from "react";
import { Link } from "react-router-dom";
import BookList from "../../Components/BookList/BookList";
import FilterSortBar from "../../Components/FilterSortBar/FilterSortBar";
import { Section } from "../../Components/Utils/Utils";
import BookListContext from "../../Contexts/BookListContext";
import "./CategoryPage.css";
import BooksApiService from "../../services/books-api-service";

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

  static contextType = BookListContext;

  // componentDidMount() {
  //   console.log(this.props.match.params);
  //   this.setState(
  //     {
  //       bookList: this.context.bookList
  //     },
  //     //does it make sense/matter to put these const vars outside of cb function scope?
  //     () => {
  //       const instrument = this.props.match.params.instrument;
  //       if (instrument) {
  //         this.handleFilterInstrument(instrument);
  //       }
  //       const type = this.props.match.params.type;
  //       if (type) {
  //         this.handleSortOption(type);
  //       }
  //     }
  //   );
  // }

  componentDidMount() {
    console.log("mount");
    this.context.clearError();
    BooksApiService.getBooks().then(this.context.setBookList);
    BooksApiService.getBooks().then(this.context.setSavedList)
    .then(() => {
      const instrument = this.props.match.params.instrument;
      if (instrument) {
        this.handleFilterInstrument(instrument);
      }

      // console.log(this.context.browseValue);
      // const type = this.context.browseValue ? this.context.browseValue : this.props.match.params.type
      const type = this.props.match.params.type;
      if (type) {
        this.handleSortOption(type);
      }
    })
    .catch(this.context.setError)
  }




  renderBooks = () => {
    const { bookList = [], browseValue } = this.context;

    // const instrument = this.props.match.params.instrument;
    // if (instrument) {
    //   bookList = this.handleFilterOption(instrument)
    // }

    // if (browseValue) {
    //   this.handleSortType(browseValue)
    // }
    // const instrument = this.props.match.params.instrument;
    // if (instrument) {
    //   return this.handleFilterInstrument(instrument);
    // }

    // // console.log(this.context.browseValue);
    // // const type = this.context.browseValue ? this.context.browseValue : this.props.match.params.type
    // const type = this.props.match.params.type;
    // console.log("type: ", type);
    // if (type) {
    //   this.handleSortOption(type);
    // }
    return <BookList bookList={bookList} />;
  }

  handleSortOption(sortValue) {
  
    let list = this.context.bookList;
    this.setState({ bookList: list });
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
        bookList: newList,
        listSorted: true,
        sortVal: sortValue
      });
    } else if (this.state.listSorted) {
      newList = list.reverse();

      // this.setState({
      //   bookList: newList
      // });

      this.context.setBookList(newList)
    }
  }

  handleFilterInstrument = instrument => {
    const list = this.context.bookList;
    let newList;
    newList = list.filter(item => item.instrument === instrument);
    // this.setState({
    //   bookList: newList
    // });
    this.context.setBookList(newList)
  };

  handleFilterOption = filters => {
    //store big list in context
    //is it better to just hide an element based on filter?
    // const list = this.state.bookList ? this.state.bookList : STORE.bookList
    const list = this.context.bookList;

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
    this.context.setBookList(newList)
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

        {/* changed from state, mess around with this */}
        {/* <BookList bookList={this.state.bookList} /> */}
        {this.renderBooks()}
      </>
    );
  }
}
