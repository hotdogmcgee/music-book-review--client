import React from "react";
import { Section } from "../../Components/Utils/Utils";
import BookList from "../../Components/BookList/BookList";
import TokenService from "../../services/token-service";
import BooksApiService from "../../services/books-api-service";
import BookListContext from "../../Contexts/BookListContext";
import MyReviewsList from '../../Components/MyReviewsList/MyReviewsList.js'
import { Link } from "react-router-dom";

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
    this.setState({ reviewsOrSaved: value })
  }

  //use context for booklist, user reviews

  // renderSavedBookList = () => {
  //     return (
  //         <BookList bookList={this.state.bookList}/>
  //     )
  // }
  renderProfile = () => {
    return (
      <section>
        <div className="profile-stats">
          <p>Date Joined: </p>
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
        <MyReviewsList reviews={this.state.reviews} bookList={this.context.bookList}/>
        {/* {this.renderSavedBookList} */}
      </Section>
    );
  }
}
