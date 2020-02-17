import React from 'react'
import './ErrorModal.css'
import { Button } from '../Utils/Utils'

export default class ErrorModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
  
    render() {
      const { show, handleClose, error } = this.props;
      const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";
      return (
        <div className={showHideClassName}>
          <section className="modal-main error-modal">
            <div className="error-container">              <p>{error}</p></div>

            <Button onClick={handleClose}>Close</Button>
          </section>
        </div>
      );
    }
  }