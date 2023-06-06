import { Grid, Paper, Typography  , Box, Button, TextField, Input} from "@mui/material";
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

export default function ProcessStep2 (){
    return(
        <>
            <Grid>
                <Paper elevation={12} style={paperStyle}>
                    <Grid>
                        <h5>Step 2 : </h5>
                    </Grid>

                    <Box sx={{mt:2}}>
                        <h6>Submit Child's Report for DCPU for NOC</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}></Typography>
                            <Input type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>Receive DCPU NOC</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}></Typography>
                            <Input type="file" sx={{ mr : 2 , mb:1, maxWidth : '200px'}}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker slotProps={{ textField : {size : 'small'}}} />
                            </LocalizationProvider>
                        </Grid>
                    </Box>

                    <Box sx={{mt:2}}>
                        <h6>Final Report from CCI</h6>
                        <Grid sx={{pl:2}}>
                            <Typography style={styleTypo}></Typography>
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