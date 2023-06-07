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
import Box from "@mui/material/Box";
import { Label, PhotoCamera } from "@mui/icons-material";
import dayjs from "dayjs";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GppBadTwoToneIcon from "@mui/icons-material/GppBadTwoTone";
import axios from 'axios'; 

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



export default function Temp(props) {
  const [profilePhoto, setProfilePhoto] = useState(props.image == null ? "" : props.image);
  const [profilePhoto2, setProfilePhoto2] = useState(null);
  const [username, setUsername] = useState(props.username);

  const [password, setPassword] = useState("");
  
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
    setProfilePhoto2(convertToBase64(file));
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleUpdate = async (event) => {


   

    try {
      const image = profilePhoto2
      const res = await axios.post("http://localhost:4000/api/update-profile", {id : props._id, username, image, password });
      console.log(res);
    }catch(err){
      console.log(err);
    }


  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);


  }

  const btnStyle = {
    width: "20px",
    height: "20px",
    fontSize: "10px",
  };

  console.log("INSIDE TEMP", props);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 4,
          minHeight: "400px",
        }}
      >

        <Grid align="center" display={"flex"} mr={2}>
          <Grid align="center">
            <Grid sx={{ display: "flex" }}>
              <Avatar
                src={profilePhoto}
                alt="Profile Photo"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <input
              accept="image/*"
              id="profile-photo-input"
              type="file"
              src={profilePhoto}
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />

            <label htmlFor="profile-photo-input">
              <IconButton
                color="primary"
                aria-label="upload photo"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>

            <Button
              style={btnStyle}
              variant="contained"
              color="primary"
              onClick={() => setProfilePhoto(null)}
            >
              Remove
            </Button>
          </Grid>

          <Grid>
            {props.verified ? (
              <VerifiedUserIcon
                color="success"
                sx={{ mt: "25px", mt: "25px", ml: "10px", fontSize: 60 }}
              />
            ) : (
              <GppBadTwoToneIcon
                color="secondary"
                sx={{ color: "red", mt: "25px", ml: "10px", fontSize: 60 }}
              />
            )}
          </Grid>
        </Grid>

        <Grid>
          <Typography mt={2}>Name</Typography>
          <TextField
            id="standard-basic"
            value={props.username}
            onChange={handleUsername}
            variant="standard"
          />
          <Typography mt={2}>Email</Typography>
          <TextField
            disabled
            id="standard-basic"
            value={props.email}
            onChange={handleUsername}
            variant="standard"
          />

          <Typography mt={2}>password</Typography>
          <TextField
            id="standard-basic"
            value={password}
            onChange={handlePassword}
            variant="standard"
          />

          <Typography mt={2}>Role</Typography>
          <TextField
            disabled
            id="standard-basic"
            value={props.role}
            onChange={handleUsername}
            variant="standard"
          />
        </Grid>


        <Button onClick={handleUpdate}> Update </Button>
      </Box>
    </>
  );
}