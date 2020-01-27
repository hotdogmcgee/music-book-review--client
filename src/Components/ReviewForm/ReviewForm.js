import React, { Component } from "react";
import BookContext from "../../Contexts/BookContext";
import BooksApiService from "../../services/books-api-service";
import { Button, Textarea } from "../Utils/Utils";
import ReviewSuccessModal from "../../Components/ReviewSuccessModal/ReviewSuccessModal";
import "./ReviewForm.css";

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = { onReviewSuccess: () => {} };
  static contextType = BookContext;

  handleSubmit = ev => {
    ev.preventDefault();

    const { book } = this.context;
    const { text, rating } = ev.target;

    const user_id = 1;

    //need to grab user_id from req.params

    //promises are not being returned -- needs fix

    BooksApiService.postReview(
      user_id,
      book.id,
      Number(rating.value),
      text.value
    )
      .then(() => {
        text.value = "";
        this.props.onReviewSuccess();
      })
      // .then(thing => this.context.addReview(thing))

      .catch(this.context.setError);
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
              cols="30"
              rows="3"
              placeholder="Type a review.."
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
