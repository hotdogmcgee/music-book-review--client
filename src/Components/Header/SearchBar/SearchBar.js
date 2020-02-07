import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookListContext from "../../../Contexts/BookListContext";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  //on click hide or grey out other buttons so search field takes up more space
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      mouseOverBoolean: false,
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = BookListContext;

  handleInput = e => {
    e.preventDefault();
    const value = e.target.value;
    this.context.setSearchValue(value);
  };

  handleToggle() {
    const newVal = !this.state.mouseOverBoolean;
    this.setState({
      mouseOverBoolean: newVal
    });
  }

  handleMouseOver() {
    if (this.state.mouseOverBoolean) {
      return;
    } else {
      this.setState({
        mouseOverBoolean: true
      });
      this.props.onSearchBarFocus();
    }
  }

  //make it so search bar stays open when text is in field

  handleHover() {
    // if (this.context.filterObject.searchValue.length > 0) {
    //   this.setState({ isHovered: true });
    //   return;
    // }
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));

    this.props.onSearchBarFocus(this.state.isHovered);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push("/");
  };

  // filterList = (event) => {
  //   let items = this.state.initialItems;
  //   items = items.filter((item) => {
  //     return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
  //   });
  //   this.setState({items: items});
  // }

  //changed to a form to handle return, may change back to div
  render() {

    const { searchValue} = this.context.filterObject
    console.log(searchValue);

    const classes = searchValue ? "show-search" : "searchBox"
    return (
      <form
        // className="searchBox"
        className={classes}
        onChange={this.handleInput}
        // onMouseOver={this.handleMouseOver}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onSubmit={this.handleSubmit}
      >
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
        ></input>
        <button className="searchButton" href="#">
          <FontAwesomeIcon
            className="material-icons"
            icon="search"
            flip="horizontal"
          />
        </button>
      </form>
    );
  }
}
