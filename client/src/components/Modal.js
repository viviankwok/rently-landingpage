import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const Modal = (props) => {
  const reactCtx = useContext(ReactContext);

  const handleSignOut = (e) => {
    console.log("sign out btn clicked");
    reactCtx.reset();
  };
  return (
    <div className="bg-green-200">
      {/* VALIDATION MESSAGES */}
      <div>
        {props.error === "user not found"
          ? "Enter a valid phone number."
          : props.error === "password mismatch"
          ? "Enter a valid password"
          : ""}
      </div>
      {/* BUTTON */}
      <label
        for="my-modal"
        className="btn modal-open"
        onClick={() => props.handleSignIn()}
      >
        sign in
      </label>
      {/* MODAL */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      {props.loginSuccess ? (
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Login Success</h3>
            <p className="py-4">
              Congratulations, you remembered your password correctly.
            </p>
            <div className="modal-action">
              <label
                for="my-modal"
                className="btn"
                onClick={() => handleSignOut()}
              >
                Sign Out
              </label>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
