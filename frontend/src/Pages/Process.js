import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import { Card } from '@material-ui/core';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import '../Css/Process.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector } from 'react-redux';

function convertPdfToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };

        reader.onerror = error => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}


export default function Process() {

    const [process, setProcess] = useState([]);

    const [date, setDate] = useState([]);
    const [status, setStatus] = useState([]);
    const [value, setValue] = useState([]);






    var state = useSelector((state) => ({ ...state }));
    const category = useParams().category;
    const childID = useParams().id;
    const assignedWorkerID = state.user._id;

    const [fileName, setFileName] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        const result = await convertPdfToBase64(file);
        setValue(result);
    };

    console.log("P");
    useEffect(() => {

        async function fetchData() {
            try {

                const data = await axios.post("http://localhost:4000/api/get-process-by-category", { category });
                console.log(data.data[0].steps);
                setProcess(data.data[0].steps);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);


    const updateDate = (a, b) => {

        console.log(a, b);

    }
    const updateStatus = (a, b) => {
        console.log(a, b);
    }
    const updateValue = (a, b) => {
        console.log(a, b);

    }


    const updatePDF = (a, b) => {
        console.log(a, b);

    }



    const handleSubmit = (name, type, step, part) => {
        // CASEID, NAME, TYPE, VALUE, STEP, PART, DATE, STATUS
        console.log(name, type, value, step, part, date, status, assignedWorkerID, childID);


    }


    return (<>


        {process.map((pro) => {

            return (<>

                <h3>{"Step " + pro.step}  {"Part " + pro.part}</h3>
                {pro.type == "text" ? <>

                    <Box sx={{
                        flexDirection: { xs: "column", md: "row" },
                        marginX: { xs: "5px", md: "200px" },
                        padding: '25px',
                    }}>
                        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                                        value={pro.name}
                                        disabled
                                        id="outlined-required"
                                        label="Name"
                                        placeholder="Process Name"
                                        focused
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>

                                    <TextField
                                        sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                                        value={value}
                                        onChange={(e) => updateValue(e.target.name, pro.name)}
                                        id="outlined-required"
                                        label="Status"
                                        placeholder="Status"
                                        focused
                                    />
                                    {/* <input type="text"/> */}
                                    {/* Select status from Pending,OnGoing, completed */}
                                </Grid>

                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                onChange={(val) => updateDate(val, pro.name)}
                                                label="Current status date" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                                        value={pro.discussion}
                                        disabled
                                        id="outlined-required"
                                        label="Discription"
                                        placeholder="Discription"
                                        focused
                                    />
                                </Grid>
                            </Grid>
                        </Card>

                        <TextField
                            sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                            value={status}
                            onChange={(e) => updateStatus(e.target.value, pro.name)}
                            id="outlined-required"
                            label="Status"
                            placeholder="Status"
                            focused
                        />




                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => handleSubmit(pro.name, pro.type, pro.step, pro.part)}
                        sx={{ fontSize: "20px", backgroundColor: "#ff8100" }}

                    >
                        Update
                    </Button>



                </> : <>

                    <Box sx={{
                        flexDirection: { xs: "column", md: "row" },
                        marginX: { xs: "5px", md: "200px" },
                        padding: '25px',
                    }}>
                        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>


                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={{ padding: "10px", width: "80%", color: "#ff8100" }}
                                        value={pro.name}
                                        disabled
                                        id="outlined-required"
                                        label="Name"
                                        placeholder="Process Name"
                                        focused
                                    />
                                    {/* <textarea value={pro.name} /> */}
                                </Grid>
                                <Grid item xs={12} md={4} sx={{ display: 'flex', height: "50%", marginLeft: '10px', marginTop: '17px', width: "80%" }}>
                                    <Button variant="contained" component="label">
                                        Upload File
                                        <input id="file-upload-button"
                                            type="file"
                                            hidden
                                            onChange={(e) => { updatePDF(e, pro.name) }} />
                                    </Button>
                                    {fileName && <Typography sx={{ marginLeft: '10px', marginTop: '17px' }}>{fileName}</Typography>}
                                </Grid>
                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker onChange={(val) => updateDate(val, pro.name)} label="Current status date" />
                                    </DemoContainer>
                                </LocalizationProvider>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={{ padding: "10px", width: "80%", color: "#ff8100" }}
                                        value="A"
                                        disabled
                                        id="outlined-required"
                                        label="Discription"
                                        placeholder="Discription"
                                        focused
                                    />
                                    {/* <textarea value={pro.discussion} /> */}
                                </Grid>
                            </Grid>
                        </Card>
                        <TextField
                            sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                            value={status}
                            onChange={(e) => updateStatus(e.target.value, pro.name)}
                            id="outlined-required"
                            label="Status"
                            placeholder="Status"
                            focused
                        />

                    </Box>



                    <Button
                        variant="contained"
                        onClick={() => handleSubmit(pro.name, pro.type, pro.step, pro.part)}
                        sx={{ fontSize: "20px", backgroundColor: "#ff8100" }}

                    >
                        Update
                    </Button>

                </>}
            </>);

        })}




    </>)



}