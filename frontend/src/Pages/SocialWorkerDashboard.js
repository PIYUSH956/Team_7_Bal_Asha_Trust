import React from "react";
import Grid from '@mui/material/Grid';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import RegisterImage from "../Images/registerCoverPhoto.jpg";
import {useNavigate} from 'react-router-dom';
import {Typography, Box} from '@mui/material/';
import { Button } from '@mui/material';
import ChildList from "../Component/ChildList";
import { Avatar } from '@material-ui/core';


const SocialWorkerDashboard = () => {
    const labels = ["Completed", "Allotted","On Going"],
    datasets = [
    {
      data: [20, 30, 23],
      backgroundColor: ["#003f5c",  "#bc5090", "#ffa600"]
    }
  ];
  const navigate = useNavigate();


  const handleRegistration = (e) =>{
      e.preventDefault();
      navigate("/child-data-form");

  }
    return (

        <>
        <Box display="flex" justifyContent="center" alignItems="center" paddingTop={3} >
      <Typography variant="h3" align="center" fontWeight="bold">
        Dashboard
      </Typography>
    </Box>
        <Grid container spacing={3} padding={2} >
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={4}>
            <Pie
                options={{
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                        display: true,
                        text: 'Number of child cases',
                        font: {
                            size: 26,
                            weight: 'bold',
                        },
                        },
                    },
                    height: 1000, 
                    width: 1000,
                }}
                data={{
                    labels: labels,
                    datasets: datasets
                }}
            />
        </Grid>
        <Grid item xs={12} md={4} container
            direction="column"
            alignItems="center"
            justify="center">

            <Avatar
                alt="Profile Picture"
                src={RegisterImage}
                style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                }}
            />
            <br/>
            <Button variant="contained" onClick={handleRegistration} >
                Register New Child
            </Button>

        </Grid>
        <Grid item xs={12} md={2}></Grid>
        </Grid>
        <ChildList />
        </>      
    );
}
      
export default SocialWorkerDashboard;
