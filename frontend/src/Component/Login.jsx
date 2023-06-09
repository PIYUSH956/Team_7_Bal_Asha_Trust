import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../Css/Header.css";
import "../Css/Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginImage from "../Images/LoginImage.jpg";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Backgroundimg from "../Images/Background.jpg";
import Checkbox from "@mui/material/Checkbox";
import { useMediaQuery,useTheme } from '@material-ui/core';
import img1 from "../Images/loginphoto.jpg";
import Box from "@mui/material/Box";

import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import { borderColor } from "@mui/system";


function Login() {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const state = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();
  console.log(state);
  
  if(state.user != null){
    navigate("/dashboard");
  }



  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) { alert("not a valid email "); return; }
    if (!password || password.length < 6) { alert("not a valid email "); return; }

    try {
      setLoading(true);
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
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      if(err.resoonse == null){
        alert("No Internet Connection");
      }else{
      alert(err.response.data.message);
    } 
  } finally {
    setLoading(false);
  }

  };

  // return (
  //   <div style={{backgroundImage: `url(${Backgroundimg})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  //   minHeight: "90vh",
  // }}>
  // {/* <div> */}

  //     <br/> <br/>
  //     <Grid
  //     container
  //     justifyContent="center"
  //     textAlign="center"
  //   >
  //     <Grid item md={6} xs={10}>
  //       <div className="main_card">
  //         <img src={LoginImage} alt="login" className="img_rotate" />
  //         <br /> <br />
  //         <TextField
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           type="email"
  //           label="Enter Email"
  //           variant="standard"
  //           color="secondary"
  //           placeholder="abcd@gmail.com"
  //           focused
  //         />
  //         <br /> <br /> <br />
  //         <TextField
  //           value={password}
  //           onChange={(e) => { setPassword(e.target.value) }}
  //           type="password"
  //           label="Enter Password"
  //           variant="standard"
  //           color="secondary"
  //           placeholder="**"
  //           focused
  //         />
  //         <br /> <br /> <br />
  //         <Fade
  //         in={loading}
  //         style={{
  //           transitionDelay: loading ? '800ms' : '0ms',
  //         }}
  //         unmountOnExit
  //       >
  //         <CircularProgress />
  //       </Fade>
  //       <br/>
  //         <Button variant="contained" onClick={handleSubmit}>
  //         Login
  //         </Button>
  //         <br/> <br/>
  //       </div>
  //     </Grid>
  //   </Grid>
  //   </div>
  // );

  return (
    <>
      <div
      className='main_box' style={{minHeight:'100vh'}}
      >
        <Grid container
          xs={isMobile ? 12 : 7} md={isMobile ? 6 : 7}
          className='grid-container'
          
        >
          <Grid
            item
            xs={11}
            md={6}
            className="item-1"
          >
            <img
              src={img1}
              alt="child-img"
              className="img-style"
            />
          </Grid>

          <Grid item xs={11} md={6} sx={{ textAlign: "center", color:"#ff8100"}}>
            <br />
            <TextField
              sx={{margin: "10px", width: "80%", color:"#ff8100" }}
              // color="warning"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-required"
              label="Email"
              placeholder="abcd@gmai.com"
              focused
            />
            <br />
            <TextField
              sx={{ margin: "10px", width: "80%", color:"#ff8100" }}
              // color="warning"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="outlined-required"
              label="Password"
              type="password"
              placeholder="*****"
              focused
            />
            <br />
            <Grid
              item
              className="item-2"
            >
              <span> <input type ="checkbox" /> Remember Me </span>
              <span>
                <a href="">Forget Password</a>
              </span>
            </Grid>
            <br />
            <Fade
              in={loading}
              style={{
                transitionDelay: loading ? "800ms" : "0ms",
              }}
              // color="warning"
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
            <br />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ fontSize: "20px"}}
            >
              Login
            </Button>
            <br /> <br />
          </Grid>
        </Grid>
      </div>
    </>
  );

}

export default Login;