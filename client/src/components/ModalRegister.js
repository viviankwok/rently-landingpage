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
  const [regStatus, setRegStatus] = useState("");

  const handleRegister = () => {
    console.log("create account btn clicked");

    // check if user exists
    let user = userData.find(
      (user) => user.phoneNumber == regFormData.phoneNumber
    );

    // if unique email
    if (user === undefined) {
      console.log("new/unique user");
      setRegStatus("new user");
      userData.push(regFormData);
      console.log(userData);
    } else {
      // if user exists
      setRegStatus("user exists");
    }
    setRegFormData(initRegForm);
  };

  const handleExitReg = () => {
    console.log("exit reg icon clicked");
    setRegFormData(initRegForm);
    setRegStatus("");
  };

  return (
    <div>
      {/* BUTTON  */}
      <div className="flex justify-center">
        <label
          for="my-modal-2"
          className="modal-button font-bold uppercase text-primary hover:text-secondary "
        >
          sign up
        </label>
      </div>

      {/* MODAL */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            for="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-secondary"
            onClick={handleExitReg}
          >
            ✕
          </label>

          <h3 className="font-bold text-4xl flex justify-center">Sign Up</h3>
          <p className="py-4">
            <RegForm
              regFormData={regFormData}
              setRegFormData={setRegFormData}
            />
          </p>
          <div className="modal-action">
            {/* ERROR MESSAGES */}
            <div>
              {regStatus === "user exists" ? (
                <p className="text-error font-bold">
                  This phone number has been taken.
                </p>
              ) : regStatus === "new user" ? (
                <p className="text-success font-bold">Account created.</p>
              ) : (
                ""
              )}
            </div>

            <label
              className="btn bg-primary border-none hover:bg-secondary"
              onClick={handleRegister}
            >
              create account
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
