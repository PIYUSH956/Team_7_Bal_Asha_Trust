import { Grid, Paper, Typography  , Button , Box, Avatar, TextField, Input} from "@mui/material";
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

export default function ProcessStep1 (){
    return(
        <>
            <Grid>
                <Paper elevation={12} style={paperStyle}>
                    <Grid>
                        <h5>Step 1 : </h5>
                    </Grid>

                    <Box sx={{mt:2}}>
                        <h6>Newspaper Publication</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Get Template for Newspaper</Typography>
                            <Typography style={styleTypo}>Print it into Newspaper</Typography>
                            <TextField variant="standard" placeholder="Newspaper Name" sx={{mr: 2 , mb:1}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>TV Telecasting</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <TextField variant="standard" placeholder="Channel Name" sx={{mr: 2 , mb:1}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>File Missing Complaint</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <Input type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>Medical Report (if needed)</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <Input type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>Social Investigation Report</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}>Telecast the child details to any television channel</Typography>
                            <Input type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Grid align='center' sx={{mt:4}}>
                        <Button variant="contained">Update Section</Button>
                    </Grid>
                </Paper>
            </Grid>
            
        </>
        
    )
}