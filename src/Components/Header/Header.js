import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import BrowseDropdown from "./BrowseDropdown/BrowseDropdown.js";
import LoginModal from "../LoginModal/LoginModal";
import TokenService from "../../services/token-service";
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

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        {/* <Link to="/my-submissions">My Submissions</Link> */}
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div onClick={this.showModal}>
          <h2>Log In/Register</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>

        <nav className="Header">
          <h1>
            <Link to="/">Music Books Review</Link>
          </h1>
          <span className="Header__tagline--wide">
            For Students, Educators, and Parents!
          </span>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
        <span className="Header__tagline--narrow">
          For Students, Educators, and Parents!
        </span>


        <div>
          <BrowseDropdown />
        </div>

        <SearchBar onSearchBarFocus={this.handleSearchBarFocus} />

        <LoginModal
          handleClose={this.hideModal}
          show={this.state.showLoginModal}
          //some prop drilling here
          hasLogin={this.props.hasLogin}
        />
      </>
    );
  }
}
