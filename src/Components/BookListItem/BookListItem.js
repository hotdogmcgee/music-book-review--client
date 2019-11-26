import React from "react";
import './BookListItem.css'
import { Link } from 'react-router-dom'


export default function BookListItem(props) {
  const { title, author, rating, description, image, numReviews, id } = props;

  return (
    <div>
      <p>{image}</p>
      <div className="book-info">
        <Link to={`/book/${id}`}><h3>{title}</h3></Link>
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
