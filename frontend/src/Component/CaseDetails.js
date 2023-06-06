import { Grid  , Box, Typography, TextField} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
function formatDate(dateString) {
    if(dateString == null) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
  
    return `${day}/${month}/${year}`;
  }
export default function CaseDetails(props){
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
                    <TextField id="standard-basic"  value={props.reasonForAdmission} variant="standard"  multiline maxRows={4} fullWidth />
                    <Typography mt={2}>Reason for Flagging</Typography>
                    <TextField id="standard-basic" value={props.reasonForFlagging} variant="standard"  multiline maxRows={4} fullWidth/>
                    <Typography mt={2}>Case History</Typography>
                    <TextField id="standard-basic" value={props.caseHistory}  variant="standard"  multiline maxRows={4} fullWidth/>
                    <Typography mt={2}>Document Completed</Typography>
                    <TextField id="standard-basic" value={props.documentCompleted}  variant="standard"  multiline maxRows={4} fullWidth/>
                    <Typography mt={2}>Document Pending</Typography>
                    <TextField id="standard-basic" value={props.documentPending} variant="standard"  multiline maxRows={4} fullWidth/>                    
                </Grid>
                    
                <Grid>
                    <Typography>Last Visit Since</Typography>
                    <TextField id="standard-basic"  variant="standard" value={props.lastVisitSince} fullWidth/>
                    <Typography mt={2}>Last Call Since</Typography>
                    <TextField id="standard-basic" value={props.lastCallSince} variant="standard" fullWidth/>
                    <Typography mt={2}>Total Shelter Home Stay</Typography>
                    <TextField id="standard-basic" value={props.totalShelterHomeStay} variant="standard" fullWidth/>
                    <Typography mt={2}>Newspaper Publication Pending Since</Typography>
                    <TextField id="standard-basic" value={props.newsPaperPublicationPending}  variant="standard" fullWidth/>
                    <Typography mt={2}>Police Report Pending Since</Typography>
                    <TextField id="standard-basic" value={props.policeReportPending} variant="standard" fullWidth/>
                    <Typography mt={2}>Surrender Pending Status</Typography>
                    <TextField id="standard-basic" value={props.surrenderPending}  variant="standard" fullWidth/>
                </Grid>
                    
                <Grid>
                    <Typography>Child Welfare Committee Last Review Date</Typography>
                    <TextField id="standard-basic" value={formatDate(props.lastReviewDate)} variant="standard"  multiline maxRows={4} fullWidth />
                    <Typography mt={2}>Last Child Welfare Committee Order</Typography>
                    <TextField id="standard-basic" value={props.lastChildWelfareCommiteOrder} variant="standard"  multiline maxRows={4} fullWidth />
                    <Typography mt={2}>Gaurdian</Typography>
                    <TextField id="standard-basic" value={props.guardian} variant="standard" fullWidth/>
                    <Typography mt={2}>Sibling Details</Typography>
                    <TextField id="standard-basic" value={props.siblingDetails} variant="standard" multiline maxRows={4} fullWidth/>
                </Grid>
            </Box>
        </>
    )
}