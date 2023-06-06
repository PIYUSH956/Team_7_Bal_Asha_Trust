import {useState} from 'react'
import { Grid, Select, Typography  , Button , Box, MenuItem, TextField, Input} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useNavigate} from 'react-router-dom';

const styleTypo = {
    fontSize : '13px',
}


export default function ProcessStep1 (){

    const navigate = useNavigate();

    const handlePdfGeneration = (e) =>{
        e.preventDefault();
        navigate("/pdf-generator");

    }


    const[news1 , setNews1] = useState('');
    const[news1Date , setNews1Date] = useState('');
    const[news2 , setNews2] = useState('');
    const[news2Date , setNews2Date] = useState('');
    const[tv , setTV] = useState('');
    const[tvDate , setTVDate] = useState('');
    const[fmc , setFMC] = useState('');
    const[fmcDate , setFMCDate] = useState('');
    const[mr , setMR] = useState('');
    const[mrDate , setMRDate] = useState('');
    const[sir , setSIR] = useState('');
    const[sirDate , setSIRDate] = useState('');
    const[status1, setStatus1] = useState('pending');
    const[status2, setStatus2] = useState('pending');
    const[status3, setStatus3] = useState('pending');
    const[status4, setStatus4] = useState('pending');
    const[status5, setStatus5] = useState('pending');
    
    // For the purpose of setting the color to the status 
    const [backgroundColor1 , setbackgroundColor1] = useState('red');
    const [backgroundColor2 , setbackgroundColor2] = useState('red');
    const [backgroundColor3 , setbackgroundColor3] = useState('red');
    const [backgroundColor4 , setbackgroundColor4] = useState('red');
    const [backgroundColor5 , setbackgroundColor5] = useState('red');
    
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

    const handleStatus4 = (event) => {
        setStatus4(event.target.value);
        statusColor4(event);
    };

    const handleStatus5 = (event) => {
        setStatus5(event.target.value);
        statusColor5(event);
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

    const statusColor4 = (event) => {
        switch (event.target.value) {
            case 'pending':
                setbackgroundColor4('red');
                break;
            case 'ongoing':
                setbackgroundColor4('yellow');
                break;
            case 'completed':
                setbackgroundColor4('green');
                break;
            default:
                setbackgroundColor4('');
        }
    }

    const statusColor5 = (event) => {
        switch (event.target.value) {
            case 'pending':
                setbackgroundColor5('red');
                break;
            case 'ongoing':
                setbackgroundColor5('yellow');
                break;
            case 'completed':
                setbackgroundColor5('green');
                break;
            default:
                setbackgroundColor5('');
        }
    }

    return(
        <>
            <Grid>

                    <Box sx={{mt:2}}>
                        <h6>Newspaper Publication</h6>
                        <Grid sx={{pl:2}}>
                            <Button style={styleTypo} onClick={handlePdfGeneration}>Get Template for Newspaper</Button>
                            <Typography style={styleTypo}>Print it into 2 National Newspaper</Typography>
                            <Grid>
                                <TextField
                                    value={news1} 
                                    onChange={(e) => setNews1(e.target.value)} 
                                    variant="standard" 
                                    placeholder="Newspaper Name" 
                                    sx={{mr: 2 , mb:1}}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        value={news1Date}
                                        onChange={(e) => setNews1Date(e.target.value)} 
                                        slotProps={{ textField : {size : 'small'}}} />
                                </LocalizationProvider>
                            </Grid>
                            <Grid mt={1}>
                                <TextField 
                                    value={news2}
                                    onChange={(e) => setNews2(e.target.value)} 
                                    variant="standard" 
                                    placeholder="Newspaper Name" 
                                    sx={{mr: 2 , mb:1}}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        value={news2}
                                        onChange={(e) => setNews2Date(e.target.value)}
                                        slotProps={{ textField : {size : 'small'}}} />
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
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>TV Telecasting</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <TextField 
                                value={tv}
                                onChange={(e) => setTV(e.target.value)}
                                variant="standard" 
                                placeholder="Channel Name" 
                                sx={{mr: 2 , mb:1}}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={tvDate}
                                    onChange={(e) => setTVDate(e.target.value)}  
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
                        <h6>File Missing Complaint</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <Input
                                value={fmc}
                                onChange={(e) => setFMC(e.target.value)} 
                                type="file" 
                                sx={{ mr : 2 , mb:1, maxWidth : '200px'}}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={fmcDate} 
                                    onChange={(e) => setFMCDate(e.target.value)} 
                                    slotProps={{ textField : {size : 'small'}}} 
                                />
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

                    <Box sx={{mt:2}}>
                        <h6>Medical Report (if needed)</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <Input
                                value={mr}
                                onChange={(e) => setMR(e.target.value)} 
                                type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={mrDate}
                                    onChange={(e) => setMRDate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                            <Select value={status4}
                                onChange={handleStatus4} 
                                sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor4}}>
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
                        <h6>Social Investigation Report</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <Input 
                                value={sir}
                                onChange={(e) => setSIR(e.target.value)}
                                type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={sirDate}
                                    onChange={(e) => setSIRDate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} 
                                />
                            </LocalizationProvider>
                            <Select value={status5}
                                onChange={handleStatus5} 
                                sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor5}}>
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