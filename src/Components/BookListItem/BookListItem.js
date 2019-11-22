import React from "react";
import './BookListItem.css'


export default function BookListItem(props) {
  const { title, author, rating, description, image, numReviews } = props;

  return (
    <div>
      <p>{image}</p>
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
      </div>
      <div className="ratings-container">
      <span>{rating}</span>
      <span>Based on {numReviews} reviews</span>
        

      </div>
    </div>
  );
}
