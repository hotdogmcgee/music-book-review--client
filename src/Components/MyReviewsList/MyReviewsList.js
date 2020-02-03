import React from "react";
import {Link} from 'react-router-dom'
import { Section } from '../Utils/Utils'
import BookListContext from '../../Contexts/BookListContext'
import './MyReviewsList.css'

export default class MyReviewsList extends React.Component {


//re-factor this, maybe pass bookList from parent component
    static contextType = BookListContext

    renderMyReviews() {
        const reviews = this.props.reviews
        const bookList = this.context.bookList
    
        if (reviews) {
          const reviewsItems = reviews.map((rv, index) => {
        
                let book = bookList.filter(book => rv.id !== book.id)

              rv['title'] = book[0].title || 'loading'
              rv['authors'] = book[0].authors || 'loading'
              console.log(rv);
            return (
              <li className="my-reviews-item" key={index}>
                <Link to={`/book/${rv.book_id}`}>{rv.title}</Link>
                <div className="my-reviews-item-info">

                  <p>{rv.rating}</p>
                  <p>{rv.review_text}</p>
                  <p>{rv.date_created}</p>
                </div>
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
          )
      }
}