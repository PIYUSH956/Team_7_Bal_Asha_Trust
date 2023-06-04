import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginImage from "../Images/LoginImage.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) alert("not a valid email ");
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("welcome");
  };


  return (
    <div className="card-container m-5 p-2 text-center">
      <div className="card main_card col-sm-5">
        <div className="card-body" >
          <img src={LoginImage} alt="login" className="img_rotate"/>
          <br /> <br /> <br />
          <TextField
            value={email}
            onChange={updateEmail}
            type="email"
            label= "Enter Email"
            variant="standard"
            color="secondary"
            placeholder="abcd@gmail.com"
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
            placeholder="******"
            focused
          />
          <br /> <br /> <br />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
