import React, { useState } from 'react';
import { Grid, Avatar, Button, IconButton, Input, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import profilePhoto from "../Images/LoginImage.jpg"
import { Label, PhotoCamera } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/lab';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import MenuItem from '@mui/material/MenuItem';

function formatDate(dateString) {
    if(dateString == null) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
  
    return `${day}/${month}/${year}`;
  }


  

export default function PersonalDetails(props) {

    const [profilePhoto, setProfilePhoto] = useState(null);
    const [username, setUsername] = useState('Amit Kumar');
    const [dobValue, setDobValue] = useState(dayjs('2022-04-17'));
    const [gender, setGender] = useState("Male");
    const [district, setDistrict] = useState("Thane");
    const [state, setState] = useState("Maharastra");
    const [shelterHome, setSelterHome] = useState("KVB");

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setProfilePhoto(URL.createObjectURL(file));
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const btnStyle = {
        width: '20px',
        height: '20px',
        fontSize: '10px',
    }

    const genders = [
        {
            value: 'male',
            label: 'male',
        },
        {
            value: 'female',
            label: 'female',
        },
    ];



    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: "column", md: "row" },
                justifyContent: 'space-between',
                gap: 4,
            }}>
                <Grid align='center'>
                    <Avatar src={props.image} alt="Profile Photo" sx={{ width: 150, height: 150 }} />
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
                    <Typography>{props.caseNumber}</Typography>
                </Grid>

                <Grid>
                    <Typography>Name</Typography>
                    <TextField id="standard-basic" value={props.childName} onChange={handleUsername} variant="standard" />
                    <Typography mt={2}>Gender</Typography>
                    <TextField
                        id="outlined-select-gender"
                        select
                        value={props.gender}
                        onChange={(event) => setGender(event.target.value)}
                        InputLabelProps={{ shrink: false }}
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
                    <Typography mt={2}>Date Of Birth</Typography>
                    <TextField id="standard-basic" value={formatDate(props.dateOfBirth)} onChange={(event) => setDistrict(event.target.value)} variant="standard" />
                   

                </Grid>

                <Grid>
                    <Typography>District</Typography>
                    <TextField id="standard-basic" value={props.district} onChange={(event) => setDistrict(event.target.value)} variant="standard" />
                    <Typography mt={2}>State</Typography>
                    <TextField id="standard-basic" value={props.state} onChange={(event) => setState(event.target.value)} variant="standard" />
                    <Typography mt={2}>ShelterHome</Typography>
                    <TextField id="standard-basic" value={props.shelterHome} onChange={(event) => setSelterHome(event.target.value)} variant="standard" multiline maxRows={4} />
                </Grid>
            </Box>
        </>
    )
}