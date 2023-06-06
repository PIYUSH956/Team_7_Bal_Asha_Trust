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
import { useEffect } from "react";
import axios from "axios";
import {useSelector} from 'react-redux';
import { useState } from "react";


const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        colors.push(color);
    }
    return colors;
};


const SocialWorkerDashboard = () => {
    const labels = ["Completed", "Allotted","On Going"],
    datasets = [
    {
      data: [20, 30, 23],
      backgroundColor: ["#003f5c",  "#bc5090", "#ffa600"]
    }
  ];
  const navigate = useNavigate();


  var state = useSelector((state) => ({ ...state }));


  const [childData,setChildData] = useState([]);
  const [label1, setLabel1] = useState([]);
  const [dataset1, setDataset1] = useState([]);


  const handleRegistration = (e) =>{
      e.preventDefault();
      navigate("/child-data-form");
  }


  useEffect(() => {

    async function fetchData() {
        try {


            function createLabelAndCount1(data) {
                const cases = {};

                for (const item of data) {
                    const status = item.childID.status;
                    if (status in cases) {
                        cases[status] += 1;
                    } else {
                        cases[status] = 1;
                    }
                }
                const labels = Object.keys(cases);
                const ldata = Object.values(cases);
                const backgroundColor = generateRandomColors(labels.length);

                return {
                    labels: labels,
                    count: [{data:ldata,backgroundColor}]
                };
            }

            if (state.user != null) {
                var data = await axios.post("http://localhost:4000/api/get-assign-case",{assignedWorkerID:state.user._id});
                data = data.data;
                setChildData(data);
                var lbl = createLabelAndCount1(data);


                setLabel1(lbl.labels);
                setDataset1(lbl.count);

            } 
        } catch (err) {
            console.log(err);
        }



    }
    fetchData();
}
    , []);


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
                    labels: label1,
                    datasets: dataset1
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
        <ChildList data = {childData} />
        </>      
    );
}
      
export default SocialWorkerDashboard;