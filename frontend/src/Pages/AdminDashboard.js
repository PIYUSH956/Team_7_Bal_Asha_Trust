// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { useNavigate } from 'react-router-dom';

// export default function AdminDashboard() {

//   const navigate = useNavigate();
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

//   const  handleCreateLogin = (e) =>{
//     e.preventDefault();
//     navigate("/signup");
//   }

//   return (

    
//     <>





//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//         <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image = "../src/Images/LoginImage.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Volunteer
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         Alone we can do so little; together we can do so much
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick = {handleCreateLogin}>Create Login</Button>
        
//       </CardActions>
//     </Card>

//         </Grid>
//         <Grid item xs={4}>
//         <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image = "../src/Images/LoginImage.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

//         </Grid>
//         <Grid item xs={4}>
         
//         </Grid>
//         <Grid item xs={8}>
         
//         </Grid>
//       </Grid>
//     </Box>
 


    
   
   
  

//     </>
//   );
// }




import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material/';
import ChildList from "../Component/ChildList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Card } from '@material-ui/core';
import "../Css/Admin.css";

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

function formatString(inputString) {
    // Capitalize the first letter of the string
    const formattedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

    // Add a space before every capital letter
    const finalString = formattedString.replace(/([A-Z])/g, ' $1');

    return finalString;
}



const CaseManagerDashboard = () => {
    const labels1 = ["Assigned", "Not Assigned", "Completed"],
        labels2 = ["Andheri", "Borivali", "Kurla"],
        datasets = [
            {
                data: [20, 30, 23],
                backgroundColor: generateRandomColors(3)

            }
        ];

    const [label1, setLabel1] = useState([]);
    const [label2, setLabel2] = useState([]);
    const [label3, setLabel3] = useState([]);
    const [dataset3, setDataset3] = useState([]);
    const [dataset1, setDataset1] = useState([]);
    const [dataset2, setDataset2] = useState([]);



    var state = useSelector((state) => ({ ...state }));



    useEffect(() => {

        async function fetchData() {
            try {


                function createLabelAndCount1(data) {
                    const districtCounts = {};

                    for (const item of data) {
                        const district = item.district;
                        if (district in districtCounts) {
                            districtCounts[district] += 1;
                        } else {
                            districtCounts[district] = 1;
                        }
                    }
                    const labels = Object.keys(districtCounts);
                    const ldata = Object.values(districtCounts);
                    const backgroundColor = generateRandomColors(labels.length);

                    return {
                        labels: labels,
                        count: [{data:ldata,backgroundColor}]
                    };
                }
                function createLabelAndCount2(data) {
                    const statusCounts = {};

                    for (const item of data) {
                        const status = item.status;
                        if (status in statusCounts) {
                            statusCounts[status] += 1;
                        } else {
                            statusCounts[status] = 1;
                        }
                    }
                    const labels = Object.keys(statusCounts);
                    const ldata = Object.values(statusCounts);
                    const backgroundColor = generateRandomColors(labels.length);

                    return {
                        labels: labels,
                        count: [{data:ldata,backgroundColor}]
                    };
                }
                


                if (state.user != null) {
                    var data = await axios.post("http://localhost:4000/api/get-all-child-data");
                    data = data.data;
                    console.log(data);

                    
                    var pie1 = (createLabelAndCount1(data));
                    var pie2 = (createLabelAndCount2(data));
                    setLabel1(pie1.labels);
                    setLabel2(pie2.labels);
                    setDataset1(pie1.count);
                    setDataset2(pie2.count)

                    var rData = await axios.get("http://localhost:4000/api/get-social-worker");
                    rData = rData.data;

                    var pie3 = (createLabelAndCount1(rData));
                    setLabel3(pie3.labels);
                    setDataset3(pie3.count)



                }
            } catch (err) {
                console.log(err);
            }



        }
        fetchData();
    }
        , []);

    console.log(label1, label2,dataset1,dataset2);

    return (

        <>

        <div style={{minHeight:'100vh', width:'100%', textAlign:'center', padding:'20px'}} className='back'>
        
        <h1 style={{color:'#46039c'}}> Children Information </h1>

        <Grid container spacing={3} padding={2} sx={{justifyContent:'center'}}>
        <Grid item xs={12} md={4} className="gridItem">
          <Card className= "cardItem paper1" style={{borderRadius:'25px'}}>
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
                labels: label2,
                datasets: dataset2,
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="gridItem">
          <Card className= "cardItem paper2"  style={{borderRadius:'25px'}}>
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
                labels: label1,
                datasets: dataset1,
              }}
            />
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={2}></Grid> */}
      </Grid>
            


          <h1 fontWeight="bold" style={{color:'#46039c'}}> Social Workers Information </h1>
            <Grid container spacing={6}  marginBottom={7} sx={{justifyContent:'center'}}>
                <Grid item xs={12} md={4} className="gridItem">
                    <Card className= "cardItem paper3" style={{borderRadius:'25px'}}>
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
                            labels: label3,
                            datasets: dataset3
                        }}
                    />
                  </Card>  
                </Grid>
                <Grid item xs={12} md={4} className="gridItem">
                    <Card className= "cardItem paper4"  style={{borderRadius:'25px'}}>
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
                            labels: label3,
                            datasets: dataset3
                        }}
                    />
                  </Card>  
                </Grid>
            </Grid>

            </div>
        </>
    );
}

export default CaseManagerDashboard;

