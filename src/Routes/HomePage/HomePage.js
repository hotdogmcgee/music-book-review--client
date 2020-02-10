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

  renderBookListOrCardList = () => {
    const instrumentList = [
      { title: "guitar" },
      { title: "piano" },
      { title: "clarinet" },
      { title: "violin" }
    ];
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
          <Section>ABOUT</Section>
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
