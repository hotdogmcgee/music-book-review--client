import React from 'react'
import {Section} from '../Utils/Utils'

export default function BookList(props) {


    

    const displayList = props.list.length ? props.list.map((item, index) => {
        return (
            <li key={index}>
                <p>some image</p>
                <div className="book-info">
                    <h3>Title</h3>
                    <p>Author</p>
                    <p>details</p>
                </div>
                <div>Average rating</div>
            </li>
        )
    }) : 'error!'

    console.log(displayList);
    return (
        <Section>
            <ul id="book-list">
                {displayList}
            </ul>
        </Section>
    )
}