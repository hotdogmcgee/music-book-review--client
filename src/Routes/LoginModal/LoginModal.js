import React from "react";
import ReactDOM from "react-dom";

import "./LoginModal.css";

// const LoginModal = (props) => {
//     return (
//         <div>
//             <div className="modal-wrapper"
//                 style={{
//                     transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
//                     opacity: props.show ? '1' : '0'
//                 }}>
//                 <div className="modal-header">
//                     <h3>Modal Header</h3>
//                     <span className="close-modal-btn" onClick={props.close}>×</span>
//                 </div>
//                 <div className="modal-body">
//                     <p>
//                         {props.children}
//                     </p>
//                 </div>
//                 <div className="modal-footer">
//                     <button className="btn-cancel" onClick={props.close}>CLOSE</button>
//                     <button className="btn-continue">CONTINUE</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginModal;

// const LoginModal = ({ children, onClose, open }) =>
//   open
//   ? ReactDOM.createPortal(
//     <div className="modal">
//       <div className="modal__close" onClick={onClose}>&times;</div>
//       {children}
//     </div>,
//     document.body
//   )
//   :null

//   export default LoginModal

// function makeTabs() {
//   return (
//     <ul id="myTab" className="nav nav-tabs">
//               <li id="tab1" className=" active tab-style login-shadow "><a href="#signin" data-toggle="tab">Log In</a></li>
//               <li id="tab2" className=" tab-style "><a href="#signup" data-toggle="tab">Sign Up</a></li>

//             </ul>
//   )
// }

const LoginModal = ({ children, onClose, open }) =>
  open
    ? ReactDOM.createPortal(
        <div>
          <div
            className="modal-wrapper"
            style={{
              transform: open ? "translateY(0vh)" : "translateY(-100vh)",
              opacity: open ? "1" : "0"
            }}
          >
            {/* <div className="modal-header">
              <h3>Modal Header</h3>
              <span className="close-modal-btn" onClick={onClose}>
                ×
              </span>
            </div> */}
            <div className="modal-body">
              <div className="RML-login-modal-box">
                <div className="RML-login-modal-box-content">
                  <div className="RML-login-modal-close">X</div>
                  <div className="RML-login-modal-mode">
                    <div className=" active">Sign in</div>
                    <div className="">Sign up</div>
                  </div>
                  <div className="RML-social-modal-content-wrap">
                    <div className="RML-login-modal-form">
                      <div className="RML-form-group">
                        <label htmlFor="form-email">Email</label>
                        <input
                          type="email"
                          className="RML-form-control"
                          id="form-email"
                          name="email"
                          placeholder="Email"
                          defaultValue=""
                        ></input>
                      </div>
                      <div className="RML-form-group">
                        <label htmlFor="form-password">Password</label>
                        <input
                          type="password"
                          className="RML-form-control"
                          id="form-password"
                          name="password"
                          placeholder="Password"
                          defaultValue=""
                        ></input>
                      </div>
                      <button className="RML-btn" id="loginSubmit">
                        Sign in
                      </button>
                      {/* <div class="clearfix"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button className="btn-cancel" onClick={onClose}>
                CLOSE
              </button>
              <button className="btn-continue">CONTINUE</button>
            </div> */}
          </div>
        </div>,
        document.body
      )
    : null;

export default LoginModal;
