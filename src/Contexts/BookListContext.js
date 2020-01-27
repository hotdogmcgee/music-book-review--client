import React from 'react'

const BookListContext = React.createContext({

    bookList: [],
    savedList: [],
    searchValue: '',
    error: null,
    setError: () => {},
    clearError: () => {},
    setBookList: () => {},
    setSavedList: () => {},
    setSearchValue: () => {}
  
})

export default BookListContext

export class BookListProvider extends React.Component {
    state= {
        bookList: [],
        savedList: [],
        searchValue: '',
        error: null
    }

    setBookList = bookList => {

        this.setState({ bookList })
    }

    setSavedList = savedList => {
        this.setState({ savedList });
      }

    setSearchValue = searchValue => {
      let currentList = []
      let searchedList = []

      this.setState({ searchValue })

      if (this.searchValue !== '') {
        currentList = this.state.savedList
        console.log(currentList);
        searchedList = currentList.filter(book => {
          const lc = book.title.toLowerCase()
          const filter = searchValue.toLowerCase()
          return lc.includes(filter)
        })
      } else {
        searchedList = this.state.savedList
      }
      this.setBookList(searchedList)
    }

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
          setSearchValue: this.setSearchValue
        };
        return (
          <BookListContext.Provider value={value}>
            {this.props.children}
          </BookListContext.Provider>
        );
      }
}