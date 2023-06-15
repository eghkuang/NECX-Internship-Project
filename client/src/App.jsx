import React from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage.jsx";
import LandingPage from "./LandingPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#013e87",
    },
    secondary: {
      main: "#2e74c9",
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Routes>
            <Route path="/signin" element={<AuthenticationPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/landingPage" element={<LandingPage />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
