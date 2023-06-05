import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../Css/Header.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import LoginImage from "../Images/LoginImage.jpg";
import Backgroundimg from "../Images/Background.jpg";
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';


function Signup() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [role,setRole] = useState("root");
  const [password, setPassword] = useState("");
  const [file,setFile]= useState();
  const [loading, setLoading] = React.useState(false);

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const updateUser = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail){ alert("not a valid email "); return;}
    if(!user) {alert("not a valid user"); return;}
    if (!password || password.length < 6 ) {alert("not a valid password"); return;}


    const base64 = await convertToBase64(file);
    console.log("user : " + user);
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("role", role);
    console.log("welcome");

    try{
    const res = await axios.post("http://localhost:4000/api/signup",{username:user,email,password,role,image:base64});
    console.log(res);
    alert("Succesfully signed up");
    }catch(err){
    console.log(err);
    alert(err.response.data.message);
    } finally {
      setLoading(true);
    }


    function convertToBase64(file){
      return new Promise((resolve,reject)=>{
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () =>{
              resolve(fileReader.result)
          };
          fileReader.onerror = (error)=>{
              reject(error);
          }
      })
  }

  };
  return (
    <div style={{backgroundImage: `url(${Backgroundimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "90vh",
  }}>
    <br/> <br/>
    <Grid
      container
      justifyContent="center"
      textAlign="center"
    >
      <Grid item md={6} xs={10}>
      <div className="main_card">
        <br />
        <input type = "file" lable="image" accept = ".jpeg ,.png" onChange={(e)=>{setFile(e.target.files[0])}}/>
          <br /> <br /> <br />
          <TextField
            value={user}
            onChange={updateUser}
            type="text"
            label="Enter user name"
            variant="standard"
            color="secondary"
            focused
          />
          <br /> <br /> <br />
          <TextField
            value={email}
            onChange={updateEmail}
            type="email"
            label="Enter email"
            variant="standard"
            color="secondary"
            focused
          />
          <br /> <br /> <br />
          <TextField
            value={password}
            onChange={updatePassword}
            type="password"
            label="Enter password"
            variant="standard"
            color="secondary"
            focused
          />
          <br /> <br /> <br />
          <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
        <br/>
          <Button variant="contained" onClick={handleSubmit}>
            Signup
          </Button>
          <br/> <br/>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

export default Signup;