import React from "react";
import "./BookListItem.css";
import { Link } from "react-router-dom";

export default function BookListItem(props) {
  const {
    title,
    instrument,
    avg_rating,
    description,
    image,
    num_reviews,
    authors,
    id
  } = props;
  
  const renderAuthors = authors ? <RenderAuthors authors={authors} /> : "no authors!"

  //have a description truncate function
  return (
    <div className="book-list-item">
      <div className="book-list-img-container">
        <span>{image}</span>
      </div>
      <div className="book-info">
        <Link to={`/book/${id}`}>
          <h3>{title}</h3>
        </Link>
        <div className="authors-container">
          {renderAuthors}
        </div>

        <p>{instrument}</p>
        <p>{description}</p>
      </div>
      <div className="ratings-container">
        <p>{avg_rating}</p>
        <p>Based on {num_reviews} reviews</p>
      </div>
    </div>
  );
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
