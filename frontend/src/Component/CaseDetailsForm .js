import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector, useDispatch } from 'react-redux';

export default function CaseDetailsForm() {


  var state = useSelector((state) => ({ ...state }));
  console.log(state);

  const dispatch = useDispatch();

  const reasonForAdmission = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "reasonForAdmission",
        value: e.target.value
      }
    });

  }

  const reasonForFlagging = (e) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "reasonForFlagging",
        value: e.target.value
      }
    });
  }

  const lastVisitSince = (e) => {

  
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "lastVisitSince",
        value: e.target.value
      }
    });
  }

  const lastCallSince = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "lastCallSince",
        value: e.target.value
      }
    });

  }

  const guardian = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "guardian",
        value: e.target.value
      }
    });

  }

  const siblingDetails = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "siblingDetails",
        value: e.target.value
      }
    });

  }

  const totalShelterYears = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "totalShelterYears",
        value: e.target.value
      }
    });
  }

  const totalShelterMonths = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "totalShelterMonths",
        value: e.target.value
      }
    });
  }

  const lastReviewDate = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "lastReviewDate",
        value: e
      }
    });
  }



  const lastChildWelfareCommiteOrder = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "lastChildWelfareCommiteOrder",
        value: e.target.value
      }
    });

  }

  const caseHistory = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "caseHistory",
        value: e.target.value
      }
    });

  }

  const documentCompleted = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "documentCompleted",
        value: e.target.value
      }
    });
  }

  const documentPending = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "documentPending",
        value: e.target.value
      }
    });
  }

  const newsPaperPublicationPending = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "newsPaperPublicationPending",
        value: e.target.value
      }
    });
  }



  const policeReportPending = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "policeReportPending",
        value: e.target.value
      }
    });
  }

  const surrenderPending = (e) => {

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "surrenderPending",
        value: e.target.value
      }
    });
  }








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
            value={state.form != null ? state.form.reasonForAdmission:""}
            onChange={reasonForAdmission}
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
            value={state.form != null ? state.form.reasonForFlagging:""}
            onChange={reasonForFlagging}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="last-visit-since"
            label="Last Visit Since"
            fullWidth
            value={state.form != null ? state.form.lastVisitSince:""}
            onChange={lastVisitSince}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="last-call-since"
            label="Last Call Since"
            fullWidth
            value={state.form != null ? state.form.lastCallSince:""}
            onChange={lastCallSince}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="guardian"
            label="Guardian"
            fullWidth
            value={state.form != null ? state.form.guardian:""}
            onChange={guardian}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="sibling-details"
            label="Sibling Details"
            fullWidth
            value={state.form != null ? state.form.siblingDetails:""}
            onChange={siblingDetails}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel id="total-shelter-home-stay">Total Shelter Home Stay</FormLabel>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="number"
            id="stay-year"
            label="Number of years"
            value={state.form != null ? state.form.totalShelterYears:""}
            onChange={totalShelterYears}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="number"
            id="stay-month"
            label="Number of months"
            value={state.form != null ? state.form.totalShelterMonths:""}
            onChange={totalShelterMonths}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormLabel id="cwc-last-review">Child Welfare Committee Last Review Date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={lastReviewDate} value={state.form != null ? state.form.lastReviewDate:""} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="last-cwc-order"
            label="Last Child Welfare Committee Order"
            fullWidth
            value={state.form != null ? state.form.lastChildWelfareCommiteOrder:""}
            onChange={lastChildWelfareCommiteOrder}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="case-history"
            label="Case History"
            fullWidth
            value={state.form != null ? state.form.caseHistory:""}
            onChange={caseHistory}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="documents-completed"
            label="Documents Completed"
            fullWidth
            value={state.form != null ? state.form.documentCompleted:""}
            onChange={documentCompleted}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="documents-pending"
            label="Documents Pending"
            fullWidth
            value={state.form != null ? state.form.documentPending:""}
            onChange={documentPending}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="newspaper-publication-pending-since"
            label="Newspaper Publication Pending Since"
            fullWidth
            value={state.form != null ? state.form.newsPaperPublicationPending:""}
            onChange={newsPaperPublicationPending}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="police-report-pending-since"
            label="Police Report Pending Since"
            fullWidth
            value={state.form != null ? state.form.policeReportPending:""}
            onChange={policeReportPending}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="surrender-pending-since"
            label="Surrender Pending Since"
            fullWidth
            value={state.form != null ? state.form.surrenderPending:""}
            onChange={surrenderPending}
            variant="standard"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
