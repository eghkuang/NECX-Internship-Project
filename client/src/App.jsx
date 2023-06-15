import React, { useState, useEffect } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import AuthenticationPage from "./Components/AuthenticationPage.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import SignUpPage from "./Components/SignUpPage.jsx";
import Pages from "./Pages.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#013e87",
    },
    secondary: {
      main: "#2e74c9",
    },
    background: {
      main: "#edf2f4",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Router>
        <Pages />
      </Router>
    </Container>
  </ThemeProvider>
);
export default App;
