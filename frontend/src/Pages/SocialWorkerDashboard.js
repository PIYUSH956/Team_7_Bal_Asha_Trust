import React from "react";
import Grid from '@mui/material/Grid';
import 'chart.js/auto';
import RegisterImage from "../Images/registerCoverPhoto.jpg";
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material/';
import { Button } from '@mui/material';
import ChildList from "../Component/ChildList";
import { Avatar } from '@material-ui/core';
import { useEffect } from "react";
import { Card } from '@material-ui/core';
import axios from "axios";
import { useSelector } from 'react-redux';
import "../Css/Admin.css";
import { useState } from "react";
import { useRef } from 'react';
import { Pie, getElementAtEvent } from "react-chartjs-2";


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



    var state = useSelector((state) => ({ ...state }));


    const [childData, setChildData] = useState([]);
    const [label1, setLabel1] = useState([]);
    const [dataset1, setDataset1] = useState([]);
    const [label2, setLabel2] = useState([]);
    const [dataset2, setDataset2] = useState([]);





    useEffect(() => {

        async function fetchData() {
            try {
                function createLabelAndCount1(data) {
                    const cases = {};

                    for (const item of data) {
                        if (item.childID == null) continue;
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
                        count: [{ data: ldata, backgroundColor }]
                    };
                }

                function createLabelAndCount2(data) {
                    const cases = {};

                    for (const item of data) {
                        if (item.childID == null) continue;
                        const district = item.childID.district;
                        if (district in cases) {
                            cases[district] += 1;
                        } else {
                            cases[district] = 1;
                        }
                    }
                    const labels = Object.keys(cases);
                    const ldata = Object.values(cases);
                    const backgroundColor = generateRandomColors(labels.length);

                    return {
                        labels: labels,
                        count: [{ data: ldata, backgroundColor }]
                    };
                }

                if (state.user != null) {
                    var data = await axios.post("http://localhost:4000/api/get-assign-case", { assignedWorkerID: state.user._id });
                    data = data.data;




                    setChildData(data);
                    console.log("SOCIAL WORKER DASHBOARD", data);
                    var lbl = createLabelAndCount1(data);
                    var lbl2 = createLabelAndCount2(data);


                    setLabel1(lbl.labels);
                    setDataset1(lbl.count);
                    setLabel2(lbl2.labels);
                    setDataset2(lbl2.count);

                }
            } catch (err) {
                console.log(err);
            }









        }

        fetchData();
    }


        , []);

    const chartRef = useRef();
    const navigate = useNavigate();
    const onClick = (event) => {
        var index = (getElementAtEvent(chartRef.current, event));

        const x = (label1[index[0].index]);
        if (x == "onGoing")
            navigate("/on-going-cases");
        else if (x == "completed")
            navigate("/completed");
        else if (x == "pending")
            navigate("/pending");
    }




    return (

        <>
            <Box display="flex" justifyContent="center" alignItems="center" paddingTop={3} marginBottom={2} >
                <Typography variant="h4" align="center" fontWeight="bold">
                    Cases Information
                </Typography>
            </Box>
            <Grid container spacing={3} padding={2} sx={{ justifyContent: 'center' }} >
                <Grid item xs={12} md={4} sx={{ mb: 4 }} className="gridItem">
                    <Card className="cardItem paper1" onClick={onClick} style={{ borderRadius: '25px' }}>
                        <Pie
                            ref={chartRef}
                            onClick={onClick}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Cases Status',
                                        font: {
                                            size: 26,
                                            weight: 'bold',
                                        },
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    }
                                },
                                height: 1000,
                                width: 1000,
                            }}
                            data={{
                                labels: label1,
                                datasets: dataset1
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sx={{ mb: 4 }} className="gridItem">
                    <Card className="cardItem paper2" style={{ borderRadius: '25px' }}>
                        <Pie
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Region Wise Cases',
                                        font: {
                                            size: 26,
                                            weight: 'bold',
                                        },
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    }
                                },
                                height: 1000,
                                width: 1000,
                            }}
                            data={{
                                labels: label2,
                                datasets: dataset2
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>
            {/* <ChildList data = {childData} /> */}
        </>
    );
}

export default SocialWorkerDashboard;