import React from "react";

export function AccountScreen({ onNavigate, formData }) {
  const { fullName, emailAddress } = formData;
  return (
    <div className="screen account-screen">
      <div className="account-screen__container">
        <h1 className="account-screen__title">Account Settings</h1>

        <div className="profile-card">
          <div className="profile-card__content">
            <div className="profile-card__avatar">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="profile-card__image"
              />
            </div>
            <div className="profile-card__info">
              <h2 className="profile-card__name">{fullName}</h2>
              <p className="profile-card__email">{emailAddress}</p>
            </div>
          </div>

          <div className="profile-card__description">
            <p className="profile-card__text">
              Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>

        <button onClick={() => onNavigate("welcome")} className="nav-link">
          ← Back to Welcome
        </button>
      </div>
    </div>
  );
}
