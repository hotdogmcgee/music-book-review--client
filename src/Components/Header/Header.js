import React from "react";
import { Link } from "react-router-dom";
import Burger from '@animated-burgers/burger-rotate' 
import SearchBar from "./SearchBar/SearchBar";
import BrowseDropdown from "./BrowseDropdown/BrowseDropdown.js";
import LoginModal from "../LoginModal/LoginModal";
import TokenService from "../../services/token-service";
import BurgerMenu from './BurgerMenu/BurgerMenu'

import "./Header.css";
// import '@animated-burgers/burger-rotate/dist/styles.css' 

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      hideElements: false,
      // openBurger: false
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

  // toggleBurger = () => {
  //   this.setState({ openBurger: !this.state.openBurger})
  // }

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
        {/* <Link to="/my-submissions">My Submissions</Link> */}
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
    return (
      <BurgerMenu showModal={this.showModal}/>
    )

  }

  render() {
    // const hideElement = this.state.hideElements ? "hide-dropdown" : ""
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to="/">Music Books Review</Link>
          </h1>
          <span className="Header__tagline--wide">
            For Students, Educators, and Parents!
          </span>
          {/* <div className="login-container">
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
              {this.renderBurgerMenu()}
          </div> */}
        </nav>
        <span className="Header__tagline--narrow">
          For Students, Educators, and Parents!
        </span>

        <div className="browse-and-search-container">
          <div>
            <BrowseDropdown />
          </div>

          <SearchBar onSearchBarFocus={this.handleSearchBarFocus} />
        </div>
{/* 
        <LoginModal
          handleClose={this.hideModal}
          show={this.state.showLoginModal}
          //some prop drilling here
          hasLogin={this.props.hasLogin}
        /> */}
      </>
    );
  }
}
