import React from "react";
import "./ReviewSuccessModal.css";
import { Link } from "react-router-dom";

export default class ReviewSuccessModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { show, handleClose } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main review-success-modal">
          <Link to="/">Back to Home Page</Link>
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  }
}
