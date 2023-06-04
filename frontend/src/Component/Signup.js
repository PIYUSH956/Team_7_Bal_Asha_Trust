import React, { useState } from "react";
import { Avatar, Grid , Paper, Typography } from "@mui/material";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

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
    if (!isValidEmail) alert("Not a valid email ");

    console.log("user : " + user);
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("welcome");
  };


  const paperStyle = {
    padding:20,
    height:'70vh',
    width:280,
    margin:'50px auto',
  }

  const avatarStyle = {backgroundColor:'#518ad2'};

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
            <h2>Sign up</h2>
          </Grid>

          <TextField
            value={user}
            onChange={updateUser} 
            id="standard-basic" 
            variant="standard" 
            label='Name' 
            placeholder="John Doe" 
            className="mt-4"
            fullWidth required/>

          <TextField
            value={email}
            onChange={updateEmail} 
            id="standard-basic" 
            variant="standard" 
            label='Username' 
            placeholder="xyz@email.com" 
            className="mt-3"
            fullWidth required/>

          <TextField 
            value={password}
            onChange={updatePassword}
            id="standard-basic" 
            variant="standard"  
            label='Password' 
            placeholder="********" 
            type="password" 
            className="mt-3"
            fullWidth required/>

          <Button  
            variant="contained" 
            type='submit' 
            onClick={handleSubmit}
            className="mt-4 mb-3" 
            fullWidth>
              Sign in
          </Button>
          <Typography className="">
            <Link to="#">Forget Password ?</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
