import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Button,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import { Label, PhotoCamera } from "@mui/icons-material";
import dayjs from "dayjs";
import VerifiedIcon from '@mui/icons-material/Verified';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from 'axios'; 
import { useTranslation } from "react-i18next";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}

function formatDate(dateString) {
  if(dateString == null) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return `${day}/${month}/${year}`;
}
function formatString(inputString) {
  if(inputString == null) return "";
  const formattedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

  const finalString = formattedString.replace(/([A-Z])/g, ' $1');

  return finalString;
}

const nameHolder ={
  display : 'flex',
}
const headingStyle = {
  color:'#CD366B',
  fontSize:'18px',
  fontWeight:"bolder",
  marginTop: '25px',
}

const contentStyle = {
  color:'gray',
  marginBottom: '15px',
  textAlign:'center'
}

const paperStyle = {
  padding:20,
  width:'80vw',
  margin:'50px auto',
}



export default function Temp(props) {
  var state = useSelector((state) => ({ ...state }));
  const URL = process.env.REACT_APP_URL;

  const [profilePhoto, setProfilePhoto] = useState(state.user.image == null ? "" : state.user.image);
  const [profilePhoto2, setProfilePhoto2] = useState(null);
  const [username, setUsername] = useState(props.username);

  const [password, setPassword] = useState("");
  
  const handlePhotoChange = async(event) => {
    const file = event.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
    console.log(await convertToBase64(file));
    setProfilePhoto2(await convertToBase64(file));
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleUpdate = async (event) => {


   

    try {
      const image = profilePhoto2
      const res = await axios.post(URL + "/update-profile", {id : state.user._id, username, image, password });
      console.log(res);
    }catch(err){
      console.log(err);
    }


  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);


  }

  // const btnStyle = {
  //   width: "20px",
  //   height: "20px",
  //   fontSize: "10px",
  // };

  console.log("INSIDE TEMP", props);

  const {t} = useTranslation();

  return (
    <>
      <Box sx={{
                display: 'flex',
                flexDirection: { xs: "column", md: "row" },
                justifyContent: 'space-between',
                padding:'40px',
                marginRight: '50px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: 'space-around',
                    gap:4,
                    marginTop:'30px',
                }}>
                <Grid align='center'>
                    <Avatar src={props.image} alt="Profile Photo" sx={{ width: 150, height: 150 }} />
                </Grid>

                <Grid style={nameHolder}  sx={{color:'#CD366B',paddingTop: '10px'}}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h4' fontWeight='bold'>{t('Name')}</Typography>
                    </Grid>
                </Grid>
                </Box>

                <Grid>
                    <Typography style={headingStyle}>{t('Email')}</Typography>
                    <Typography style={contentStyle}>{props.email}</Typography>

                    <Typography style={headingStyle}>{t('Password')}</Typography>
                    <TextField variant="standard"></TextField>
                    <Grid sx={{m:2}}>
                      <Button
                        sx={{color:'white' ,bgcolor:'#382A41' , fontSize:'15px' , ":hover": {
                          bgcolor: "#CD366B",
                          color: "white"
                        }}}
                      > {t('Update Password')}</Button>
                    </Grid>
                    </Grid>

                <Grid>
                    <Typography style={headingStyle}>{t('District')}</Typography>
                    <Typography style={contentStyle}>{props.district}</Typography>
                    {/* <TextField id="standard-basic" value={props.district} onChange={(event) => setDistrict(event.target.value)} variant="standard" /> */}
                    
                    <Typography style={headingStyle}>{t('State')}</Typography>
                    <Typography style={contentStyle}>{props.state}</Typography>
                    {/* <TextField id="standard-basic" value={props.state} onChange={(event) => setState(event.target.value)} variant="standard" /> */}
                
                    <Typography style={headingStyle}>{t('Role')}</Typography>
                    <Typography style={contentStyle}>{props.role}</Typography>
                    
                    </Grid>
            </Box>
    </>
  );
  }
//     // <>
//       /*{ <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           justifyContent: "center",
//           gap: 4,
//           minHeight: "400px",
//         }}
//       >

//         <Grid align="center" display={"flex"} mr={2}>
//           <Grid align="center">
//             <Grid sx={{ display: "flex" }}>
//               <Avatar
//                 src={profilePhoto}
//                 alt="Profile Photo"
//                 sx={{ width: 150, height: 150 }}
//               />
//             </Grid>
//             <input
//               accept="image/*"
//               id="profile-photo-input"
//               type="file"
//               src={profilePhoto}
//               onChange={handlePhotoChange}
//               style={{ display: "none" }}
//             />

