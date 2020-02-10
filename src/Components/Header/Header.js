import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import BrowseDropdown from "./BrowseDropdown/BrowseDropdown.js";
import TokenService from "../../services/token-service";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import BookListContext from "../../Contexts/BookListContext";

import "./Header.css";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      hideElements: false
    };
    this.handleSearchBarFocus = this.handleSearchBarFocus.bind(this);
  }

  static contextType = BookListContext;

  handleSearchBarFocus(bool) {
    this.setState({
      hideElements: !bool
    });
  }

  showModal = () => {
    this.setState({ showLoginModal: true });
  };


  hideModal = () => {
    this.setState({ showLoginModal: false });
  };
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUserId();
    this.props.hasLogin(false);
  };

  //make burger list
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
        <Link to="/my-profile">My Profile</Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in" onClick={this.toggleBurger}>
        <div onClick={this.showModal}>
          <h2>
            <span>Log In /</span>
            <span>Register</span>
          </h2>
        </div>
      </div>
    );
  }

  renderBurgerMenu() {
    return <BurgerMenu showModal={this.showModal} />;
  }

  render() {

    //hide browse dropdown when text is in search field
    const { searchValue } = this.context.filterObject;
    const browseDropdownClasses =
      searchValue.length >= 1 ? "hide-dropdown" : "show-dropdown";
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to="/">Music Books Review</Link>
          </h1>
          <span className="Header__tagline--wide">
            For Students, Educators, and Parents!
          </span>
        </nav>
        <span className="Header__tagline--narrow">
          For Students, Educators, and Parents!
        </span>

        <div className="browse-and-search-container">
          <div className={browseDropdownClasses}>
            <BrowseDropdown />
          </div>

          <SearchBar onSearchBarFocus={this.handleSearchBarFocus} />
        </div>
      </>
    );
  }
}
