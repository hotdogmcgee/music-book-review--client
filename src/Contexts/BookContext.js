import React from 'react'

//nullBook for agreements?
const nullBook = {
    title: '',
      author: '',
      instrument: '',
      rating: '',
      description: '',
      image: '',
      numReviews: '',
      reviews: []
}
const BookContext = React.createContext({
    book: {},
    reviews: [],
    error: null,
    hasError: null,
    setError: () => {},
    clearError: () => {},
    setBook: () => {},
    setReviews: () => {},
    clearBook: () => {}
})

export default BookContext

export class BookProvider extends React.Component {
    state = {
        book: {},
        error: null
    }

    setError = error => {
        this.setState({ error, hasError: true });
      };
    
      clearError = () => {
        this.setState({ error: null, hasError: null });
      };
    
      setBook = book => {
        this.setState({ book });
      };
    
      setReviews = reviews => {
        // reviews.forEach(item => {
        //     item.user_id = item.user.full_name;
        //   return "";
        // });
    
        this.setState({ reviews });
      };

      clearBook = () => {
          this.setBook(nullBook)
      }

      render() {
          const value = {
              book: this.state.book,
              reviews: this.state.reviews,
              error: this.state.error,
              hasError: this.state.hasError,
              setError: this.setError,
              clearError: this.clearError,
              setBook: this.setBook,
              clearBook: this.clearBook,
              setReviews: this.setReviews
          }
          return (
              <BookContext.Provider value={value}>
                  {this.props.children}
              </BookContext.Provider>
          )
      }
}
