import React, { useState } from 'react';
import { Grid , Avatar, Button, IconButton, Input, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import profilePhoto from "../Images/LoginImage.jpg"
import { Label, PhotoCamera } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import MenuItem from '@mui/material/MenuItem';

export default function PersonalDetails(){

    const [profilePhoto, setProfilePhoto] = useState(null);
    const [username , setUsername] = useState('Amit Kumar');
    const [dobValue, setDobValue] = useState(dayjs('2022-04-17'));
    const [gender, setGender] = useState("Male");
    const [district , setDistrict] = useState("Thane");
    const [state , setState] = useState("Maharastra");
    const [shelterHome , setSelterHome] = useState("KVB");
    const caseId = 'BAT/101/Amit'

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setProfilePhoto(URL.createObjectURL(file));
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const btnStyle = {
        width : '20px',
        height : '20px',
        fontSize : '10px',
    }

    const genders = [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
        {
          value: 'Other',
          label: 'Other',
        },
      ];

    

    return(
        <>
            <Box sx={{
                display: 'flex',
                flexDirection : {xs: "column" , md:"row"},
                justifyContent: 'space-between',
                gap: 4,
            }}>
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
                    <Typography>{caseId}</Typography>
                </Grid>

                <Grid>
                        <Typography>Name</Typography>
                        <TextField id="standard-basic" value={username} onChange={handleUsername} variant="standard" />
                        <Typography mt={2}>Gender</Typography>
                        <TextField
                            id="outlined-select-gender"
                            select
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            InputLabelProps={{shrink: false}}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        >
                            {genders.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                        <Typography mt={2}>DOB</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']}>
                                <DateField
                                value={dobValue}
                                onChange={(newValue) => setDobValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                </Grid>

                <Grid>
                        <Typography>District</Typography>
                        <TextField id="standard-basic" value={district} onChange={(event) => setDistrict(event.target.value)} variant="standard" />
                        <Typography mt={2}>State</Typography>
                        <TextField id="standard-basic" value={state} onChange={(event) => setState(event.target.value)} variant="standard" />
                        <Typography mt={2}>Shelter Home</Typography>
                        <TextField id="standard-basic" value={shelterHome} onChange={(event) => setSelterHome(event.target.value)} variant="standard"  multiline maxRows={4}/>
                </Grid>
            </Box>
        </>
    )
}