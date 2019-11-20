import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
// import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hideElements: false
    }
    this.handleSearchBarFocus = this.handleSearchBarFocus.bind(this)
  }

  handleSearchBarFocus(bool) {


    this.setState({
      hideElements: !bool
    })
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
                <p style={{ display: !this.state.hideElements ? 'block' : 'none'}}>Log In/Register</p>
                <p style={{ display: !this.state.hideElements ? 'block' : 'none'}}>Browse</p>
                <Link to="/">Music Book Review</Link>
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