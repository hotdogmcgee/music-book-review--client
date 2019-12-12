import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import BrowseDropdown from "./BrowseDropdown/BrowseDropdown.js";
import { Link } from 'react-router-dom'
// import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideElements: false
    };
    this.handleSearchBarFocus = this.handleSearchBarFocus.bind(this);
  }

  handleSearchBarFocus(bool) {
    this.setState({
      hideElements: !bool
    });
  }
  //   handleLogoutClick = () => {
  //     TokenService.clearAuthToken();
  //     TokenService.clearUserId();
  //     this.props.hasLogin(false);
  //   };

  //   renderLogoutLink() {
  //     return (
  //       <div className="Header__logged-in">
  //         <Link to="/my-submissions">My Submissions</Link>
  //         <Link onClick={this.handleLogoutClick} to="/">
  //           Logout
  //         </Link>
  //       </div>
  //     );
  //   }

  //   renderLoginLink() {
  //     return (
  //       <div className="Header__not-logged-in">
  //         <Link to="/login">Log in</Link>
  //         <Link to="/register">Register</Link>
  //       </div>
  //     );
  //   }

  render() {
    return (
      <>
        <nav className="Header">
          <div 
          // onClick={this.props.toggleModal}
          
          >
            <Link to={'/login'}>
            Log In/Register
            </Link>
          </div>

          <div>
            <BrowseDropdown />
          </div>

          <SearchBar onSearchBarFocus={this.handleSearchBarFocus} />
        </nav>
        {/* <nav className="Header">
          <h1>
            <Link to="/">Music Book Review</Link>
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
        </span> */}
      </>
    );
  }
}