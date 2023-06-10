import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonalDetailsForm from '../Component/PersonalDetailsForm';
import CaseDetailsForm  from '../Component/CaseDetailsForm ';
import Review from '../Component/Review';
import axios from 'axios';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

const steps = ['Personal Details', 'Case Details', 'Review information'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetailsForm />;
    case 1:
      return <CaseDetailsForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#CD366B',
    },
  },
});

export default function ChildDataForm() {
  const [activeStep, setActiveStep] = useState(0);
  var state = useSelector((state) => ({ ...state }));
  const [caseNumber,setCaseNumber] = useState();
  const dispatch = useDispatch();
  console.log(state);


  const handleNext = async () => {
    if(activeStep == steps.length - 1){

      var form = state.form;
      if(form == null){
        alert("Empty Form");
        return;
      }


      console.log(form);
      if(form.state == null){
        alert("No State Entered");
        return;
      }

      if(form.district == null){
        alert("No District Found");
        return;
      }

      if(form.shelter == null){
        alert("No Shelter Home Found");
        return;
      }

      if(form.childName == null){
        alert("No Child Name Found");
        return;
      }

      if(form.gender == null){
        alert("No Gender Found");
        return;
      }

      if(form.dateOfBirth == null){
        alert("No Date of Birth Found");
        return;
      }


      if(form.reasonForFlagging == null){
        alert("No Reason for Flagging Found");
        return;
      }

      if(form.lastVisitSince == null){
        alert("No Last Visit Since Found");
        return;
      }

      if(form.lastCallSince == null){
        alert("No Last Call Since Found");
        return;
      }

      if(form.guardian == null){
        alert("No Guardian Found");
        return;
      }

      if(form.siblingDetails == null){
        alert("No Sibling Details Found");
        return;
      }

      if(form.totalShelterHomeStay == null){
        alert("No TotalShelter Home Stay Found");
        return;
      }


      if(form.siblingDetails == null){
        alert("No Sibling Details Found");
        return;
      }

      if(form.totalShelterHomeStay == null){
        alert("No TotalShelter Home Stay Found");
        return;
      }


      if(form.lastReviewDate == null){
        alert("No Last Review Date Found");
        return;
      }

      if(form.lastChildWelfareCommiteOrder == null){
        alert("No Last CWC order Found");
        return;
      }

      
      if(form.caseHistory == null){
        alert("No Case History Found");
        return;
      }

      if(form.newsPaperPublicationPending == null){
        alert("No News Paper Publication Pending Found");
        return;
      }


      if(form.policeReportPending== null){
        alert("No Police Report Found");
        return;
      }

      if(form.surrenderPending == null){
        alert("No Last CWC order Found");
        return;
      }


      const URL = process.env.REACT_APP_URL;

      
    

      try{
        const res = await axios.post(URL + "/insert-child-data", state.form);
        console.log(res);
        alert("Saved Successfully");
        setCaseNumber(res.data.caseNumber);
        setActiveStep(activeStep + 1);
        dispatch({
          type: "CLEAR_DATA",
          payload: null
        });
        
      }
      catch(err){
        alert(err.message);
        console.log(err);
      }
      


    }else{
    setActiveStep(activeStep + 1);

    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Child Details
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for Registering.
              </Typography>
              <Typography variant="subtitle1">
                Your child with case number {caseNumber} has been successfully registered.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{mt: 3, ml: 1, color:'white' ,bgcolor:'#382A41' , fontSize:'15px' , ":hover": {
                    bgcolor: "#CD366B",
                    color: "white"
                  }}}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{mt: 3, ml: 1, color:'white' ,bgcolor:'#382A41' , fontSize:'15px' , ":hover": {
                    bgcolor: "#CD366B",
                    color: "white"
                  }}}
                >
                  {activeStep === steps.length - 1 ? 'Register' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}