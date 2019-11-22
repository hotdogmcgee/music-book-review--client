import React from "react";
import { Link } from 'react-router-dom'
import './BrowseDropdown.css'

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

  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          
          Browse
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <Link className="active" to="/category/instrument">

                Instrument

              </Link>
            </li>
            <li>
              <Link to="/category/author">Author</Link>
            </li>
            <li>
              <Link to="/category/publisher">Publisher</Link>
            </li>
            <li>
              <Link to="/category/average-rating">Average Rating</Link>
            </li>

          </ul>
        ) : null}
      </div>
    );
  }
}
