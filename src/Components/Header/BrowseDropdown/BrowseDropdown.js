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

  static defaultProps = {
    history: {
      push: () => {}
    }
  }

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
    let sortValue = ev.target.innerText.toLowerCase();

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
      <div className="dropdown">
        <div className="button" onClick={this.showDropdownMenu}>
          Browse
        </div>

        {this.state.displayMenu ? (
          <ul className="browse-dropdown-list">
            <li onClick={this.handleBrowseClick} className="active">
              <Link
                value="instrument"
                className="active"
                to="/category/instrument"
                
              >
                Instrument
              </Link>
            </li>
            <li onClick={this.handleBrowseClick}>
              <Link to="/category/authors">Authors</Link>
            </li>
            {/* no publisher data at the moment */}
            <li onClick={this.handleBrowseClick}>
              <Link to="/category/publisher" >
                Publisher
              </Link>
            </li>
            <li onClick={this.handleBrowseClick}>
              <Link to="/category/rating" >
                Average Rating
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
