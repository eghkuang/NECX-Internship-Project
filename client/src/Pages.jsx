import React, { useState, useEffect } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AuthenticationPage from "./Components/AuthenticationPage.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import SignUpPage from "./Components/SignUpPage.jsx";

const Pages = () => {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(
    (previousSignedIn) => {
      if (signedIn) navigate("/LandingPage");
      else navigate("/signin");
    },
    [signedIn]
  );

  return (
    <Routes>
      <Route
        path="/signin"
        element={<AuthenticationPage setSignedIn={setSignedIn} />}
      />
      <Route
        path="/signup"
        element={<SignUpPage setSignedIn={setSignedIn} />}
      />
      <Route
        path="/landingPage"
        element={<LandingPage signedIn={signedIn} setSignedIn={setSignedIn} />}
      />
    </Routes>
  );
};

export default Pages;
