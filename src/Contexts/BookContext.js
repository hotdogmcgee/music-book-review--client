import React from "react";

const nullBook = {
  title: "",
  author: "",
  instrument: "",
  avg_rating: "",
  authors: [],
  description: "",
  image: "",
  numReviews: "",
  user: {},
  reviews: []
};
const BookContext = React.createContext({
  book: {},
  reviews: [],
  error: null,
  hasError: null,
  setError: () => {},
  clearError: () => {},
  setBook: () => {},
  setReviews: () => {},
  clearBook: () => {},
  addReview: () => {}
});

export default BookContext;

export class BookProvider extends React.Component {
  state = {
    book: {},
    error: null,
    hasError: null
  };

  setError = error => {
    this.setState({ error, hasError: true });
  };

  clearError = () => {
    this.setState({ error: null, hasError: null });
  };

  setBook = book => {
    this.setState({ book });
  };

  addReview = review => {
    this.setReviews([...this.state.reviews, review]);
  };

  setReviews = reviews => {
    this.setState({ reviews });
  };

  clearBook = () => {
    this.setBook(nullBook);
  };

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
      setReviews: this.setReviews,
      addReview: this.addReview
    };
    return (
      <BookContext.Provider value={value}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}
