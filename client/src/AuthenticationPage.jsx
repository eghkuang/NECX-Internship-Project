import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingPage from "./LandingPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    axios
      .post("/login", { email, password })
      .then(({ data }) => {
        setSubmitted(false);
        console.log("response data: ", data);
        switch (data) {
          case "Login Successful":
            navigate("/LandingPage");
            return;
          case "Email Not Found":
            alert("Email not found. Please try again or sign up.");
            return;
          case "Incorrect Password":
            alert("Password incorrect. Please try again.");
            return;
          default:
            alert("Please try again");
            return;
        }
      })
      .catch((err) => {
        console.log("submit err: ", err);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>Welcome! Please Sign In</h1>
      {submitted && <div>finding user...</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" required onChange={handleEmailChange} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          onChange={handlePasswordChange}
        />

        <button type="submit">Log In</button>
      </form>
      <button type="signup" onClick={handleSignUpButton}>
        Sign Up
      </button>
    </div>
  );
};

export default AuthenticationPage;
