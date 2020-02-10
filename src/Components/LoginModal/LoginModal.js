import React from "react";
import "./LoginModal.css";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "log-in",
      loginSuccess: false
    };
  }

  setForm = type => {
    const formType = type;
    this.setState({ formType: formType });
  };

  setLoginSuccess = () => {
    console.log("try");
    this.setState({ loginSuccess: !this.state.loginSuccess });
  };

  handleLoginSuccess = () => {
    this.props.hasLogin(true);
    this.setLoginSuccess();
    setTimeout(this.props.handleClose(), 10000);
    this.setLoginSuccess()
    
    // this.props.handleClose();
  };

  renderSuccessIcon() {
    console.log("NICE");
    return (
      <div>
        <h2>NICE</h2>
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
          <RegisterForm handleClose={handleClose} />
        )}
      </div>
    );
  }

  render() {
    const { show } = this.props
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main login-modal">
          {this.state.loginSuccess
            ? this.renderSuccessIcon()
            : this.renderLoginModal()}
          {/* <button onClick={handleClose}>Close</button> */}
        </section>
      </div>
    );
  }
}
