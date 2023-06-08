import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography} from '@mui/material';
import { Card } from '@material-ui/core';
import TextField from "@mui/material/TextField";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';

  

export default function Process() {
    const id = "";
    const category = "";
    const [process, setProcess] = useState([]);
    const catg = "abandond";  /////useParams().id;

    const [fileName, setFileName] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
    };

    useEffect(() => {

        async function fetchData() {
            try {

                const data = await axios.post("http://localhost:4000/api/get-process-by-category", { category: catg });
                console.log(data.data[0].steps);
                setProcess(data.data[0].steps);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);


    return (<>


        {process.map((pro) => {

            return (<>
                {pro.type == "text" ? <>

                <Box sx={{
                    flexDirection: { xs: "column", md: "row" },
                    marginX: {xs: "5px", md: "200px"},
                    padding: '25px',
                }}>
                    <Card sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                        <Grid sx={{ margin: {xs: '10px', md:'25px'}}} container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    sx={{ margin: "10px", width: "80%", color:"#ff8100" }}
                                    value={pro.name}
                                    id="outlined-required"
                                    label="Name"
                                    placeholder="Process Name"
                                    focused
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>

                                <TextField
                                    sx={{ margin: "10px", width: "80%", color:"#ff8100" }}
                                    id="outlined-required"
                                    label="Type"
                                    placeholder="Type"
                                    focused
                                />
                                {/* <input type="text"/> */}
                                {/* Select status from Pending,OnGoing, completed */}
                            </Grid>
                            
                        </Grid>
                        <Grid sx={{ margin: {xs: '10px', md:'25px'}}} container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <DatePicker label="Basic date picker" />
                                {/* <input type="date" /> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    sx={{ margin: "10px", width: "80%", color:"#ff8100" }}
                                    value={pro.discussion}
                                    id="outlined-required"
                                    label="Discription"
                                    placeholder="Discription"
                                    focused
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
                
                {/* <textarea value={pro.name} />
                <textarea value={pro.discussion} />
                <input type="text" /> */}
                {/* Select status from Pending,OnGoing, completed */}
                {/* <input type="date" />
                <br></br> */}
                
                

                </> : <>

                <Box sx={{
                    flexDirection: { xs: "column", md: "row" },
                    marginX: {xs: "5px", md: "200px"},
                    padding: '25px',
                }}>
                    <Card sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                        <Grid sx={{ margin: {xs: '10px', md:'25px'}}} container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    sx={{ padding: "10px", width: "80%", color:"#ff8100" }}
                                    value={pro.name}
                                    id="outlined-required"
                                    label="Name"
                                    placeholder="Process Name"
                                    focused
                                />
                                {/* <textarea value={pro.name} /> */}
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ display:'flex', height:"50%", marginLeft:'10px', marginTop:'17px', width: "80%"}}>
                                <Button variant="contained" component="label">
                                    Upload File
                                    <input id="file-upload-button"
                                        type="file"
                                        hidden
                                        onChange={handleFileUpload}/>
                                </Button>
                                {fileName && <Typography sx={{marginLeft:'10px', marginTop:'17px'}}>{fileName}</Typography>}
                            </Grid>
                        </Grid>
                        <Grid sx={{ margin: {xs: '10px', md:'25px'}}} container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <input type="date" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    sx={{ padding: "10px", width: "80%", color:"#ff8100" }}
                                    value={pro.discussion}
                                    id="outlined-required"
                                    label="Discription"
                                    placeholder="Discription"
                                    focused
                                />
                                {/* <textarea value={pro.discussion} /> */}
                            </Grid>
                        </Grid>
                    </Card>
                </Box>

                {/* <textarea value={pro.name} />
                <textarea value={pro.discussion} />
                <input type="file" /> */}
                {/* Select status from Pending,OnGoing, completed */}
                {/* <input type="date" />
                <br></br> */}



                </>}
            </>);

        })}




    </>)



}