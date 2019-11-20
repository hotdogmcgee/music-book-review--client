import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
// import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends React.Component {
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
                <p>Log In/Register</p>
                <p>Browse</p>
                <Link to="/">Music Book Review</Link>
                <SearchBar />
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