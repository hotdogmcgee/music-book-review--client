import React from "react";
import { Link } from "react-router-dom";
import { Section, NiceDate } from "../Utils/Utils";
import { BookStarRating } from "../BookStarRating/BookStarRating";
import "./MyReviewsList.css";

export default class MyReviewsList extends React.Component {
  //to-do:  make a path/modal for updating a review

  renderMyReviews() {
    const reviews = this.props.reviews;
    const bookList = this.props.bookList;

    if (reviews) {
      const reviewsItems = reviews.map((rv, index) => {
        let book = bookList.filter(book => rv.book_id === book.id);

        rv.title = book[0] ? book[0].title : "loading";
        rv.authors = book[0] ? book[0].authors : "";
        // rv.authors = book[0].authors

        return (
          <li className="my-reviews-item" key={index}>
            <section id="my-reviews-item-book-and-review">
              <div className="my-reviews-item-book-info">
                <Link to={`/book/${rv.book_id}`}>{rv.title}</Link>
                <div className="authors-container">
                  {rv.authors ? (
                    <span>
                      by <RenderAuthors authors={rv.authors} />
                    </span>
                  ) : (
                    "no authors!"
                  )}
                </div>
              </div>

              <div className="my-reviews-item-data">
                <BookStarRating rating={rv.rating} />
                <NiceDate date={rv.date_created} />
              </div>
            </section>

            <p>{rv.review_text}</p>
          </li>
        );
      });

      return <ul id="my-reviews-list">{reviewsItems}</ul>;
    } else {
      return <p>No reviews yet!</p>;
    }
  }

  render() {
    return (
      <Section className="my-reviews-container">
        {this.renderMyReviews()}
      </Section>
    );
  }
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
