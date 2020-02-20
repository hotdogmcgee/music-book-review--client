import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import BrowseDropdown from "./BrowseDropdown/BrowseDropdown.js";
import TokenService from "../../services/token-service";
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

  static defaultProps = {
    match: { params: {} }
  };
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

  handleLoginClick = () => {
    this.props.showModal()
  }

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

  renderLoginOrLogout = () => {
    const link = TokenService.hasAuthToken() ? (
      <Link onClick={this.handleLogoutClick} to="/" className="menu-item">
        Logout
      </Link>
    ) : (
      <div onClick={this.handleLoginClick} id="log-in" className="menu-item">
        Log In/Register
      </div>
    );
    return link;
  };

  renderMyProfileLink = () => {
    const profileLink = TokenService.hasAuthToken() ? (
      <Link className="menu-item" to="/my-profile">
        My Profile
      </Link>
    ) : (
      ""
    );
    return profileLink;
  };

  renderMenuWide() {
    return (
      <div className="menu-wide">
        <ul className="menu-wide-list">
          <li className="menu-wide-list-item">{this.renderLoginOrLogout()}</li>
          <li className="menu-wide-list-item">{this.renderMyProfileLink()}</li>
          <li className="menu-wide-list-item">
            <Link to="/about" id="about" className="menu-item">
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="Header__nav">
          <div>
            <h1>
              <Link to="/">Music Books Review</Link>
            </h1>
            <span className="Header__tagline--wide">
              For Students, Educators, and Parents!
            </span>
          </div>
        </nav>
        <span className="Header__tagline--narrow">
          For Students, Educators, and Parents!
        </span>

        <div className="browse-and-search-container">
          <div className="search-bar-container">
            {" "}
            {this.props.showSearchBar ? (
              <SearchBar onSearchBarFocus={this.handleSearchBarFocus} />
            ) : (
              ""
            )}{" "}
          </div>

          <div className="show-dropdown">
            <BrowseDropdown />
          </div>
        </div>
        {this.renderMenuWide()}
      </>
    );
  }
}
