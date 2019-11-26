import React from "react";
import { Link } from 'react-router-dom'
import { Section, Hyph } from "../../Components/Utils/Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BookStarRating} from '../../Components/BookStarRating/BookStarRating'
import SaveBook from '../../Components/SaveBook/SaveBook'
import ReviewForm from '../../Components/ReviewForm/ReviewForm'
import './BookPage.css'
import { STORE } from '../../store'

export default class BookPage extends React.Component {
  
  static defaultProps = {
    match: { params: {} },
  }
    
  
  //use api fetch with param id, or should i just call everything in App.js and it will live in state?

  renderBook() { 
    const id = this.props.match.params.bookId
    const { title, author, rating, description, image, numReviews, reviews } = this.props;
    // const { title, author, rating, description, image, numReviews, reviews } = STORE.bookList[id - 1];
  
    return (
    <Section id="book">
      <p>{image}</p>
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
      </div>
      <SaveBook />
      <div className="ratings-container">
        <span>{rating}</span>
        <span>Based on {numReviews} reviews</span>
      </div>
      <BookReviews reviews={reviews}/>
      <ReviewForm />
    </Section>
    )
  }

  render() {
    return (
      <>
      <Link to="/">Music Book Review</Link>
      {this.renderBook()}
      </>
    )
  }
  
}

function BookReviews({ reviews = [] }) {
  return (
    <ul className='BookPage__review-list'>
      {reviews.map(review =>
        <li key={review.id} className='BookPage__review'>
          <p className='BookPage__review-text'>
            <FontAwesomeIcon
              size='sm'
              icon='quote-left'
              className='BookPage__review-icon blue'
            />
            {' '}{review.text}
          </p>
          <p className='BookPage__review-user'>
            <BookStarRating rating={review.rating} />
            <Hyph />
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
