import React from "react";
import { Section, NiceDate } from "../../Components/Utils/Utils";
import TokenService from "../../services/token-service";
import BooksApiService from "../../services/books-api-service";
import BookListContext from "../../Contexts/BookListContext";
import MyReviewsList from "../../Components/MyReviewsList/MyReviewsList.js";
import "./ProfilePage.css";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      reviewsOrSaved: null
    };
  }

  static contextType = BookListContext;

  componentDidMount() {
    BooksApiService.getAllUserReviews().then(reviews =>
      this.setReviews(reviews)
    );
  }

  setReviews(reviews) {
    this.setState({ reviews });
  }

  toggleReviewsOrSavedBooks = value => {
    this.setState({ reviewsOrSaved: value });
  };

  renderProfile = () => {
    const dateJoined = TokenService.getUserDateCreated();
    return (
      <section>
        <div className="profile-stats">
          <p>
            Date Joined: <NiceDate date={dateJoined} />
          </p>
          <p>Number of Reviews: {this.state.reviews.length || 0}</p>
        </div>
      </section>
    );
  };
  render() {
    return (
      <Section id="profile-page">
        {this.renderProfile()}
        <MyReviewsList
          reviews={this.state.reviews}
          bookList={this.context.bookList}
        />
      </Section>
    );
  }
}
