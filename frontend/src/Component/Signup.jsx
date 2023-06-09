import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import "../Css/Header.css";
import "../Css/Login.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMediaQuery,useTheme } from '@material-ui/core';
import axios from 'axios';
import UploadImg from "../Images/Upload-img.jpg"
import Backgroundimg from "../Images/Background.jpg";
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import LoginImage from "../Images/LoginImage.jpg"
import Tooltip from '@mui/material/Tooltip';


function Signup() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [role,setRole] = useState("root");
  const [password, setPassword] = useState("");
  const [file,setFile]= useState();
  const [loading, setLoading] = React.useState(false);
  const [img, setImg] = useState(LoginImage);
  const fileInputRef = useRef(null);

  const onImageIconClick = () => {
    fileInputRef.current.click();
  };

  const onImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImg(URL.createObjectURL(selectedFile));
    }
  };

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
  //   <div style={{backgroundImage: `url(${Backgroundimg})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  //   minHeight: "90vh",
  // }}>
  //   <br/> <br/>
  //   <Grid
  //     container
  //     justifyContent="center"
  //     textAlign="center"
  //   >
  //     <Grid item md={6} xs={10}>
  //     <div className="main_card" style={{justifyContent:'center'}}>
  //       <br />
  //       {/* input field modified  */}
  //       <div>
  //       <label htmlFor="fileInput">
  //               <img
  //                 src={img}
  //                 alt=""
  //                 className="img-upload"
  //                 onClick={onImageIconClick}
  //               />
  //             </label>
  //             <input
  //               id="fileInput"
  //               type="file"
  //               ref={fileInputRef}
  //               style={{ display: "none" }}
  //               accept=".jpeg,.png"
  //               onChange={onImageChange}
  //             />
  //     </div>
  //        {/* previous input field */}
  //       {/* <input type = "file" lable="image" accept = ".jpeg ,.png" onChange={(e)=>{setFile(e.target.files[0])}}/> */}
  //         <br /> 
  //         <TextField
  //           value={user}
  //           onChange={updateUser}
  //           type="text"
  //           label="Enter user name"
  //           variant="standard"
  //           color="secondary"
  //           focused
  //         />
  //         <br /> <br />
  //         <TextField
  //           value={email}
  //           onChange={updateEmail}
  //           type="email"
  //           label="Enter email"
  //           variant="standard"
  //           color="secondary"
  //           focused
  //         />
  //         <br /> <br />
  //         <TextField
  //           value={password}
  //           onChange={updatePassword}
  //           type="password"
  //           label="Enter password"
  //           variant="standard"
  //           color="secondary"
  //           focused
  //         />
  //         <br />
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
  //           Signup
  //         </Button>
  //         <br/> <br />
  //       </div>
  //     </Grid>
  //   </Grid>
  //   </div>

  <>
    <div className='main_box' >
        <Grid container
          xs={isMobile ? 12 : 7} md={isMobile ? 6 : 7}
          className='grid-container'
        >
          <Grid
            item
            xs={11}
            md={3}
            className="item-1"
            sx={{justifyContent:'center', color:"#ff8100"}}
          >
            <label htmlFor="fileInput">
              <Tooltip title="Upload Image">
                 <img
                  src={img}
                  alt=""
                  className="img-style2"
                  // onClick={onImageIconClick}
                />
                </Tooltip >
              </label>
              <input
                id="fileInput"
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".jpeg,.png"
                onChange={onImageChange}
              />
          </Grid>

          <Grid item xs={11} md={8} sx={{ textAlign: "center",color:"#ff8100" }}>
            <br />
            <TextField
              sx={{ margin: "10px", width: "80%" }}
              required
              size="small"
              // color="warning"
              value={user}
              onChange={updateUser}
              type="text"
              id="outlined-required"
              label="Enter User Name"
              placeholder="user"
              focused
            />
            <br />
            <TextField
              sx={{ margin: "10px", width: "80%" }}
              required
              size="small"
              // color="warning"
              value={email}
              onChange={updateEmail}
              id="outlined-required"
              type="email"
              label="Enter email"
              placeholder="abcd@gmail.com"
              focused
            />
            <br />
            <TextField
              sx={{ margin: "10px", width: "80%" }}
              required
              size="small"
              // color="warning"
              value={password}
            onChange={updatePassword}
              id="outlined-required"
              type="password"
            label="Enter password"
              placeholder="*****"
              focused
            />
            <br/>
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
              sx={{ fontSize: "15px"}}
            >
              Signup
            </Button>
            <br /> <br />
          </Grid>
        </Grid>
    </div>
  </>
  );
}

export default Signup;