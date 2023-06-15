import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingPage from "./LandingPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import {
  Box,
  Button,
  ThemeProvider,
  Container,
  Typography,
  TextField,
} from "@mui/material";

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
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2" sx={{ mt: 8, mb: 2, color: "primary.main" }}>
        Welcome! Please Sign In
      </Typography>
      {submitted && <Typography sx={{ p: 1 }}>finding user...</Typography>}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          type="text"
          id="email"
          required
          placeholder="Email:"
          onChange={handleEmailChange}
          variant="outlined"
          size="small"
          sx={{ p: 1 }}
        />
        <TextField
          fullWidth
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password:"
          onChange={handlePasswordChange}
          variant="outlined"
          size="small"
          sx={{ p: 1 }}
        />
        <Box
          fullWidth
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button sx={{ p: 1, m: 1 }} variant="contained" type="submit">
            Log In
          </Button>
          <Button
            sx={{ p: 1, m: 1 }}
            type="signup"
            onClick={handleSignUpButton}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthenticationPage;
