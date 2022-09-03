import { React, useState } from "react";
import LoginForm from "./LoginForm";
import userData from "../data/userData";
import Modal from "./Modal";
import ReactContext from "../context/react.context";
import ModalRegister from "./ModalRegister";

const Login = () => {
  const initForm = {
    phoneNumber: "",
    password: "",
  };
  // states
  const [formData, setFormData] = useState(initForm);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState("");

  // reset all fields
  const reset = () => {
    console.log("reset fx activated");
    setFormData(initForm);
    setLoginSuccess(false);
    setError("");
  };

  // handleSignIn btn
  const handleSignIn = () => {
    console.log(`sign in btn clicked with ${JSON.stringify(formData)}`);

    // check if user exists
    let user = userData.find(
      (user) => user.phoneNumber == formData.phoneNumber
    );

    // if user not found
    if (user === undefined) {
      console.log("user not found");
      setError("user not found");
    } else {
      // if user exists, proceed to match password
      console.log(`user exists: ${JSON.stringify(user)}`);
      if (user.password === formData.password) {
        console.log("password matched");
        setLoginSuccess(true);
        setError("");
      } else {
        console.log("password mismatch; login failed");
        setError("password mismatch");
      }
    }
  };

  return (
    <div className="bg-yellow-200">
      <ReactContext.Provider value={{ reset }}>
        Login component
        <LoginForm formData={formData} setFormData={setFormData} />
        <Modal
          handleSignIn={handleSignIn}
          loginSuccess={loginSuccess}
          error={error}
        />
        <div>Don't have an account?</div>
        <ModalRegister />
        {/* loginSuccess state: {JSON.stringify(loginSuccess)}
        <br />
        error state: {JSON.stringify(error)} */}
      </ReactContext.Provider>
    </div>
  );
};

export default Login;
