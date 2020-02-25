import React from "react";
import { Section, Hyph, NiceDate } from "../../Components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookStarRating } from "../../Components/BookStarRating/BookStarRating";
import BookContext from "../../Contexts/BookContext";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import BooksApiService from "../../services/books-api-service";
import ReviewSuccessModal from "../../Components/ReviewSuccessModal/ReviewSuccessModal";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import "./BookPage.css";

export default class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSubmission: false,
      showModal: false,
      showErrorModal: false
    };
  }

  static defaultProps = {
    match: { params: {} }
  };

  static contextType = BookContext;

  componentDidMount() {
    const { bookId } = this.props.match.params;
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

  hideModal = () => {
    this.setState({ showModal: false });
  };

  showErrorModal = () => {
    this.setState({ showErrorModal: true });
  };

  hideErrorModal = () => {
    this.setState({ showErrorModal: false });
  };

  handleReviewFailure = () => {
    return this.showErrorModal();
  };
  handleReviewSuccess = () => {
    this.setState({ showModal: true });
  };

  renderBook() {
    if (!this.context.book) {
      return "";
    }

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

    const roundedNumber = avg_rating ? avg_rating.toFixed(1) : 0;

    return (
      <Section id="BookPage">
        <p>{image}</p>
        <div className="BookPage__book-info">
          <h3>{title}<span className="BookPage__authors-container-wide"> by <RenderAuthors authors={authors} /></span></h3>

          <div className="BookPage__authors-container">
            by {authors ? <RenderAuthors authors={authors} /> : "no authors!"}
          </div>

          {/* make this a link to view instrument type? */}
          <p className="capitalize">{instrument}</p>
          <p className="BookPage__description">{description}</p>
        </div>
        <div className="BookPage__ratings-container">
          <BookStarRating rating={roundedNumber} />
          <span>Based on {num_reviews} reviews</span>
        </div>
        <div className="BookPage__reviews-container">
          <BookReviews reviews={reviews} user={user} />
        </div>

        <div className="BookPage__review-form-container">
          <ReviewForm
            onReviewSuccess={this.handleReviewSuccess}
            onReviewFailure={this.handleReviewFailure}
          />
        </div>
      </Section>
    );
  }

  render() {
    return (
      <>
        {this.renderBook()}
        <ReviewSuccessModal
          handleClose={this.hideModal}
          show={this.state.showModal}
          bookId
        />
        <ErrorModal
          error={this.context.error}
          handleClose={this.hideErrorModal}
          show={this.state.showErrorModal}
        />
      </>
    );
  }
}

function BookReviews({ reviews = [] }) {
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
            <Hyph />
            <NiceDate date={review.date_created} />
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
