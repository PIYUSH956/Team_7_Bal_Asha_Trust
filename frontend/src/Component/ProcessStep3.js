import { useState } from "react";
import { Grid, Paper, Typography ,Select , MenuItem , Box, Button, TextField, Input} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';

const paperStyle = {
    padding:20,
    width:'60vw',
    margin:'20px auto',
}

const styleTypo = {
    fontSize : '13px',
}

export default function ProcessStep3 (){
    const [submitCaseDate , setSubmitCaseDate] = useState('');
    const [lfa , setLFA] = useState('');
    const [lfaDate , setLFADate] = useState('');
    const [submitLatterDate , setSubmitLatterDate] = useState('');
    const [status1, setStatus1] = useState('pending');
    const [status2, setStatus2] = useState('pending');
    const [status3, setStatus3] = useState('pending');

    const [backgroundColor1 , setbackgroundColor1] = useState('red');
    const [backgroundColor2 , setbackgroundColor2] = useState('red');
    const [backgroundColor3 , setbackgroundColor3] = useState('red');

    const handleStatus1 = (event) => {
        setStatus1(event.target.value);
        statusColor1(event);
    };

    const handleStatus2 = (event) => {
        setStatus2(event.target.value);
        statusColor2(event);
    };

    const handleStatus3 = (event) => {
        setStatus3(event.target.value);
        statusColor3(event);
    };

    const statusColor1 = (event) => {
        switch (event.target.value) {
            case 'pending':
                setbackgroundColor1('red');
                break;
            case 'ongoing':
                setbackgroundColor1('yellow');
                break;
            case 'completed':
                setbackgroundColor1('green');
                break;
            default:
                setbackgroundColor1('');
        }
    }

    const statusColor2 = (event) => {
        switch (event.target.value) {
            case 'pending':
                setbackgroundColor2('red');
                break;
            case 'ongoing':
                setbackgroundColor2('yellow');
                break;
            case 'completed':
                setbackgroundColor2('green');
                break;
            default:
                setbackgroundColor2('');
        }
    }

    const statusColor3 = (event) => {
        switch (event.target.value) {
            case 'pending':
                setbackgroundColor3('red');
                break;
            case 'ongoing':
                setbackgroundColor3('yellow');
                break;
            case 'completed':
                setbackgroundColor3('green');
                break;
            default:
                setbackgroundColor3('');
        }
    }

    return(
        <>
            <Grid>

                    <Box sx={{mt:2}}>
                        <h6>Submit Case to CWC</h6>
                        <Grid sx={{pl:2}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={submitCaseDate}
                                    onChange={(e) => setSubmitCaseDate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} 
                                />
                            </LocalizationProvider>
                            <Select value={status1}
                                    onChange={handleStatus1} 
                                    sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor1}}>
                                    <MenuItem selected={true} value='pending'  style={{ backgroundColor: 'red' }}>
                                        Pending
                                    </MenuItem>
                                    <MenuItem value='ongoing'  style={{ backgroundColor: 'yellow' }}>
                                        Ongoing
                                    </MenuItem>
                                    <MenuItem value='completed' style={{ backgroundColor: 'green' }}>
                                        Completed
                                    </MenuItem>
                                </Select>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>Receive LFA</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>CWC will issue the LFA to the CCI/SSA</Typography>
                            <Input 
                                value={lfa}
                                onChange={(e) => setLFA(e.target.value)}
                                type="file" 
                                sx={{ mr : 2 , mb:1, maxWidth : '200px'}}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={lfaDate}
                                    onChange={(e) => setLFADate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} 
                                />
                            </LocalizationProvider>
                            <Select value={status2}
                                    onChange={handleStatus2} 
                                    sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor2}}>
                                    <MenuItem selected={true} value='pending'  style={{ backgroundColor: 'red' }}>
                                        Pending
                                    </MenuItem>
                                    <MenuItem value='ongoing'  style={{ backgroundColor: 'yellow' }}>
                                        Ongoing
                                    </MenuItem>
                                    <MenuItem value='completed' style={{ backgroundColor: 'green' }}>
                                        Completed
                                    </MenuItem>
                                </Select>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>Submit Letter</h6>
                        <Grid sx={{pl:2}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={submitLatterDate}
                                    onChange={(e) => setSubmitLatterDate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                            <Select value={status3}
                                    onChange={handleStatus3} 
                                    sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor3}}>
                                    <MenuItem selected={true} value='pending'  style={{ backgroundColor: 'red' }}>
                                        Pending
                                    </MenuItem>
                                    <MenuItem value='ongoing'  style={{ backgroundColor: 'yellow' }}>
                                        Ongoing
                                    </MenuItem>
                                    <MenuItem value='completed' style={{ backgroundColor: 'green' }}>
                                        Completed
                                    </MenuItem>
                                </Select>
                        </Grid>
                    </Box>

                    <Grid align='center' sx={{mt:4}}>
                        <Button variant="contained">Update Section</Button>
                    </Grid>
            </Grid>
            
        </>
        
    )
}