import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



// const personalDetail = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const caseDetails = [
  { name: 'Name', detail: 'XYZ' },
  { name: 'Date of Birth', detail: '13/03/2018' },
  { name: 'Gender', detail: 'Male' },
  { name: 'District', detail: 'Mumbai' },
  { name: 'State', detail: 'Maharashtra' },
  { name: 'Shelter Home', detail: 'KVB Trust' },
  { name: 'Reason of Admission', detail: 'XYZ' },
  { name: 'Reason of Flagging', detail: 'XYZ' },
  { name: 'Last Visit Since', detail: '13/03/2021' },
  { name: 'Last Call Since', detail: '13/03/2021' },
  { name: 'Guardian', detail: 'No guardian' },
  { name: 'Sibling Details', detail: 'No' },
  { name: 'Total Shelter Home Stay', detail: '2 year and 4 months' },
  { name: 'CWC LAst Review Date', detail: '28/07/2021' },
  { name: 'Last CWC Order', detail: 'XYZ' },
  { name: 'Case History', detail: 'XYZ' },
  { name: 'Documents Completed', detail: 'XYZ' },
  { name: 'Documents Pending', detail: 'XYZ' },
  { name: 'Newspaper Publication Pending Since', detail: 'NA' },
  { name: 'Final Police Report Pending Since', detail: 'NA' },
  { name: 'Surrender Pending Since', detail: 'NA' },
];

export default function Review() {
  return (
    <React.Fragment>
      
      
      <Grid container spacing={2}>
        
        <Grid item container direction="column" xs={12}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography> */}
          <Grid container>
            {caseDetails.map((caseDetail) => (
              <React.Fragment key={caseDetail.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{caseDetail.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{caseDetail.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
