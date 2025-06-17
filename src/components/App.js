import React, { useState } from "react";
import "../index.css";
import { WelcomeScreen } from "./WelcomeScreen";
import { LoginScreen } from "./LoginScreen";
import { AccountScreen } from "./AccountScreen";
import { RegisterScreen } from "./RegisterScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    emailAddress: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: "yes",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case "login":
        return (
          <LoginScreen
            onNavigate={handleNavigate}
            formData={formData}
            onInputChange={handleInputChange}
          />
        );
      case "register":
        return (
          <RegisterScreen
            onNavigate={handleNavigate}
            formData={formData}
            onInputChange={handleInputChange}
          />
        );
      case "account":
        return (
          <AccountScreen onNavigate={handleNavigate} formData={formData} />
        );
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />;
    }
  };

  return <div className="app">{renderScreen()}</div>;
}

export default App;
