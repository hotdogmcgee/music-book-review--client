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
    console.log("close");
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
      <Link onClick={this.handleLogoutClick} to="/">
        Logout
      </Link>
    ) : (
      <li onClick={this.handleLoginClick} id="log-in" className="menu-item">
        Log In/Register
      </li>
    );
    return link;
  };

  render() {
    return (
      <div>
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}right>
          {this.renderLoginOrLogout()}
          <li id="about" className="menu-item">
            About
          </li>
        </Menu>
      </div>
    );
  }
}
