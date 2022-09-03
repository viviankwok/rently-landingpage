import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const Modal = (props) => {
  const reactCtx = useContext(ReactContext);

  const handleSignOut = (e) => {
    console.log("sign out btn clicked");
    reactCtx.reset();
  };
  return (
    <div className="flex justify-center">
      {/* VALIDATION MESSAGES */}
      <div className="mt-2">
        {props.error === "user not found" ? (
          <p className="text-error font-bold">Enter a valid phone number.</p>
        ) : props.error === "password mismatch" ? (
          <p className="text-error font-bold">Enter a valid password.</p>
        ) : (
          " "
        )}
        {/* BUTTON */}
        <label
          for="my-modal"
          className="btn modal-open w-56 my-3 bg-accent border-none hover:bg-primary"
          onClick={() => props.handleSignIn()}
        >
          sign in
        </label>{" "}
      </div>
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
