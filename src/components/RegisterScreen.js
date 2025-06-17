import React from "react";

export function RegisterScreen({ onNavigate, formData, onInputChange }) {
  const isFormValid = () => {
    const { fullName, phoneNumber, emailAddress, password, isAgency } =
      formData;
    return (
      fullName.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      emailAddress.trim() !== "" &&
      password.trim() !== "" &&
      (isAgency === "yes" || isAgency === "no")
    );
  };

  const handleCreateAccount = () => {
    if (!isFormValid()) {
      alert("Please fill out all required fields before continuing.");
      return;
    }
    onNavigate("account");
  };

  return (
    <div className="screen register-screen">
      <div className="register-screen__container">
        <div className="register-screen__header">
          <h1 className="register-screen__title">Create your PopX account</h1>
        </div>

        <div className="form">
          <div className="form__group">
            <label className="form__label">Full Name*</label>
            <input
              type="text"
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={(e) => onInputChange("fullName", e.target.value)}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label className="form__label">Phone number*</label>
            <input
              type="text"
              placeholder="+91 12345678"
              value={formData.phoneNumber}
              onChange={(e) => onInputChange("phoneNumber", e.target.value)}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label className="form__label">Email address*</label>
            <input
              type="email"
              placeholder="jane@email.com"
              value={formData.emailAddress}
              onChange={(e) => onInputChange("emailAddress", e.target.value)}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label className="form__label">Password *</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => onInputChange("password", e.target.value)}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label className="form__label">Company name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => onInputChange("companyName", e.target.value)}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label className="form__label form__label--radio">
              Are you an Agency?*
            </label>
            <div className="radio-group">
              <label className="radio-group__option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={(e) => onInputChange("isAgency", e.target.value)}
                  className="radio-group__input"
                />
                <span className="radio-group__label">Yes</span>
              </label>
              <label className="radio-group__option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={(e) => onInputChange("isAgency", e.target.value)}
                  className="radio-group__input"
                />
                <span className="radio-group__label">No</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleCreateAccount}
            className="btn btn--primary btn--large btn--submit"
          >
            Create Account
          </button>
        </div>

        <button onClick={() => onNavigate("welcome")} className="nav-link">
          ← Back to Welcome
        </button>
      </div>
    </div>
  );
}
