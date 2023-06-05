import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../Css/Header.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginImage from "../Images/LoginImage.jpg";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const state = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();
  console.log(state);
  
  if(state.user != null && state.user.role == "root"){
    navigate("/dashboard");
  }
  if(state.user != null && state.user.role == "manager"){
    navigate("/manager-dashboard");
  }
  if(state.user != null && state.user.role == "admin"){
    navigate("/admin-dashboard");
  }



  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) { alert("not a valid email "); return; }
    if (!password || password.length < 6) { alert("not a valid email "); return; }

    try {
      const res = await axios.post("http://localhost:4000/api/login", { email, password });

      const payload = res.data;

      console.log("Payload",payload);
      localStorage.setItem("user-detail",JSON.stringify(payload));

      dispatch({
        type: "LOGGED_IN_USER",
        payload,
      });

      alert("Succesfully Logged In");
      //Role based redirecting  Right now for only root 
      if(payload.role == "root")
      navigate("/dashboard");
      if(payload.role == "manager")
      navigate("/manager-dashboard");
      if(payload.role == "admin")
      navigate("/admin-dashboard");
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Enter Email"
            variant="standard"
            color="secondary"
            placeholder="abcd@gmail.com"
            focused
          />
          <br /> <br /> <br />
          <TextField
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            type="password"
            label="Enter Password"
            variant="standard"
            color="secondary"
            placeholder="**"
            focused
          />
          <br /> <br /> <br />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;