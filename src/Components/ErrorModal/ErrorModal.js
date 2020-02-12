import React from 'react'
import './ErrorModal.css'

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
              <p>{error}</p>
            <button onClick={handleClose}>Close</button>
          </section>
        </div>
      );
    }
  }