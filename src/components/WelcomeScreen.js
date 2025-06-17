import React from "react";

export function WelcomeScreen({ onNavigate }) {
  return (
    <>
      <div className="screen welcome-screen">
        <div className="welcome-screen__content">
          <div className="welcome-screen__container">
            <div className="welcome-screen__header">
              <h1 className="welcome-screen__title">Welcome to PopX</h1>
              <p className="welcome-screen__subtitle">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="welcome-screen__actions">
              <button
                onClick={() => onNavigate("register")}
                className="btn btn--primary btn--large"
              >
                Create Account
              </button>

              <button
                onClick={() => onNavigate("login")}
                className="btn btn--secondary btn--large"
              >
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
