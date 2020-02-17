import React from "react";
import "./HomePage.css";
import { Section } from "../../Components/Utils/Utils";
import BookListContext from "../../Contexts/BookListContext";
import BookList from "../../Components/BookList/BookList";
import CardList from "../../Components/CardList/CardList";

class HomePage extends React.Component {
  state = {
    searchValue: ""
  };
  static contextType = BookListContext;




  makeInstrumentList = () => {
    const { bookList } = this.context
    let instrumentCount = {}

    const instruments = bookList.map(item => item.instrument)

    for (let i = 0; i < instruments.length; i++) {
      const num = instruments[i]
      instrumentCount[num] = instrumentCount[num] ? instrumentCount[num] + 1 : 1;

    }
    
    let numberOfBooks = Object.keys(instrumentCount).map(key => {
      return {
      title: key,
      numEntries: instrumentCount[key]   
    }
    })

    //returns list sorted by most books for a given instrument
    const sorted = numberOfBooks.sort((a, b) => { return b.numEntries - a.numEntries} )

    return sorted
    
  }
  renderBookListOrCardList = () => {

    const instrumentList =     this.makeInstrumentList()
    const searchValue = this.context.filterObject.searchValue || "";

    let newList = this.context.bookList;
    if (searchValue.length > 0) {
      newList = newList.filter(book => {
        const lc = book.title.toLowerCase();
        const filter = searchValue.toLowerCase();
        return lc.includes(filter);
      });
      return <BookList bookList={newList} />;
    } else {
      return (
        <div>
          <Section>
            <p className="HomePage__hero">
              The Music Book Reviews app helps you find the right book for a
              variety of instruments.
              <br></br>
              <br></br>
              Add your own reviews to grow the project!
            </p>
          </Section>
          <h2>Instrument select</h2>
          <CardList instruments={instrumentList} />
        </div>
      );
    }
  };

  render() {
    return (
      <section className="HomePage">
        <Section className="HomePage__display-area">
          {this.renderBookListOrCardList()}
        </Section>
      </section>
    );
  }
}

export default HomePage;
