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
  setFilterObject: () => {}
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

  setSearchValue = searchValue => {
    console.log("set search context", searchValue);

    this.setState({ searchValue });
  };

  setInstrumentValue = instrumentValue => {
    this.setState({ instrumentValue });
  };

  setFilterValue = filterValue => {
    this.setState({ filterValue });
  };

  setSortValue = sortValue => {
    this.setState({ sortValue });
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
      setFilterObject: this.setFilterObject
    };
    return (
      <BookListContext.Provider value={value}>
        {this.props.children}
      </BookListContext.Provider>
    );
  }
}
