import React from "react";
import "./BookListItem.css";
import { Link } from "react-router-dom";

export default function BookListItem(props) {
  const {
    title,
    author,
    instrument,
    rating,
    description,
    image,
    numReviews,
    id
  } = props;

  return (
    <div className="book-list-item">
      <div className="book-list-img-container"><span>{image}</span></div>
      <div className="book-info">
        <Link to={`/book/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{author}</p>
        <p>{instrument}</p>
        <p>{description}</p>
      </div>
      <div className="ratings-container">
        <p>{rating}</p>
        <p>Based on {numReviews} reviews</p>
      </div>
    </div>
  );
}
