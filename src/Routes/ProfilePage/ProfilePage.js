import React from "react";
import { Section, NiceDate } from "../../Components/Utils/Utils";
import TokenService from "../../services/token-service";
import BooksApiService from "../../services/books-api-service";
import BookListContext from "../../Contexts/BookListContext";
import MyReviewsList from "../../Components/MyReviewsList/MyReviewsList.js";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      reviewsOrSaved: null
    };
  }

  static contextType = BookListContext;

  //should all user reviews load on app load and then just filter?
  componentDidMount() {
    this.context.clearError();
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

  //use context for booklist, user reviews

  // renderSavedBookList = () => {
  //     return (
  //         <BookList bookList={this.state.bookList}/>
  //     )
  // }
  renderProfile = () => {
    const dateJoined = TokenService.getUserDateCreated();
    return (
      <section>
        <div className="profile-stats">
          <p>Date Joined: <NiceDate date={dateJoined} /></p>
          <p>Number of Reviews: {this.state.reviews.length || 0}</p>
          {/* <p>Books Saved: </p> */}
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
        {/* {this.renderSavedBookList} */}
      </Section>
    );
  }
}
