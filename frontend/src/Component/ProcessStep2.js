import { useState } from "react";
import { TextField ,Grid, Select, Typography  , Box, Button, MenuItem, Input} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import { useTranslation } from "react-i18next";

const paperStyle = {
    padding:20,
    width:'60vw',
    margin:'20px auto',
}

const styleTypo = {
    fontSize : '13px',
}

export default function ProcessStep2 (){

    const [submitChildReportDate , setSubmitChildReportDate] = useState();
    const [dcpuNOC , setDCPUNOC] = useState('');
    const [dcpuNOCDate , setDCPUNOCDate] = useState();
    const [finalReport , setFinalReport] = useState('');
    const [finalReportDate , setFinalReportDate] = useState();
    const [desc1 , setDesc1] = useState('');
    const [desc2 , setDesc2] = useState('');
    const [desc3 , setDesc3] = useState('');
    const [status1, setStatus1] = useState('pending');
    const [status2, setStatus2] = useState('pending');
    const [status3, setStatus3] = useState('pending');

    const downloadDCPUNOC = (event) => {

    }

    const downloadFinalReportFromCCI = (event) =>{

    }

    // For the Purpose of setting the color to Status field
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

    const {t} = useTranslation();

    return(
        <>
            <Grid>
                    <Box sx={{mt:2}}>
                        <h6>{t("Submit Child's Report for District Child Protection Unit(DCPU) for No Objection Certificate(NOC)")}</h6>
                        <Grid sx={{pl:2}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={submitChildReportDate}
                                    onChange={(e) => setSubmitChildReportDate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                            <Select 
                                value={status1}
                                onChange={handleStatus1} 
                                    sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor1}}>
                                    <MenuItem selected={true} value='pending'  style={{ backgroundColor: 'red' }}>
                                    {t('Pending')}
                                    </MenuItem>
                                    <MenuItem value='ongoing'  style={{ backgroundColor: 'yellow' }}>
                                    {t('Ongoing')}
                                    </MenuItem>
                                    <MenuItem value='completed' style={{ backgroundColor: 'green' }}>
                                    {t('Completed')}
                                    </MenuItem>
                            </Select>
                            <Grid mt={1}>
                                <TextField 
                                    value={desc1}
                                    onChange={(e) => setDesc1(e.target.value)}
                                    multiline 
                                    maxRows={3} 
                                    placeholder='Description' 
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>{t("Receive District Child Protection Unit(DCPU) No Objection Certificate(NOC)")}</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}></Typography>
                            <Input
                                value={dcpuNOC}
                                onChange={(e) => setDCPUNOC(e.target.value)} 
                                type="file" 
                                sx={{ mr : 2 , mb:1, maxWidth : '200px'}}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={dcpuNOCDate}
                                    onChange={(e) => setDCPUNOCDate(e.target.value)}
                                    slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                            <Select value={status2}
                                    onChange={handleStatus2} 
                                    sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor2}}>
                                    <MenuItem selected={true} value='pending'  style={{ backgroundColor: 'red' }}>
                                    {t('Pending')}
                                    </MenuItem>
                                    <MenuItem value='ongoing'  style={{ backgroundColor: 'yellow' }}>
                                    {t('Ongoing')}
                                    </MenuItem>
                                    <MenuItem value='completed' style={{ backgroundColor: 'green' }}>
                                    {t('Completed')}
                                    </MenuItem>
                            </Select>
                            <Button
                                onClick={downloadDCPUNOC} 
                                variant='contained' 
                                sx={{ml:1}}
                            >
                                <FileDownloadIcon />
                            </Button>
                            <Grid mt={1}>
                                <TextField 
                                    value={desc2}
                                    onChange={(e) => setDesc2(e.target.value)}
                                    multiline 
                                    maxRows={3} 
                                    placeholder='Description' 
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>{t("Final Report from Child Care Institution(CCI)")}</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}></Typography>
                            <Input
                                value={finalReport}
                                onChange={(e) => setFinalReport(e.target.value)} 
                                type="file" 
                                sx={{ mr : 2 , mb:1, maxWidth : '200px'}}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={finalReportDate}
                                    onChange={(e) => setFinalReportDate(e.target.value)} 
                                    slotProps={{ textField : {size : 'small'}}} 
                                />
                            </LocalizationProvider>
                            <Select value={status3}
                                    onChange={handleStatus3} 
                                    sx={{ml:1 , maxHeight:'40px' , backgroundColor:backgroundColor3}}>
                                    <MenuItem selected={true} value='pending'  style={{ backgroundColor: 'red' }}>
                                    {t('Pending')}
                                    </MenuItem>
                                    <MenuItem value='ongoing'  style={{ backgroundColor: 'yellow' }}>
                                    {t('Ongoing')}
                                    </MenuItem>
                                    <MenuItem value='completed' style={{ backgroundColor: 'green' }}>
                                    {t('Completed')}
                                    </MenuItem>
                            </Select>
                            <Button
                                onClick={downloadFinalReportFromCCI} 
                                variant='contained' 
                                sx={{ml:1}}
                            >
                                <FileDownloadIcon />
                            </Button>
                            <Grid mt={1}>
                                <TextField 
                                    value={desc3}
                                    onChange={(e) => setDesc3(e.target.value)}
                                    multiline 
                                    maxRows={3} 
                                    placeholder='Description' 
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid align='center' sx={{mt:4}}>
                        <Button variant="contained">{t("Update Section")}</Button>
                    </Grid>
            </Grid>
            
        </>
        
    )
}