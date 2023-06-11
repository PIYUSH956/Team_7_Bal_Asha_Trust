import React, { useState } from 'react';
import { Grid, Avatar , Button, IconButton, Input, TextField, Typography, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import ProcessIcon from '@mui/icons-material/DeveloperBoard';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    centerButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "10vh", // Optional, to center vertically on the screen
    },
  }));


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


export default function PersonalDetails(props) {
    const URL = process.env.REACT_APP_URL;

    const classes = useStyles();

    var state = useSelector((state) => ({ ...state }));
    const navigate = useNavigate();

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

    const handleProcess = () =>{
        navigate(`/process/${props.id}/${props.category}`);
    }

    const handleSchedule = () =>{
        if(state.user.role == "manager" || 
        state.user.role == "admin"){
        navigate(`/schedule/${props.id}/${props.category}`);
        }
    }

    const handleDetail  = () => {
        navigate(`/completed-detail/${props.id}`);
        localStorage.setItem("child-name",props.name);
        localStorage.setItem("case-number",props.caseNumber);
    }

    return (
        <>
        

        {/* {props.status == "completed" ? <button onClick={handleDetail}>Show Detail</button>:<></>} */}
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
                <Grid align='center' sx={{color:'#CD366B',paddingTop: '10px'}}>
                    <Avatar src={props.image} alt="Profile Photo" sx={{ width: 150, height: 150 }} />
                    <Typography variant='h6' fontWeight='bold'>{props.caseNumber}</Typography>
                </Grid>

                <Grid style={nameHolder}  sx={{color:'#CD366B',paddingTop: '10px'}}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h4' fontWeight='bold'>{props.name}</Typography>
                        <Typography style={contentStyle}>{formatString(props.gender)}</Typography>
                        <div className={classes.centerButton}>
                        {props.status == "completed" ? <Button
                                variant="contained"
                                
                                onClick={handleDetail}
                                sx={{
                                bgcolor: "#382A41",
                                fontSize: "15px",
                                ":hover": {
                                    bgcolor: "#CD366B",
                                    color: "white",
                                },
                                }}
                            >
                                Process Overview
                            </Button>:<></>}
                            </div>

                    </Grid>
                    <Grid item xs={12} md={3} sx={{paddingTop: '11px',paddingLeft: '10px'}}>
                        <ProcessIcon onClick={handleProcess}/>
                      {(state.user.role != "root"  &&  (props.status == "assigned" || props.status == "onGoing"))  && <AssignmentTurnedInIcon onClick={handleSchedule}  />  }
                      
                      {(state.user.role != "root"  &&  props.status == "notAssigned") && <AssignmentLateIcon onClick={handleSchedule} />}
                    </Grid>
                </Grid>
                </Box>

                <Grid>
                    <Typography style={headingStyle}>Age</Typography>
                    <Typography style={contentStyle}>{props.age }</Typography>

                    <Typography style={headingStyle}>Date of Birth</Typography>
                    <Typography style={contentStyle}>{formatDate(props.dateOfBirth)}</Typography>

                    <Typography style={headingStyle}>ShelterHome</Typography>
                    <Typography style={contentStyle}>{props.shelter}</Typography>
                    {/* <TextField id="standard-basic" value={props.shelterHome} onChange={(event) => setSelterHome(event.target.value)} variant="standard" multiline maxRows={4} /> */}
                    
                    </Grid>

                <Grid>
                    <Typography style={headingStyle}>District</Typography>
                    <Typography style={contentStyle}>{props.district}</Typography>
                    {/* <TextField id="standard-basic" value={props.district} onChange={(event) => setDistrict(event.target.value)} variant="standard" /> */}
                    
                    <Typography style={headingStyle}>State</Typography>
                    <Typography style={contentStyle}>{props.state}</Typography>
                    {/* <TextField id="standard-basic" value={props.state} onChange={(event) => setState(event.target.value)} variant="standard" /> */}
                
                    <Typography style={headingStyle}>Category</Typography>
                    <Typography style={contentStyle}>{formatString(props.category)}</Typography>
                    
                    </Grid>
            </Box>
        </>
    )
}