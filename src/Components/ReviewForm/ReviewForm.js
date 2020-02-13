import React, { Component } from "react";
import BookContext from "../../Contexts/BookContext";
import BooksApiService from "../../services/books-api-service";
import { Button, Textarea } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./ReviewForm.css";

export default class ReviewForm extends Component {
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
        "You must log in or register before adding a review"
      );
      this.props.onReviewFailure();
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
      .catch(this.context.setError("You must be logged in to submit a review"));
  };

  render() {
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
            ></Textarea>
          </div>

          <div className="select">
            <label htmlFor="rating">Rate this book!</label>
            <select
              required
              aria-label="Rate this thing!"
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
      </>
    );
  }
}
