import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography, MenuItem, Select } from '@mui/material';
import { Card } from '@material-ui/core';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import '../Css/Process.css'
import dayjs from 'dayjs';
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


    const [one, setOne] = useState();

    const [two, setTwo] = useState();

    const [three, setThree] = useState();

    const [four, setFour] = useState();


    const [status1, setStatus1] = useState('onGoing');
    const [status2, setStatus2] = useState('onGoing');

    var objData = [];





    var state = useSelector((state) => ({ ...state }));
    const category = useParams().category;
    const childID = useParams().id;
    const assignedWorkerID = state.user._id;

    const [fileName, setFileName] = useState('');



    useEffect(() => {

        async function fetchData() {
            try {

                const processStep = await axios.post("http://localhost:4000/api/get-process-by-category", { category });
                const processData = await axios.post("http://localhost:4000/api/get-data-in-process", { childID, assignedWorkerID });
                const A = processStep.data[0].steps;
                const B = processData.data.data;
                console.log(A, B);

                for (var itemA in A) {
                    for (var itemB in B) {
                        if (A[itemA].name == B[itemB].name) {
                            A[itemA].value = B[itemB].value;
                            A[itemA].status = B[itemB].status;
                            A[itemA].date = B[itemB].date;
                        }
                    }
                }

                console.log(A);


                console.log(processData);
                setProcess(A);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);






    const handleSubmit = async (pro) => {
        console.log(one, two, three, four);
        const value = pro.type == "pdf" ? (two != null ? two.value : null) : (one != null ? one.value : null);
        const date = three.value;
        const status = four.value;
        console.log(value, date, status);

        try {
            await axios.post("http://localhost:4000/api/update-process", {
                category,
                assignedWorkerID,
                childID,
                payload: {
                    name: pro.name,
                    type: pro.type,
                    value,
                    step: pro.step,
                    part: pro.part,
                    date,
                    status
                }
            })
        } catch (err) {

        }
    }

    const updateNotes = (key, field, value) => {
        console.log(key, value);
        // setOne({
        //     key, field, value
        // });
         const newProcess = []
         process.map((item)=>{
            if(item.name == key){
                item.value = value;
            }
            newProcess.push(item);
        })
        setProcess(newProcess);

    }

    const updatePDF = async (key, field, value) => {
        console.log("A");
        const val = await convertPdfToBase64(value);
        setTwo({
            key, field, value: val
        })
    }

    const updateDate = (key, field, value) => {
        console.log(key, value);
        setThree({
            key, field, value: value.$d
        })

    }

    const updateStatus = (key, field, value) => {
        console.log(key, value);
        setFour({
            key, field, value
        })
        const newProcess = []
        process.map((item)=>{
           if(item.name == key){
               item.status = value;
           }
           newProcess.push(item);
       })
       setProcess(newProcess);

    }

    console.log(process);



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
                                        key={pro.name}
                                        sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                                        value={pro.value}
                                        onChange={(e) => updateNotes(pro.name, "notes", e.target.value)}
                                        id="outlined-required"
                                        label="Notes"
                                        placeholder="Notes"
                                        focused
                                    />
                                </Grid>
                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={{ margin: "10px", width: "80%" }}
                                        value={pro.discussion}
                                        disabled
                                        id="outlined-required"
                                        label="Discription"
                                        placeholder="Discription"
                                        focused
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer sx={{ marginX: "10px", width: "80%" }} components={['DatePicker']}>
                                            <DatePicker
                                                key={pro.name}
                                                value={dayjs(pro.date)}
                                                onChange={(val) => updateDate(pro.name, "date", val)}
                                                label="Current status date" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                                <Select sx={{ ml: 1, maxHeight: '40px', margin: "35px", width: "75%" }}
                                    key={pro.name}
                                    value={pro.status}
                                    onChange={(val) => updateStatus(pro.name, "status", val.target.value)}
                                >
                                    <MenuItem value='onGoing' >
                                        Ongoing
                                    </MenuItem>
                                    <MenuItem value='completed'>
                                        Completed
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Button
                                    variant="contained"
                                    onClick={() => handleSubmit(pro)}
                                    sx={{ fontSize: "20px", backgroundColor: "#ff8100" }}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Card>
                    </Box>

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
                                            key={pro.name}
                                            type="file"
                                            hidden
                                            onChange={(e) => { updatePDF(pro.name, "notes", e.target.files[0]) }} />
                                    </Button>
                                    {fileName && <Typography sx={{ marginLeft: '10px', marginTop: '17px' }}>{fileName}</Typography>}
                                </Grid>
                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
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
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer sx={{ marginX: "10px", width: "80%" }} components={['DatePicker']}>
                                            <DatePicker
                                                onChange={(val) => updateDate(pro.name, "date", val)}
                                                key={pro.name}
                                                value={dayjs(pro.date)}
                                                label="Current status date" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Grid>

                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                                <Select sx={{ ml: 1, maxHeight: '40px', margin: "35px", width: "75%" }}
                                    key={pro.name}
                                    value={pro.status}
                                    onChange={(val) => updateStatus(pro.name, "status", val.target.value)}
                                >
                                    <MenuItem value='onGoing' >
                                        Ongoing
                                    </MenuItem>
                                    <MenuItem value='completed'>
                                        Completed
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid sx={{ margin: { xs: '10px', md: '25px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Button
                                    variant="contained"
                                    onClick={() => handleSubmit(pro)}
                                    sx={{ fontSize: "20px", backgroundColor: "#ff8100" }}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Card>
                    </Box>


                </>}
            </>);

        })}




    </>)



}