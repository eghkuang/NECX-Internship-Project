import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Box,
  Button,
  ThemeProvider,
  Container,
  Typography,
  TextField,
} from "@mui/material";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (userData) => {
    console.log("d: ", userData);
    axios
      .post("/signup", userData)
      .then(({ data }) => {
        console.log("response data : ", data);
        switch (data) {
          case "Account created":
            navigate("/landingPage");
            return;
          case "Email exists":
            alert(
              "Email already in use. Please use another email or sign in. Good luck."
            );
            return;
          default:
            alert("Try again");
            return;
        }
      })
      .catch((err) => {
        console.log("submit err: ", err);
        throw Error(
          "This email is already in use. Please try and login again."
        );
      });
  };

  const returnToSignin = () => {
    return navigate("/signin");
  };

  const required = { required: true };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2" sx={{ mt: 8, color: "secondary.main" }}>
        Sign Up
      </Typography>
      <form
        onSubmit={handleSubmit((data) => {
          setData(JSON.stringify(data));
          handleSignUp(data);
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            {...register("firstName")}
            placeholder="First Name"
            sx={{ mt: 3, p: 1 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            {...register("lastName")}
            placeholder="Last Name"
            sx={{ mt: 0.5, p: 1 }}
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            {...register("email")}
            placeholder="Email"
            sx={{ mt: 0.5, p: 1 }}
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            {...register("password")}
            type="password"
            sx={{ mt: 0.5, p: 1 }}
            inputProps={{ minLength: 6 }}
            placeholder="Password"
            helperText="Password must be 6 characters minimum"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button sx={{ p: 1, m: 2 }} variant="contained" type="submit">
            Submit
          </Button>
          <Button sx={{ p: 1, m: 1 }} type="signin" onClick={returnToSignin}>
            Back to Sign In
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default SignUpPage;
