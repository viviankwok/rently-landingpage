import React from "react";
import { useState } from "react";

const LoginForm = (props) => {
  // monitor input changes => formData
  const handlePhoneChange = (e) => {
    e.preventDefault();
    props.setFormData({ ...props.formData, phoneNumber: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    props.setFormData({ ...props.formData, password: e.target.value });
  };

  return (
    <div className="flex justify-center">
      <form className="login-form">
        {/* INPUT - PHONE NUMBER */}

        <label className="label">
          <span className="label-text">Phone number</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-96 max-w-xs"
          onChange={handlePhoneChange}
          value={props.formData.phoneNumber}
        />

        {/* INPUT - PASSWORD */}
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-96 max-w-xs"
          onChange={handlePasswordChange}
          value={props.formData.password}
        />
      </form>
      {/* formData state: {JSON.stringify(props.formData)}
      <br />
      formData.phoneNumber state: {JSON.stringify(props.formData.phoneNumber)}
      <br />
      formData.password state: {JSON.stringify(props.formData.password)} */}
    </div>
  );
};

export default LoginForm;
