import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import {useNavigate} from 'react-router-dom';
import {Typography, Box} from '@mui/material/';
import ChildList from "../Component/ChildList";


const CaseManagerDashboard = () => {
    const labels1 = ["Completed", "Allotted","On Going"],
    labels2 = ["Andheri", "Borivali","Kurla"],
    datasets = [
    {
      data: [20, 30, 23],
      backgroundColor: ["#003f5c",  "#bc5090", "#ffa600"]
    }
  ];
  
    return (

        <>
        <Box display="flex" justifyContent="center" alignItems="center" paddingTop={3} >
          <Typography variant="h3" align="center" fontWeight="bold">
              Dashboard
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" paddingTop={3} >
          <Typography variant="h4" align="center" fontWeight="bold">
              Children Information
          </Typography>
        </Box>
        <Grid container spacing={3} padding={2} height="50vh">

          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={4}>
              <Pie
                  options={{
                      responsive: true, 
                      maintainAspectRatio: false, 
                      plugins: {
                          title: {
                          display: true,
                          text: 'Child Cases Status',
                          font: {
                              size: 26,
                              weight: 'bold',
                          },
                          },
                      },
                      height: 400, 
                      width: 400,
                  }}
                  data={{
                      labels: labels1,
                      datasets: datasets
                  }}
              />
          </Grid>
          <Grid item xs={12} md={4} >
          <Pie
                  options={{
                      responsive: true, 
                      maintainAspectRatio: false, 
                      plugins: {
                          title: {
                          display: true,
                          text: 'Region wise Child Cases',
                          font: {
                              size: 26,
                              weight: 'bold',
                          },
                          },
                      },
                      height: 400, 
                      width: 400,
                  }}
                  data={{
                      labels: labels2,
                      datasets: datasets
                  }}
              />
            

          </Grid>
          <Grid item xs={12} md={2}></Grid>

        </Grid>
        <Grid paddingX={8} paddingY={5}>
          <ChildList/>
        </Grid>


        <Box display="flex" justifyContent="center" alignItems="center" paddingTop={3} >
          <Typography variant="h4" align="center" fontWeight="bold">
              Social Workers Information
          </Typography>
        </Box>

        <Grid container spacing={3} padding={4} height="50vh" marginBottom={7}>
            <Grid item xs={12} md={6} >
          <Pie
                  options={{
                      responsive: true, 
                      maintainAspectRatio: false, 
                      plugins: {
                          title: {
                          display: true,
                          text: 'Region wise Social Workers',
                          font: {
                              size: 26,
                              weight: 'bold',
                          },
                          },
                      },
                      height: 400, 
                      width: 400,
                  }}
                  data={{
                      labels: labels2,
                      datasets: datasets
                  }}
              />
            

            </Grid>
            <Grid item xs={12} md={6} >

            </Grid>
        </Grid>
        </>      
    );
}
      
export default CaseManagerDashboard;

