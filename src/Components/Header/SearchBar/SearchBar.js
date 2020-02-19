import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookListContext from "../../../Contexts/BookListContext";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      mouseOverBoolean: false,
      isHovered: false
    };
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

  handleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));

    this.props.onSearchBarFocus(this.state.isHovered);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { searchValue } = this.context.filterObject || "";

    const classes = searchValue ? "show-search fade-in" : "searchBox fade-in";
    return (
      <form
        className={classes}
        onChange={this.handleInput}
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
