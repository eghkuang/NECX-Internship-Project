import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage.jsx";
import LandingPage from "./LandingPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<AuthenticationPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
