import React from "react";
import BookList from "../../Components/BookList/BookList";
import FilterSortBar from "../../Components/FilterSortBar/FilterSortBar";
import BookListContext from "../../Contexts/BookListContext";
import { UnderConstruction } from "../../Components/Utils/Utils";
import "./CategoryPage.css";

export default class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      browseTrue: false,
      listSorted: false
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  static contextType = BookListContext;

  componentDidMount() {
    const instrument = this.props.match.params.instrument;
    if (instrument) {
      this.context.setInstrumentValue(instrument);
    }
    const type = this.props.match.params.type;
    if (type) {
      this.context.setSortValue(type);
    }
  }

  renderBooks = () => {
    const { savedList = [], filterObject } = this.context;

    const {
      searchValue,
      instrumentValue,
      sortValue,
      listSorted
    } = filterObject;

    let currentList = savedList;
    let newList = currentList;

    if (instrumentValue !== "") {
      newList = this.handleFilterInstrument(instrumentValue, currentList);
    }
    if (sortValue !== "") {
      newList = this.handleSortOption(sortValue, newList, listSorted);
    }

    if (searchValue !== "") {
      newList = newList.filter(book => {
        const lc = book.title.toLowerCase();
        const filter = searchValue.toLowerCase();
        return lc.includes(filter);
      });
    }

    const instrument = this.props.match.params.instrument;
    const displayInstrumentName = instrument ? (
      <div className="instrument-view-reminder">
        <h2 className="capitalize">Instrument: {instrument}</h2>
      </div>
    ) : (
      ""
    );

    return (
      <>
        {displayInstrumentName}
        {newList ? (
          <>
            <FilterSortBar />
            <BookList bookList={newList} />
          </>
        ) : (
          <UnderConstruction />
        )}
      </>
    );
  };

  handleSortOption(sortValue, list, listSorted) {
    if (!list) {
      list = this.context.savedList;
    }

    const sortFunc = function(a, b) {
      let thingA, thingB;
      if (sortValue === "authors") {
        thingA = a[sortValue][0].last_name.toUpperCase()
        thingB = b[sortValue][0].last_name.toUpperCase()
      } else {
        thingA = a[sortValue].toUpperCase();
        thingB = b[sortValue].toUpperCase();
      }
      if (thingA < thingB) {
        return -1;
      }
      if (thingA > thingB) {
        return 1;
      }

      return 0;
    };

    let newList;

    if (sortValue) {
      switch (sortValue) {
        case "instrument":
          newList = list.sort(sortFunc);

          break;
        case "authors":
          newList = list.sort(sortFunc);
          break;
        case "id":
          newList = list.sort((a, b) => {
            return a.id - b.id;
          });
          break;
        case "title":
          newList = list.sort(sortFunc);
          break;
        case "rating":
          newList = list.sort((a, b) => {
            return b.avg_rating - a.avg_rating;
          });
          break;
        default:
          break;
      }

      if (listSorted === true) {
        newList = newList.reverse();
      }
    }

    return newList;
  }

  handleFilterInstrument(instrument, list) {
    let newList;
    newList = list.filter(item => item.instrument === instrument);
    return newList;
  }

  render() {
    return <>{this.renderBooks()}</>;
  }
}
