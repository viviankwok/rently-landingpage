import React, { useState } from "react";

const RegForm = (props) => {
  // monitor input changes => regFormData
  const handlefirstNameChange = (e) => {
    e.preventDefault();
    props.setRegFormData({ ...props.regFormData, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    e.preventDefault();
    props.setRegFormData({ ...props.regFormData, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    props.setRegFormData({ ...props.regFormData, email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    props.setRegFormData({ ...props.regFormData, phoneNumber: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    props.setRegFormData({ ...props.regFormData, password: e.target.value });
  };

  return (
    <div>
      <form className="login-form">
        {/* INPUT - FIRST NAME */}

        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={handlefirstNameChange}
          value={props.regFormData.firstName}
        />
        {/* INPUT - LAST NAME */}

        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={handleLastNameChange}
          value={props.regFormData.lastName}
        />

        {/* INPUT - EMAIL */}

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={handleEmailChange}
          value={props.regFormData.email}
        />
        {/* INPUT - PHONE NUMBER */}

        <label className="label">
          <span className="label-text">Phone number</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          onChange={handlePhoneChange}
          value={props.regFormData.phoneNumber}
        />

        {/* INPUT - PASSWORD */}
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={handlePasswordChange}
          value={props.regFormData.password}
        />
      </form>
      {/* {JSON.stringify(regFormData)} */}
    </div>
  );
};

export default RegForm;
