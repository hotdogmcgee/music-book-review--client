import React from "react";
import "./BookListItem.css";
import { Link } from "react-router-dom";
import { BookStarRating } from "../BookStarRating/BookStarRating";
import propTypes from 'prop-types'

export default function BookListItem(props) {
  const {
    title,
    instrument,
    avg_rating,
    description,
    image,
    publisher,
    num_reviews,
    authors,
    year_published,
    id
  } = props;

  const renderAuthors = authors ? (
    <RenderAuthors authors={authors} />
  ) : (
    "no authors!"
  );
  const roundedNumber = avg_rating ? avg_rating.toFixed(1) : 0;

  const shortenedDescription = Truncate(description);

  return (
    <div className="book-list-item">
      <div className="book-list-img-container">
        <span>{image}</span>
      </div>
      <div className="book-info">
        <h3 className="capitalize">
          {" "}
          <Link to={`/book/${id}`}>{title} </Link>
        </h3>

        <div className="authors-container">{renderAuthors}</div>
        <p className="publisher-details">
          {publisher}: {year_published}
        </p>
        <p>{shortenedDescription}</p>
      </div>
      <div className="ratings-container">
        <BookStarRating rating={roundedNumber} />
        <p>Based on {num_reviews} reviews</p>

        <p className="capitalize BookListItem__instrument">{instrument}</p>
      </div>
    </div>
  );
}

BookListItem.propTypes = {
  title: propTypes.string,
    instrument: propTypes.string,
    avg_rating: propTypes.number,
    description: propTypes.string,
    image: propTypes.string,
    publisher: propTypes.string,
    num_reviews: propTypes.number,
    authors: propTypes.array,
    year_published: propTypes.number,
    id: propTypes.number,
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

function Truncate(text = "") {
  const words = text.split(" ");

  if (words.length > 10) {
    return words.slice(0, 20).join(" ") + " ...";
  }

  return text;
}
