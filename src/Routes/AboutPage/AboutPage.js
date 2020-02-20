import React from "react";
import { Section } from "../../Components/Utils/Utils";
import "./AboutPage.css";

export default class AboutPage extends React.Component {
  render() {
    return (
      <Section className="AboutPage">
        <section className="AboutPage__description">
          <h2>
            An app for anyone trying to find the right educational music book.
          </h2>
          <p>
            Music Book Reviews was created to answer a complicated question for
            anyone involved in music education: which book should I get?  A particular inspiration for the app is that while the most popular instruction books have a healthy amount of reviews and insight, a great number of alternative resources have been pushed out of standard curricula and are perhaps underused.
          </p>
          <p>
            Knowing that every student is different means that one size does not
            fit all when it comes to finding the right materials for learning.
            Finding the information you need to make the right choice can be
            difficult when there are so many choices! Music Book Reviews is more
            than just a list of the best selling books; it brings together
            students, teachers, and parents to focus on the usefullness of a
            book.
          </p>
          <p>
            Another use for Music Book Reviews is to share a detailed
            description of a book's contents, which teachers will appreciate
            most of all. Online retailers typically use publisher descriptions
            for their listings, but these descriptions vary wildly in utility.
            You can use this app to get a vivid picture of what a given book
            actually contains.
          </p>

          <p>
            As this project grows I intend to collate the opinions of music
            professionals for some of the more commonly used books.
          </p>
        </section>

        <section className="AboutPage__pipeline">
          <h2>Features in development:</h2>
          <ul>
            <li>
              <h3>Add a book</h3>
              <p>Submit any book to the project.</p>
            </li>

            <li>
              <h3>A more robust search engine</h3>
              <p>The search engine will currently only search by title, I would like to give a user more flexibility with their search queries.</p>
            </li>

            <li>
              <h3>Save to Favorites/Save for Later</h3>
              <p>The "My Profile" page only displays things you have reviewed, but a major aspect of this site is finding books that you have yet to use.  This feature will certainly help.</p>
            </li>

            <li>
              <h3>Price Comparison</h3>
              <p>This app is designed for understanding a given book's content, but it would certainly be useful to check on pricing and availability as well.</p>
            </li>
          </ul>
        </section>

        <section className="AboutPage__about-me">
          <h2>About the developer</h2>
          <p>
            Kevin is a professional guitarist and teacher who has been through
            too many books to count and had just as many conversations with
            others about some book and some student's needs. He hopes this tool
            will help anyone who uses it to find the right book.
          </p>
        </section>
      </Section>
    );
  }
}
