import React from "react";
import { Link } from "react-router-dom";
import BookListContext from "../../../Contexts/BookListContext";
import "./BrowseDropdown.css";

//want to make ul items clickable on full box, not just text area.
export default class BrowseDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  static contextType = BookListContext;

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  handleBrowseClick = ev => {
    ev.preventDefault();
    let sortValue = ev.target.text.toLowerCase();

    if (sortValue === "average rating") {
      sortValue = "rating";
    }

    //clear all filtering values except for sortValue
    const clearValue = "";
    const searchValue = clearValue;
    const instrumentValue = clearValue;
    const filterValue = clearValue;

    this.context.setFilterObject(
      searchValue,
      instrumentValue,
      filterValue,
      sortValue
    );
  };

  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          Browse
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li onClick={this.handleBrowseClick}>
              <Link
                className="active"
                to="/category/instrument"
                value="instrument"
              >
                Instrument
              </Link>
            </li>
            <li onClick={this.handleBrowseClick}>
              <Link to="/category/authors">Authors</Link>
            </li>
            {/* no publisher data at the moment */}
            <li>
              <Link to="/category/publisher" onClick={this.handleBrowseClick}>
                Publisher
              </Link>
            </li>
            <li>
              <Link to="/category/rating" onClick={this.handleBrowseClick}>
                Average Rating
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
