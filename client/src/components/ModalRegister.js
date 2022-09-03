import { React, useState } from "react";
import RegForm from "./RegForm";
import userData from "../data/userData";

const ModalRegister = () => {
  const initRegForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const [regFormData, setRegFormData] = useState(initRegForm);

  const handleRegister = () => {
    console.log("create account btn clicked");
    userData.push(regFormData);
    console.log(userData);
    setRegFormData(initRegForm);
  };

  const handleExitReg = () => {
    console.log("exit reg icon clicked");
    setRegFormData(initRegForm);
  };

  return (
    <div>
      {/* BUTTON  */}
      <label
        for="my-modal-2"
        className="modal-button font-bold uppercase text-primary hover:text-secondary "
      >
        sign up
      </label>

      {/* MODAL */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            for="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={handleExitReg}
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Sign Up</h3>
          <p className="py-4">
            <RegForm
              regFormData={regFormData}
              setRegFormData={setRegFormData}
            />
          </p>
          <div className="modal-action">
            <label for="my-modal-2" className="btn" onClick={handleRegister}>
              create account
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
