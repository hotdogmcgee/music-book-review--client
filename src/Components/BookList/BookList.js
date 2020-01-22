import React from "react";
import { Section } from "../Utils/Utils";
import BookListItem from '../BookListItem/BookListItem'
import './BookList.css'

export default function BookList(props) {
  const displayList = props.bookList
    ? props.bookList.map((item, index) => {
        return (
          <li key={index} >
              <BookListItem {...item}/>
          </li>
        );
      })
    : "error!";

  return (
    <Section>
      <ul id="book-list">{displayList}</ul>
    </Section>
  );
}

