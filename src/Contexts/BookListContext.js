import React from 'react'

const BookListContext = React.createContext({

    bookList: [],
    savedList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBookList: () => {},
    setSavedList: () => {}

})

export default BookListContext

export class BookListProvider extends React.Component {
    state= {
        bookList: [],
        error: null
    }

    setBookList = bookList => {
        console.log(bookList);
        this.setState({ bookList })
    }

    setSavedList = savedList => {
        this.setState({ savedList });
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
          setSavedList: this.setSavedList
        };
        return (
          <BookListContext.Provider value={value}>
            {this.props.children}
          </BookListContext.Provider>
        );
      }
}