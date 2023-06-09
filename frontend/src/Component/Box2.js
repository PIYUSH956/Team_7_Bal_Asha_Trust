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
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import IconButton from '@mui/material/IconButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Box2 = (props) => {


    const category = props.category;
    const assignedWorkerID = props.assignedWorkerID;
    const childID = props.childID;
    console.log(category)


    const [name, setName] = useState(props.name);
    const [desc, setDesc] = useState(props.desc);
    const [type, setType] = useState(props.type);
    const [part, setPart] = useState(props.part);
    const [step, setStep] = useState(props.step);
    console.log(desc);

    const [value, setValue] = useState(props.value);
    const [date, setDate] = useState(props.date);
    const [status, setStatus] = useState(props.status);

    var state = useSelector((state) => ({ ...state }));



    const handleSubmit = async (e) => {



        console.log("BOX2", name, value, date, status);

       

        if (status == null || date == null || value == null) {
            toast.error("All Field Required");
            return;
        }

        console.log(props.category, props.assignedWorkerID,props.assignedWorkerID);

        try {
            await axios.post("http://localhost:4000/api/update-process", {
                category : props.category,
                assignedWorkerID : props.assignedWorkerID,
                childID:props.childID,
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

            toast.success("Updated Step Details");
        } catch (err) {
            toast.error(err.message);
        }
    }



const updatePDF = async (e) => {

    const val = await convertPdfToBase64(e);
    console.log(val);
    setValue(val);
}

const downloadPDF = (a, b) => {
    console.log(a, b);
    var base64String = value;
    console.log(base64String);
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
}

const boxStyle = {
    // backgroundColor: status == "completed" ? '#382a41' : 'initital', 
     flexDirection: { xs: "column", md: "row" },
         marginX: { xs: "5px", md: "200px" },
         padding: '25px',
   };



return (
    <>
    <ToastContainer/>
    
    <Box sx={boxStyle}>
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        sx={{ padding: "10px", width: "80%", color: "#ff8100" }}
                        value={name}
                        disabled
                        id="outlined-required"
                        label="Name"
                        placeholder="Process Name"
                        focused
                    />
                    {/* <textarea value={pro.name} /> */}
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', height: "50%", marginLeft: '10px', marginTop: '17px', width: "80%" }}>
                    <Button variant="contained" component="label" sx={{bgcolor:'#CD366B' , fontSize:'15px' , ":hover": {
                        bgcolor: "#382A41",
                        color: "white"
                    }}}>
                        {value == null ? "Upload File" : "Uploaded"}
                        <input id="file-upload-button"

                            type="file"

                            hidden
                            disabled={!(state.user.role == "root")}
                            onChange={(e) => { updatePDF(e.target.files[0]) }} />
                    </Button>
                    {/* {value != null && <Typography onClick={(e) => { downloadPDF(value) }} sx={{ marginLeft: '10px', marginTop: '17px' }}>Download</Typography>}    */}
                    {value != null && 
                        <IconButton 
                            onClick={(e) => { downloadPDF(value)}}
                            sx={{ marginLeft: '15px', padding:'0px',
                            }}
                        >
                            <DownloadForOfflineIcon style={{height:'40px', width:'40px', color:'#CD366B'}}/>
                        </IconButton>  }
                </Grid>
            </Grid>
            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        sx={{ padding: "10px", width: "80%", color: "#ff8100" }}
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
                                onChange={(val) => setDate(val)}

                                disabled={!(state.user.role == "root")}
                                format="DD/MM/YYYY"
                                value={dayjs(date)}
                                label="Current status date" />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

            </Grid>
            <Grid sx={{ margin: { xs: '10px', md: '25px' } }} container spacing={3}>
                <Select sx={{ ml: 1, maxHeight: '40px', margin: "35px", width: "75%" }}

                    value={status}
                    disabled={!(state.user.role == "root")}
                    onChange={(e) => setStatus(e.target.value)}
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
    </>
)

}


export default Box2;