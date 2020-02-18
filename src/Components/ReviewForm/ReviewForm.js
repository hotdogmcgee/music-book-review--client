import React, { Component } from "react";
import BookContext from "../../Contexts/BookContext";
import BooksApiService from "../../services/books-api-service";
import { Button, Textarea } from "../Utils/Utils";
import ErrorModal from "../ErrorModal/ErrorModal";
import TokenService from "../../services/token-service";
import "./ReviewForm.css";

export default class ReviewForm extends Component {
  state = {
    reviewText: "",
    showErrorModal: false,
    reviewTextValid: false,
    formValid: false,
    validationMessages: {
      reviewText: ""
    }
  };
  static defaultProps = {
    onReviewSuccess: () => {},
    onReviewFailure: () => {}
  };
  static contextType = BookContext;

  handleSubmit = ev => {
    ev.preventDefault();
    this.context.clearError();

    if (!TokenService.hasAuthToken()) {
      this.context.setError(
        "You must log in or register before adding a review."
      );
      this.props.onReviewFailure();
      return;
    }

    if (!this.state.formValid) {
      this.showErrorModal();
      return;
    }
    const { book } = this.context;
    const { text, rating } = ev.target;

    BooksApiService.postReview(book.id, Number(rating.value), text.value)
      .then(thing => this.context.addReview(thing))
      .then(() => {
        text.value = "";
        this.props.onReviewSuccess();
      })
      .catch(
        this.context.setError("You must be logged in to submit a review.")
      );
  };

  formValid() {
    this.setState({
      formValid: this.state.reviewTextValid
    });
  }

  updateReviewText(reviewText) {
    this.setState(
      {
        reviewText
      },
      () => {
        this.validateReviewText(reviewText);
      }
    );
  }

  validateReviewText(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    if (
      fieldValue.length < 10 ||
      fieldValue.length > 400 ||
      !fieldValue.match(new RegExp(/^[a-zA-Z0-9,.!$%&()? ]*$/))
    ) {
      fieldErrors.reviewText =
        "Reviews must be between 10 and 400 characters, using letters A-Z";
      hasError = true;
    } else {
      fieldErrors.new_tw_name = "";
      hasError = false;
    }

    this.setState(
      {
        validationMessages: fieldErrors,
        reviewTextValid: !hasError
      },
      this.formValid
    );
  }

  showErrorModal = () => {
    this.setState({ showErrorModal: true });
  };

  hideErrorModal = () => {
    this.setState({ showErrorModal: false });
  };

  render() {
    console.log(this.state.validationMessages);
    return (
      <>
        <form className="ReviewForm" onSubmit={this.handleSubmit}>
          <div className="text">
            <Textarea
              required
              aria-label="Type a review..."
              name="text"
              id="text"
              cols="20"
              rows="5"
              placeholder="Type a review.."
              className="ReviewForm__textarea"
              onChange={e => this.updateReviewText(e.target.value)}
            ></Textarea>
          </div>

          <div className="select">
            <label htmlFor="rating">Rate this book!</label>
            <select
              required
              aria-label="Rate this book!"
              name="rating"
              id="rating"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <Button type="submit">Post review</Button>
        </form>
        <ErrorModal
          error={this.state.validationMessages.reviewText}
          handleClose={this.hideErrorModal}
          show={this.state.showErrorModal}
        />
      </>
    );
  }
}
