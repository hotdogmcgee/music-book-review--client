import React from "react";
import "./LoginModal.css";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import SuccessIcon from "../SuccessIcon/SuccessIcon";

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "log-in",
      loginSuccess: false,
      successMessage: ""
    };
  }

  setForm = type => {
    const formType = type;
    this.setState({ formType: formType });
  };

  setLoginSuccess = () => {
    this.setState({ loginSuccess: !this.state.loginSuccess });
  };

  setSuccessMessage = message => {
    this.setState({ successMessage: message });
  };

  handleLoginSuccess = () => {
    const showAfterSuccess = () => {
      this.props.handleClose();
      this.setLoginSuccess();
    };

    this.setSuccessMessage("Success!");

    this.props.hasLogin(true);
    this.setLoginSuccess();
    setTimeout(() => showAfterSuccess(), 3000);
  };

  handleRegisterSuccess = () => {
    const showAfterSuccess = () => {
      this.props.handleClose();
      this.setLoginSuccess();
    };

    this.setSuccessMessage("Registration complete, you are logged in as well!");

    this.props.hasLogin(true);
    this.setLoginSuccess();
    setTimeout(() => showAfterSuccess(), 3000);
  };

  renderSuccessIcon() {
    return (
      <div className="SuccessIcon__container">
        <SuccessIcon />
        <h2>{this.state.successMessage}</h2>
      </div>
    );
  }

  renderLoginModal() {
    const loginClasses =
      this.state.formType === "log-in" ? " modal-tab highlight" : "modal-tab";
    const registerClasses =
      this.state.formType === "register" ? " modal-tab highlight" : "modal-tab";
    const { handleClose } = this.props;
    return (
      <div>
        <ul className="cd-signin-modal__switcher js-signin-modal-switcher js-signin-modal-trigger">
          <li onClick={() => this.setForm("log-in")} className={loginClasses}>
            <p>Log In</p>
          </li>
          <li
            onClick={() => this.setForm("register")}
            className={registerClasses}
          >
            <p>Register</p>
          </li>
        </ul>
        {this.state.formType === "log-in" ? (
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
            handleClose={handleClose}
          />
        ) : (
          <RegisterForm
            handleClose={handleClose}
            onRegisterSuccess={this.handleRegisterSuccess}
          />
        )}
      </div>
    );
  }

  render() {
    const { show } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main login-modal">
          {this.state.loginSuccess
            ? this.renderSuccessIcon()
            : this.renderLoginModal()}
        </section>
      </div>
    );
  }
}
