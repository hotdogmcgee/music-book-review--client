import React from "react";
import { Link } from 'react-router-dom'
import BookListContext from '../../../Contexts/BookListContext'
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
  static contextType = BookListContext

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

  handleBrowseClick = (ev) => {
    ev.preventDefault()
    const browseValue = ev.target.text.toLowerCase()
    this.context.setBrowseValue(browseValue)
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          
          Browse
        </div>

        {this.state.displayMenu ? (
          <ul >
            <li onClick={this.handleBrowseClick}
              
            >
              <Link className="active" to="/category/instrument" value='instrument'>

                Instrument

              </Link>
            </li>
            <li onClick={this.handleBrowseClick}>
              <Link  to="/category/authors">Authors</Link>
            </li>
            <li>
              <Link to="/category/publisher">Publisher</Link>
            </li>
            <li>
              <Link to="/category/rating">Average Rating</Link>
            </li>

          </ul>
        ) : null}
      </div>
    );
  }
}
