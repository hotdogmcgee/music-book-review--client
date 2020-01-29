import React from 'react'

const BookListContext = React.createContext({

    bookList: [],
    savedList: [],
    searchValue: '',
    browseValue: '',
    error: null,
    setError: () => {},
    clearError: () => {},
    setBookList: () => {},
    setSavedList: () => {},
    setSearchValue: () => {},
    setBrowseValue: () => {}
  
})

export default BookListContext

export class BookListProvider extends React.Component {
    state= {
        bookList: [],
        savedList: [],
        searchValue: '',
        browseValue: '',
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
      let newList = []

      // this.setState({ searchValue })

      if (searchValue !== '') {
        currentList = this.state.bookList
        newList = currentList.filter(book => {
          const lc = book.title.toLowerCase()
          const filter = searchValue.toLowerCase()
          return lc.includes(filter)


        })
      } else {
        newList = this.state.bookList
      }

      console.log('newList', newList);
      console.log('search value', searchValue);

      this.setState({ searchValue, bookList: newList})

    }

  

    setBrowseValue = browseValue => {
      this.setState({browseValue})

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
          setSearchValue: this.setSearchValue,
          setBrowseValue: this.setBrowseValue
        };
        return (
          <BookListContext.Provider value={value}>
            {this.props.children}
          </BookListContext.Provider>
        );
      }
}