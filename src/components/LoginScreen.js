import React from "react";

export function LoginScreen({ onNavigate, formData, onInputChange }) {
  const handleLogin = () => {
    onNavigate("account");
  };

  return (
    <>
      <div className="screen login-screen">
        <div className="login-screen__container">
          <div className="login-screen__header">
            <h1 className="login-screen__title">Signin to your PopX account</h1>
            <p className="login-screen__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="form">
            <div className="form__group">
              <label className="form__label">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => onInputChange("email", e.target.value)}
                placeholder="Enter email address"
                className="form__input"
              />
            </div>

            <div className="form__group">
              <label className="form__label">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => onInputChange("password", e.target.value)}
                placeholder="Enter password"
                className="form__input"
              />
            </div>

            <button
              onClick={handleLogin}
              className="btn btn--disabled btn--large"
            >
              Login
            </button>
          </div>

          <button onClick={() => onNavigate("welcome")} className="nav-link">
            ← Back to Welcome
          </button>
        </div>
      </div>{" "}
    </>
  );
}
