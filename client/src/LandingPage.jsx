import React from "react";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  ThemeProvider,
  Container,
  Typography,
} from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();
  const videoId = "no7AlKYYfn0";
  const opts = {
    height: "300",
    width: "600",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  const returnToSignin = () => {
    return navigate("/signin");
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}
      >
        <Button
          variant="outlined"
          sx={{ p: 1, m: 1 }}
          type="signin"
          onClick={returnToSignin}
        >
          LOGOUT
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h2" sx={{ mb: 8, color: "primary.main" }}>
          Howdy!
        </Typography>
        <div>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </Box>
    </Container>
  );
};

export default LandingPage;
