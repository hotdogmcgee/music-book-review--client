import React from "react";
import "./LoginModal.css";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "log-in"
    };
  }

  setForm = type => {
    const formType = type;
    this.setState({ formType: formType });
  };

  handleLoginSuccess = () => {
    this.props.hasLogin(true);
    this.props.handleClose();
  };

  render() {
    const { show, handleClose } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main login-modal">
          <ul className="cd-signin-modal__switcher js-signin-modal-switcher js-signin-modal-trigger">
            <li onClick={() => this.setForm("log-in")}>
              <p>Log In</p>
            </li>
            <li>
              <p onClick={() => this.setForm("register")}>Register</p>
            </li>
          </ul>
          {this.state.formType === "log-in" ? (
            <LoginForm onLoginSuccess={this.handleLoginSuccess} />
          ) : (
            <RegisterForm />
          )}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  }
}
