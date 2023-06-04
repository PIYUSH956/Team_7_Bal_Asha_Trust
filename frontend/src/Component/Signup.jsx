import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../Css/Header.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginImage from "../Images/LoginImage.jpg";

function Signup() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) alert("not a valid email ");

    console.log("user : " + user);
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("welcome");
  };

  return (
    <Grid
      container
      justifyContent="center"
      textAlign="center"
      style={{ marginTop: "15px" }}
    >
      <Grid item md={6} xs={10}>
        <div className="main_card">
          <img src={LoginImage} alt="login" className="img_rotate" />
          <br /> <br /> <br />
          <TextField
            value={user}
            onChange={updateUser}
            type="text"
            label="Enter User Name"
            variant="standard"
            color="secondary"
            focused
          />
          <br /> <br /> <br />
          <TextField
            value={email}
            onChange={updateEmail}
            type="email"
            label="Enter Email"
            variant="standard"
            color="secondary"
            focused
          />
          <br /> <br /> <br />
          <TextField
            value={password}
            onChange={updatePassword}
            type="password"
            label="Enter Password"
            variant="standard"
            color="secondary"
            focused
          />
          <br /> <br /> <br />
          <Button variant="contained" onClick={handleSubmit}>
            Signup
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default Signup;