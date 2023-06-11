
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



const Box1 = (props) => {



    const category = props.category;
    const URL = process.env.REACT_APP_URL;
    const assignedWorkerID = props.assignedWorkerID;
    const childID = props.childID;
  
    const [name, setName] = useState(props.name);
    const [desc, setDesc] = useState(props.desc);
    const [type, setType] = useState(props.type);
    const [part, setPart] = useState(props.part);
    const [step, setStep] = useState(props.step);
   

    const [value, setValue] = useState(props.value);
    const [date, setDate] = useState(props.date);
    const [status, setStatus] = useState(props.status);

    var state = useSelector((state) => ({ ...state }));



    const handleSubmit = async (pro) => {

        
        console.log(date,value,status,category,assignedWorkerID,childID);

        if (status == null || date == null || value == null) {
            alert("All Field Required");
            return;
        }

        try {
            await axios.post(URL + "/update-process", {
                category,
                assignedWorkerID,
                childID,
                payload: {
                    name,
                    type,
                    value,
                    step,
                    part,
                    date,
                    status
                }
            })
            alert("Updated");
        } catch (err) {
            alert(err.message);
        }
    }



    console.log(value);


    const boxStyle = {
       // backgroundColor: status == "completed" ? '#382a41' : 'initital', 
        flexDirection: { xs: "column", md: "row" },
            marginX: { xs: "5px", md: "200px" },
            padding: '25px',
      };

     
    




    return (
        <Box sx={boxStyle}>
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            sx={{ margin: "10px", width: "80%", color: "#ff8100" }}
                            value={name}
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
                            disabled={!(state.user.role == "root")}
                            onChange={(e) => setValue(e.target.value)}
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
                            value={desc}
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

                                    disabled={!(state.user.role == "root")}
                                    format="DD/MM/YYYY"
                                    value={dayjs(date)}
                                    onChange={(val) => setDate(val)}
                                    label="Current status date" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                    <Select sx={{ ml: 1, maxHeight: '40px', margin: "35px", width: "75%" }}

                        disabled={!(state.user.role == "root")}
                        value={status}
                        onChange={(val) => setStatus(val.target.value)}
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
                        onClick={handleSubmit}
                        sx={{bgcolor:'#382A41' , fontSize:'15px' , ":hover": {
                            bgcolor: "#CD366B",
                            color: "white"
                          }}}
                    >
                        Update
                    </Button>
                </Grid>
            </Card>
        </Box>
    )
}

export default Box1;