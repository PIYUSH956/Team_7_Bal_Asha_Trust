import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import {  Avatar, Button, IconButton} from "@mui/material";
import profilePhoto from "../Images/LoginImage.jpg"
import { Label, PhotoCamera } from '@mui/icons-material';


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

export default function PersonalDetailsForm() {


  const btnStyle = {
    width: '20px',
    height: '20px',
    fontSize: '10px',
}


  const [profilePhoto, setProfilePhoto] = useState(null);
  const handlePhotoChange = async (event) => {
    const file = await convertToBase64(event.target.files[0])
    setProfilePhoto(URL.createObjectURL(event.target.files[0]));
   
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "image",
        value: file
      }
    });
};

  var state = useSelector((state) => ({ ...state }));
  console.log(state);

  const dispatch = useDispatch();

  const childName = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "childName",
        value: e.target.value
      }
    });

  }



  const dobChange = (e) => {

    console.log(e);
    var date = e.$D + "/" + e.$M + "/" + e.$y;
    console.log(date);
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "dateOfBirth",
        value: e
      }
    });
  }

  const districtChange = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "district",
        value: e.target.value
      }
    });

  }

  const stateChange = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "state",
        value: e.target.value
      }
    });

  }

  const shelterChange = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "shelter",
        value: e.target.value
      }
    });

  }

  const genderChange = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "gender",
        value: e.target.value
      }
    });



  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>

      <Grid align='center'>
        <Avatar src={profilePhoto} alt="Profile Photo" sx={{ width: 150, height: 150 }} />
        <input
          accept="image/*"
          id="profile-photo-input"
          type="file"
          onChange={handlePhotoChange}
          style={{ display: 'none' }}
        />

        <label htmlFor="profile-photo-input">
          <IconButton color="primary" aria-label="upload photo" component="span">
            <PhotoCamera />
          </IconButton>
        </label>

        <Button style={btnStyle} variant="contained" color="primary" onClick={() => setProfilePhoto(null)}>
          Remove
        </Button>
      
      </Grid>


      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="Name"
            label="Child Name"
            fullWidth
            value={state.form != null ? state.form.childName : ""}
            variant="standard"
            onChange={childName}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <FormLabel id="dob-picker">Date of Birth</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={state.form != null ? state.form.dateOfBirth : ""} onChange={dobChange} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={genderChange}
            value={state.form != null ? state.form.gender : ""}
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="district"
            name="district"
            label="District"
            fullWidth
            value={state.form != null ? state.form.district : ""}
            onChange={districtChange}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            inputFormat="dd.MM.yyyy"
            fullWidth
            value={state.form != null ? state.form.state : ""}
            onChange={(e) => stateChange(e)}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="shelter"
            name="shelter"
            label="Shelter Home"
            fullWidth
            value={state.form != null ? state.form.shelter : ""}
            onChange={shelterChange}
            variant="standard"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}