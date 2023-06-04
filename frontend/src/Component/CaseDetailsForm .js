import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CaseDetailsForm () {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Case Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="admission-reason"
            label="Reason for Admission"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="flagging-reason"
            label="Reason for Flagging"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="last-visit-since"
            label="Last Visit Since"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="last-call-since"
            label="Last Call Since"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="guardian"
            label="Guardian"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="sibling-details"
            label="Sibling Details"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <FormLabel id="total-shelter-home-stay">Total Shelter Home Stay</FormLabel>
        </Grid>
        <Grid item xs={12}  md={6}>
          <TextField
            required
            type="number"
            id="stay-year"
            label="Number of years"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}  md={6}>
          <TextField
            required
            type="number"
            id="stay-month"
            label="Number of months"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormLabel id="cwc-last-review">Child Welfare Committee Last Review Date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="last-cwc-order"
            label="Last Child Welfare Committee Order"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="case-history"
            label="Case History"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="documents-completed"
            label="Documents Completed"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="documents-pending"
            label="Documents Pending"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="newspaper-publication-pending-since"
            label="Newspaper Publication Pending Since"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="police-report-pending-since"
            label="Police Report Pending Since"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="surrender-pending-since"
            label="Surrender Pending Since"
            fullWidth
            variant="standard"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
