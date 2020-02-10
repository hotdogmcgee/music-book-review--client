import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.css";
import TokenService from "../../../services/token-service";
import { Link } from "react-router-dom";

export default class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  handleLogoutClick = () => {
    this.closeMenu();
    TokenService.clearAuthToken();
    TokenService.clearUserId();
    this.props.hasLogin(false);
  };

  handleLoginClick = () => {
    this.closeMenu();
    this.props.showModal();
  };

  renderLoginOrLogout = () => {
    const link = TokenService.hasAuthToken() ? (
      <Link onClick={this.handleLogoutClick} to="/" className="menu-item">
        Logout
      </Link>
    ) : (
      <li onClick={this.handleLoginClick} id="log-in" className="menu-item">
        Log In/Register
      </li>
    );
    return link;
  };

  renderMyProfileLink = () => {
    const profileLink = TokenService.hasAuthToken() ? (<Link onClick={() => this.closeMenu()} className="menu-item" to="/my-profile">
    My Profile
  </Link>) : ""
  return profileLink
  }

  render() {

    
    return (
      <div>
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right id="burger-menu">
          {this.renderLoginOrLogout()}
          <Link to="/about" id="about" className="menu-item" onClick={() => this.closeMenu()}>
            About
          </Link>
          {this.renderMyProfileLink()}
        </Menu>
      </div>
    );
  }
}
