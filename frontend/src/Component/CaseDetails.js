import { Grid  , Box, Typography, TextField} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function CaseDetails(){
    return(
        <>
            <Box sx={{
                display: 'flex',
                flexDirection : {xs: "column" , md:"row"},
                justifyContent: 'space-between',
                gap: 2,
            }}>
                <Grid>
                    <Typography>Reason for Admission</Typography>
                    <TextField id="standard-basic"  variant="standard"  multiline maxRows={4} fullWidth />
                    <Typography mt={2}>Reason for Flagging</Typography>
                    <TextField id="standard-basic"  variant="standard"  multiline maxRows={4} fullWidth/>
                    <Typography mt={2}>Case History</Typography>
                    <TextField id="standard-basic"  variant="standard"  multiline maxRows={4} fullWidth/>
                    <Typography mt={2}>Document Completed</Typography>
                    <TextField id="standard-basic"  variant="standard"  multiline maxRows={4} fullWidth/>
                    <Typography mt={2}>Document Pending</Typography>
                    <TextField id="standard-basic"  variant="standard"  multiline maxRows={4} fullWidth/>                    
                </Grid>
                    
                <Grid>
                    <Typography>Last Visit Since</Typography>
                    <TextField id="standard-basic"  variant="standard" fullWidth/>
                    <Typography mt={2}>Last Call Since</Typography>
                    <TextField id="standard-basic"  variant="standard" fullWidth/>
                    <Typography mt={2}>Total Shelter Home Stay</Typography>
                    <Box mt={1} sx={{display:'flex', gap: 1 , flexDirection : {xs:'column' , md : 'row'}}}>
                        <Typography>Number Of Years</Typography>
                        <TextField sx={{width:'40px'}} size="small" id="standard-basic"  variant="standard" type="number"/>
                        <Typography>Number of Months</Typography>
                        <TextField sx={{width:'40px'}} size='small' id="standard-basic"  variant="standard" type="number"/>
                    </Box>
                    <Typography mt={2}>Newspaper Publication Pending Since</Typography>
                    <TextField id="standard-basic"  variant="standard" fullWidth/>
                    <Typography mt={2}>Police Report Pending Since</Typography>
                    <TextField id="standard-basic"  variant="standard" fullWidth/>
                    <Typography mt={2}>Surrender Pending Status</Typography>
                    <TextField id="standard-basic"  variant="standard" fullWidth/>
                </Grid>
                    
                <Grid>
                    <Typography>Child Welfare Committee Last Review Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>                            <DemoContainer components={['DateField']}>
                            <DateField
                            value={''}
                            onChange={() => {}}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Typography mt={2}>Last Child Welfare Committee Order</Typography>
                    <TextField id="standard-basic"  variant="standard"  multiline maxRows={4} fullWidth />
                    <Typography mt={2}>Gaurdian</Typography>
                    <TextField id="standard-basic"  variant="standard" fullWidth/>
                    <Typography mt={2}>Sibling Details</Typography>
                    <TextField id="standard-basic"  variant="standard" multiline maxRows={4} fullWidth/>
                </Grid>
            </Box>
        </>
    )
}