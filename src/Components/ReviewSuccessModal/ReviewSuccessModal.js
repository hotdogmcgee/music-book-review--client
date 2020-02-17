import React from "react";
import "./ReviewSuccessModal.css";
import { Link } from "react-router-dom";
import { Button } from '../Utils/Utils'

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
          <Link to="/">Go to Home Page</Link>
          <Button onClick={handleClose}>Close</Button>
        </section>
      </div>
    );
  }
}
