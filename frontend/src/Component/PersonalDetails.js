import React, { useState } from 'react';
import { Grid, Avatar , Button, IconButton, Input, TextField, Typography, Paper } from "@mui/material";
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

    const headingStyle = {
        color:'gray',
        fontSize:'18px',
        fontWeight:"bolder",
    }

    const contentStyle = {
        color:'gray',
    }

    const paperStyle = {
        padding:20,
        width:'80vw',
        margin:'50px auto',
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: "column", md: "row" },
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: 'space-around',
                    gap:4,
                }}>
                <Grid align='center'>
                    <Avatar src={props.image} alt="Profile Photo" sx={{ width: 150, height: 150 }} />
                </Grid>

                <Grid>
                    <Typography variant='h4' fontWeight='bold' sx={{color:'purple'}}>John Fernandis</Typography>
                    <Typography style={contentStyle} mt={2}>Male</Typography>
                    <Typography style={contentStyle}>23/07/2000</Typography>
                </Grid>
                </Box>

                <Grid>
                    <Typography style={headingStyle}>District</Typography>
                    <Typography style={contentStyle}>Mumbai</Typography>
                    {/* <TextField id="standard-basic" value={props.district} onChange={(event) => setDistrict(event.target.value)} variant="standard" /> */}
                    <Typography style={headingStyle} mt={5}>State</Typography>
                    <Typography style={contentStyle}>Maharastra</Typography>
                    {/* <TextField id="standard-basic" value={props.state} onChange={(event) => setState(event.target.value)} variant="standard" /> */}
                </Grid>

                <Grid>
                    <Typography style={headingStyle}>ShelterHome</Typography>
                    <Typography style={contentStyle}>KVB Trust</Typography>
                    {/* <TextField id="standard-basic" value={props.shelterHome} onChange={(event) => setSelterHome(event.target.value)} variant="standard" multiline maxRows={4} /> */}
                </Grid>
            </Box>
        </>
    )
}