import React from 'react'
import { Section } from '../../Components/Utils/Utils'
import BookList from '../../Components/BookList/BookList'

export default class ProfilePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bookList: []
        }
    }


//use context for booklist, user reviews

    renderSavedBookList = () => {
        return (
            <BookList bookList={this.state.bookList}/>
        )
    }
    renderProfile = () => {

        return (
        <section>
            <div className="profile-stats">
                <p>Date Joined: </p>
                <p>Number of Reviews: </p>
                <p>Books Saved: </p>
            </div>

        </section>
        )
    }
    render() {
        return (
            <Section id="profile-page">
                {this.renderProfile()}
                {/* {this.renderSavedBookList} */}
            </Section>
        )
    }
}