//             <label htmlFor="profile-photo-input">
//               <IconButton
//                 color="primary"
//                 aria-label="upload photo"
//                 component="span"
//               >
//                 <PhotoCamera />
//               </IconButton>
//             </label>

//             <Button
//               style={btnStyle}
//               variant="contained"
//               color="primary"
//               onClick={() => setProfilePhoto(null)}
//             >
//               Remove
//             </Button>
//           </Grid>

//           <Grid>
//             {props.verified ? (
//               <VerifiedUserIcon
//                 color="success"
//                 sx={{ mt: "25px", mt: "25px", ml: "10px", fontSize: 60 }}
//               />
//             ) : (
//               <GppBadTwoToneIcon
//                 color="secondary"
//                 sx={{ color: "red", mt: "25px", ml: "10px", fontSize: 60 }}
//               />
//             )}
//           </Grid>
//         </Grid>

//         <Grid>
//           <Typography mt={2}>Name</Typography>
//           <TextField
//             id="standard-basic"
//             value={props.username}
//             onChange={handleUsername}
//             variant="standard"
//           />
//           <Typography mt={2}>Email</Typography>
//           <TextField
//             disabled
//             id="standard-basic"
//             value={props.email}
//             onChange={handleUsername}
//             variant="standard"
//           />

//           <Typography mt={2}>password</Typography>
//           <TextField
//             id="standard-basic"
//             value={password}
//             onChange={handlePassword}
//             variant="standard"
//           />

//           <Typography mt={2}>Role</Typography>
//           <TextField
//             disabled
//             id="standard-basic"
//             value={props.role}
//             onChange={handleUsername}
//             variant="standard"
//           />
//         </Grid>


//         <Button onClick={handleUpdate}> Update </Button>
//       </Box> }

//       { <Grid container space={2} style={{minHeight:'400px'}}>
//         <Grid item xs={11} md={5}>
//           <div style={{display:'flex', justifyContent:'center', margin:'10px auto'}}>
//           <Avatar
//                 src={profilePhoto}
//                 alt="Profile Photo"
//                 sx={{ width: 150, height: 150 }}
//               />
//               <input
//               accept="image/*"
//               id="profile-photo-input"
//               type="file"
//               src={profilePhoto}
//               onChange={handlePhotoChange}
//               style={{ display: "none" }}
//             />

            
//             {props.verified ? (
//               <VerifiedUserIcon
//                 color="success"
//                 sx={{ mt: "25px", mt: "25px", ml: "10px", fontSize: 60 }}
//               />
//             ) : (
//               <GppBadTwoToneIcon
//                 color="secondary"
//                 sx={{ color: "red", mt: "25px", ml: "10px", fontSize: 60 }}
//               />
//             )}
//           </div>
//           <div style={{display:'flex', justifyContent:'center', margin:'20px auto'}}>
//           <label htmlFor="profile-photo-input">
//               <IconButton
//                 color="primary"
//                 aria-label="upload photo"
//                 component="span"
//               >
//                 <PhotoCamera />
//               </IconButton>
//             </label>

//             <Button
//               style={{width:'20px', height:'20px', fontSize:'10px'}}
//               variant="contained"
//               color="primary"
//               onClick={() => setProfilePhoto(null)}
//             >
//               Remove
//             </Button>
//             </div>
//         </Grid>
//         <Grid item xs={11} md={5} style={{textAlign:'center'}}>
//         <Typography mt={2}>Name</Typography>
//           <TextField
//             id="standard-basic"
//             value={username}
//             onChange={handleUsername}
//             variant="standard"
//           />
//           <Typography mt={2}>Email</Typography>
//           <TextField
//             disabled
//             id="standard-basic"
//             value={props.email}
//             onChange={handleUsername}
//             variant="standard"
//           />

//           <Typography mt={2}>Name</Typography>
//           <TextField
//             id="standard-basic"
//             value={password}
//             onChange={handlePassword}
//             variant="standard"
//           />

//           <Typography mt={2}>Role</Typography>
//           <TextField
//             disabled
//             id="standard-basic"
//             value={props.role}
//             onChange={handleUsername}
//             variant="standard"
//           />
//           <br/>
//           <Button variant="contained" onClick={handleUpdate} style={{margin:'10px'}}>Update</Button>
//         </Grid>
//         <Grid item xs={11} md={5}>

//         </Grid>
//       </Grid> }*/
//     //</>
// //   );
// // }