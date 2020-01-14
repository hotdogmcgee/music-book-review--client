import React from "react";
import { Link } from "react-router-dom";
import { Section, Hyph } from "../../Components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookStarRating } from "../../Components/BookStarRating/BookStarRating";
import BookContext from '../../Contexts/BookContext'
import SaveBook from "../../Components/SaveBook/SaveBook";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import "./BookPage.css";
import BooksApiService from "../../services/books-api-service";

export default class BookPage extends React.Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = BookContext
  //use api fetch with param id, or should i just call everything in App.js and it will live in state?

  componentDidMount() {
    const { bookId } = this.props.match.params;
    this.context.clearError();
    BooksApiService.getBook(bookId)
      .then(this.context.setBook)
      .catch(this.context.setError);
    BooksApiService.getBookReviews(bookId)
      .then(this.context.setReviews)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearBook();
  }


  renderBook() {
    const id = this.props.match.params.bookId;

    //use error modal

    const {
      title,
      author,
      instrument,
      rating,
      description,
      image,
      numReviews,
      user
    } = this.context.book

    const { reviews } = this.context

    return (
      <Section id="book">
        
        <p>{image}</p>
        <div className="book-info">
          <h3>{title}</h3>
          <p>{instrument}</p>
          <p>{author}</p>
          <p>{description}</p>
        </div>
        <SaveBook />
        <div className="ratings-container">
          <span>{rating}</span>
          <span>Based on {numReviews} reviews</span>
        </div>
        <BookReviews reviews={reviews} user={user}/>
        <ReviewForm />
      </Section>
    );
  }

  render() {
    return (
      <>
        <Link to="/">Music Book Review</Link>
        {this.renderBook()}
      </>
    );
  }
}

function BookReviews({ reviews = [], user }) {
  return (
    <ul className="BookPage__review-list">
      {reviews.map(review => (
        <li key={review.id} className="BookPage__review">
          <p className="BookPage__review-text">
            <FontAwesomeIcon
              size="sm"
              icon="quote-left"
              className="BookPage__review-icon blue"
            />{" "}
            {review.review_text}
          </p>
          <p className="BookPage__review-user">
            <BookStarRating rating={review.rating} />
            <Hyph />
            {user.full_name}
          </p>
        </li>
      ))}
    </ul>
  );
}
