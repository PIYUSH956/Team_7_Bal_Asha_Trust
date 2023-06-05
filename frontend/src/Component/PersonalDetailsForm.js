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
import { useDispatch,useSelector } from 'react-redux';

export default function PersonalDetailsForm() {



  var state = useSelector((state) => ({ ...state }));
  console.log(state);

  const dispatch = useDispatch();

  const childName = (e)=>{

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload:{
          key:"childName",
          value:e.target.value
      }
  });

  }



  const dobChange = (e)=>{

    console.log(e);
    var date = e.$D + "/" + e.$M + "/" + e.$y;
    console.log(date);
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload:{
          key:"dateOfBirth",
          value:e
      }
  });
  }

  const districtChange = (e)=>{

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload:{
          key:"district",
          value:e.target.value
      }
  });
    
  }

  const stateChange = (e)=>{

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload:{
          key:"state",
          value:e.target.value
      }
  });
    
  }

  const shelterChange = (e) =>{

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload:{
          key:"shelter",
          value:e.target.value
      }
  });

  }

  const genderChange = (e) =>{

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload:{
          key:"gender",
          value:e.target.value
      }
  });
   
  }  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="Name"
            label="Child Name"
            fullWidth
            value={state.form != null ? state.form.childName:""}
            variant="standard"
            onChange={childName}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <FormLabel id="dob-picker">Date of Birth</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={state.form != null ? state.form.dateOfBirth : ""}  onChange={dobChange} />
          </LocalizationProvider>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={genderChange}
            value={state.form != null ? state.form.gender:""}
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
            value={state.form != null ? state.form.district:""}
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
            value={state.form != null ? state.form.state:""}
            onChange={(e)=>stateChange(e)}
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
            value={state.form != null ? state.form.shelter:""}
            onChange={shelterChange}
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}