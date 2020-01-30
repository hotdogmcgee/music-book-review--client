import React from "react";

const BookListContext = React.createContext({
  bookList: [],
  savedList: [],
  searchValue: "",
  browseValue: "",
  instrumentValue: "",
  filterValue: "",
  sortValue: "",
  filterObject: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setBookList: () => {},
  setSavedList: () => {},
  setSearchValue: () => {},
  setBrowseValue: () => {},
  setInstrumentValue: () => {},
  setFilterValue: () => {},
  setSortValue: () => {},
  setFilterObject: () => {},
  // setFilterProperty: () => {}
});

export default BookListContext;

export class BookListProvider extends React.Component {
  state = {
    bookList: [],
    savedList: [],
    searchValue: "",
    browseValue: "",
    instrumentValue: "",
    filterValue: "",
    sortValue: "",
    error: null,
    filterObject: {
      searchValue: "",
      browseValue: "",
      instrumentValue: "",
      filterValue: "",
      sortValue: ""
    }
  };

  setBookList = bookList => {
    this.setState({ bookList });
  };

  setSavedList = savedList => {
    this.setState({ savedList });
  };

  //better to do large setState or try to use setFilterObject method?
  setSearchValue = searchValue => {
    this.setState({ filterObject: {
      ...this.state.filterObject,
      searchValue
    } });

    // this.setFilterObject(searchValue)
  };

  setInstrumentValue = instrumentValue => {
    this.setState({ filterObject: {
      ...this.state.filterObject,
      instrumentValue
    } });
  };

  setFilterValue = filterValue => {
    this.setState({ filterObject: {
      ...this.state.filterObject,
      filterValue
    } });
  };

  setSortValue = sortValue => {
    this.setState({ filterObject: {
      ...this.state.filterObject,
      sortValue
    } });
  };

  setFilterObject = (searchValue, instrumentValue, filterValue, sortValue) => {
    this.setState({
      filterObject: {
        searchValue,
        instrumentValue,
        filterValue,
        sortValue
      }
    });
  };

  // setFilterProperty = (property, value) => {
  //   this.setState({ filterObject: {
  //     ...this.state.filterObject,
  //     [property]: value
  //   }})
  // }

  setBrowseValue = browseValue => {
    this.setState({ browseValue });
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      bookList: this.state.bookList,
      savedList: this.state.savedList,
      filterObject: this.state.filterObject,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBookList: this.setBookList,
      setSavedList: this.setSavedList,
      setSearchValue: this.setSearchValue,
      setBrowseValue: this.setBrowseValue,
      setInstrumentValue: this.setInstrumentValue,
      setFilterValue: this.setFilterValue,
      setSortValue: this.setSortValue,
      setFilterObject: this.setFilterObject,
      // setFilterProperty: this.setFilterProperty
    };
    return (
      <BookListContext.Provider value={value}>
        {this.props.children}
      </BookListContext.Provider>
    );
  }
}
