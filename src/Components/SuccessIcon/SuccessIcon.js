import React from "react";
import './SuccessIcon.scss'


//credit to Petar Stoyanov codepen.io/pepsto
export default function SuccessIcon() {
  return (
    <div className="dummy-positioning d-flex">
      <div className="success-icon">
        <div className="success-icon__tip"></div>
        <div className="success-icon__long"></div>
      </div>
    </div>
  );
}
