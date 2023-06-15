import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

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

  const required = { required: true };
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          setData(JSON.stringify(data));
          handleSignUp(data);
        })}
      >
        <input {...register("firstName", required)} placeholder="First Name" />
        <input {...register("lastName", required)} placeholder="Last Name" />
        <input {...register("email", required)} placeholder="Email" />
        <input {...register("password", required)} placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpPage;
