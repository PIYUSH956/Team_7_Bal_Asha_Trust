import React from "react";
import Grid from '@mui/material/Grid';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import RegisterImage from "../Images/registerCoverPhoto.jpg";
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ChildList from "../Component/ChildList";


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
        <Grid container spacing={3} padding={5} >

<<<<<<< HEAD
        <Grid item xs={12} md={6}>
            <Pie
                options={{
                    responsive: true, // Allow the chart to be responsive
                    maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
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
        <Grid item xs={12} md={6} container
                direction="column"
                alignItems="center"
                justify="center">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="180"
                image={RegisterImage}
                alt="child"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Register New Child
                </Typography>
                <Typography  color="text.secondary">
                TECHNOLOGY MAKING POSSIBLE FOR EVERY CHILD TO BE IN A FAMILY.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button  color="primary" onClick={handleRegistration}>
                    Register
                </Button>
            </CardActions>
            </Card>
        </Grid>
        </Grid>
=======
<Grid item xs={12} md={6}>
    <Pie
        options={{
            responsive: true, // Allow the chart to be responsive
            maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
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
<Grid item xs={12} md={6} container
        direction="column"
        alignItems="center"
        justify="center">
<Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="180"
        image={RegisterImage}
        alt="child"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Register New Child
        </Typography>
        <Typography  color="text.secondary">
        TECHNOLOGY MAKING POSSIBLE FOR EVERY CHILD TO BE IN A FAMILY.
        </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button  color="primary">
            Register
        </Button>
    </CardActions>
    </Card>
</Grid>
</Grid>
<ChildList />
        </>
>>>>>>> d52a5d0a7b800f9b761348fc5b32a76a57f33536
        
    );
    }
      
    export default SocialWorkerDashboard;