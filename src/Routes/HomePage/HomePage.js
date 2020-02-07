import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Section } from "../../Components/Utils/Utils";
import BookListContext from "../../Contexts/BookListContext";
import BookList from "../../Components/BookList/BookList";
import CardList from "../../Components/CardList/CardList";

class HomePage extends React.Component {
  state = {
    searchValue: ""
  };
  static contextType = BookListContext;

  //   handleSearchChange = value => {
  //     let currentList = [];
  //     let newList = [];

  //     this.setState({
  //       searchValue: value
  //     });

  //     if (value !== "") {
  //         currentList = this.context.savedList;

  //         newList = currentList.filter(book => {
  //           const lc = item.title.toLowerCase();
  //           const filter = value.toLowerCase();
  //           return lc.includes(filter);
  //         });
  //       } else {
  //         newList = this.context.savedList;
  //       }

  //       this.context.setBookList(newList)

  //   };

  render() {
    const instrumentList = [
      { title: "guitar" },
      { title: "piano" },
      { title: "clarinet" },
      { title: "violin" }
    ];
    const searchValue = this.context.filterObject.searchValue || "";
    return (
      <Section className="HomePage">
        <Section>ABOUT</Section>

        <Section>
          <h2>Instrument select</h2>

          {searchValue.length > 0 ? (
            // <p>bleh</p>
            <BookList bookList={this.context.bookList}/>
          ) : (
            <CardList instruments={instrumentList} />
          )}
        </Section>
      </Section>
    );
  }
}

export default HomePage;
