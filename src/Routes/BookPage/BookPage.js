import React from "react";
import { Link } from "react-router-dom";
import { Section, Hyph } from "../../Components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookStarRating } from "../../Components/BookStarRating/BookStarRating";
import BookContext from "../../Contexts/BookContext";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import "./BookPage.css";
import BooksApiService from "../../services/books-api-service";
import ReviewSuccessModal from "../../Components/ReviewSuccessModal/ReviewSuccessModal";

export default class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSubmission: false,
      showModal: false
    };
  }

  static defaultProps = {
    match: { params: {} }
  };

  static contextType = BookContext;

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

  showModal = () => {
    this.setState({ showModal: true });
  };

  //
  hideModal = () => {
    this.setState({ showModal: false }
    );
  };

  handleReviewSuccess = () => {
    this.setState({ showModal: true });
  };


  renderBook() {
    //use error modal

    const {
      title,
      authors,
      instrument,
      avg_rating,
      description,
      image,
      num_reviews,
      user
    } = this.context.book;

    const { reviews } = this.context;

    const roundedNumber = avg_rating ?  avg_rating.toFixed(1) : 0

    return (
      <Section id="book">
        <p>{image}</p>
        <div className="book-info">
          <h3>{title}</h3>

          <div className="authors-container">
            {authors ? <RenderAuthors authors={authors} /> : "no authors!"}
          </div>
          <p>{instrument}</p>
          <p>{description}</p>
        </div>
        <div className="ratings-container">
          <span>{roundedNumber}</span>
          <span>Based on {num_reviews} reviews</span>
        </div>
        <BookReviews reviews={reviews} user={user} />
        <ReviewForm onReviewSuccess={this.handleReviewSuccess} />
      </Section>
    );
  }

  render() {
    return (
      <>
        <Link to="/">Music Book Review</Link>
        {this.renderBook()}
        <ReviewSuccessModal
          handleClose={this.hideModal}
          show={this.state.showModal}
          bookId
        />
      </>
    );
  }
}

//change user_id to get name, do it from server side
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
            {review.user.full_name}
          </p>
        </li>
      ))}
    </ul>
  );
}

function RenderAuthors({ authors }) {
  return authors.map((author, key) => {
    const commaSpace = key < authors.length - 1 ? ", " : "";

    return (
      <span className="author-container" key={key}>
        {`${author.first_name} ${author.last_name}${commaSpace} `}
      </span>
    );
  });
}
