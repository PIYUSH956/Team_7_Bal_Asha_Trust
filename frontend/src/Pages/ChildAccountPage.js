import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext , TabList , TabPanel} from '@mui/lab';
import { Grid, Paper , Typography } from "@mui/material"
import React from "react"
import PersonalDetails from '../Component/PersonalDetails';
import CaseDetails from '../Component/CaseDetails';
import ScheduleDetails from '../Component/ScheduleDetails';
import ProcessDetails from '../Component/ProcessDetails';
import { useSelector } from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const boxStyle = {
    marginLeft:'10%',
    marginRight:'10%',
}

const boxStyle2 = {
    marginLeft:'10%',
    marginRight:'10%',
}

const heading ={
    color:'#ff8100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'35px',
    fontWeight: '700',
    align: 'center',
}

const headingStyle = {
    color:'white',
    fontSize:'18px',
    fontWeight:"lighter",
    backgroundColor:'#ff8100',
    padding:10,
    marginTop: '20px',
    marginBottom: '20px',
}

const contentStyle = {
    color:'gray',
}

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      [theme.breakpoints.only('xs')]: {
        margin:'2px',
        width: '80vw', // Custom width for xs breakpoint
      },
      marginLeft:'5px',
      marginRight:'5px',
      [theme.breakpoints.only('md')]: {
        width: '25vw', // Custom width for md breakpoint
      },
    },
}));


export default function ChildAccountPage(){


    var state = useSelector((state) => ({ ...state }));
    const classes= useStyles();
    const paperStyle = {
        padding:20,
        width:'80vw',
        margin:'50px auto',
    }

    const uid = useParams().id;
    console.log(uid);

    const [value, setValue] = React.useState('0');
    const [childData,setChildData] = useState({}); 

  useEffect(()=>{

    async function fetchData() {
      try {
        
        const data = await axios.post("http://localhost:4000/api/get-child-data",{_id:uid});
        console.log(data);
        setChildData(data.data[0]);
      } catch (err) {
          console.log(err);
      }
  }
  fetchData();   
   }
  ,[]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
            <Box style={boxStyle} >
                <h2 style={heading}>Personal Details</h2>
                <Paper elevation={10} style={paperStyle}>
                    <PersonalDetails
                    
                    image={childData.image}
                    name={childData.childName}
                    dateOfBirth={childData.dateOfBirth}
                    gender={childData.gender}
                    district={childData.district}
                    age={childData.age}
                    category={childData.childClassification}
                    state={childData.state}
                    shelter={childData.shelter}
                    id={childData._id}

                    
                    />
                    <Box>
                        {/* <TabContext value={value} >
                            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <TabList onChange={handleChange} variant='scrollable' scrollButtons='auto'>
                                    <Tab label="Personal Details" value='0' />
                                    <Tab label="Case Detail" value='1' />
                                    {state.user != null && state.user.role == "manager" && <Tab label="Schedule" value='2' />}
                                    <Tab label='Process' value='3' />
                                </TabList>
                            </Box>

                            <TabPanel value='0'><PersonalDetails 
                                 image = {childData.image}
                                 caseNumber = {childData.caseNumber}
                                 childName = {childData.childName}
                                 gender = {childData.gender}
                                 dateOfBirth  = {childData.dateOfBirth}
                                 district = {childData.district}
                                 state = {childData.state}
                                 shelterHome = {childData.shelter}
                            /></TabPanel>
                            <TabPanel value='1'>
                                
                                <CaseDetails 
                            
                                  reasonForAdmission = {childData.reasonForAdmission}
                                  reasonForFlagging = {childData.reasonForFlagging}
                                  caseHistory = {childData.caseHistory}
                                  documentCompleted={childData.documentCompleted}
                                  documentPending = {childData.documentPending}
                                  lastVisitSince = {childData.lastVisitSince}
                                  lastCallSince = {childData.lastCallSince}
                                  totalShelterHomeStay = {childData.totalShelterHomeStay}
                                  newsPaperPublicationPending={childData.newsPaperPublicationPending}
                                  policeReportPending = {childData.policeReportPending}
                                  surrenderPending = {childData.surrenderPending}
                                  lastReviewDate = {childData.lastReviewDate}
                                  lastChildWelfareCommiteOrder = {childData.lastChildWelfareCommiteOrder}
                                  guardian = {childData.guardian}
                                  siblingDetails = {childData.siblingDetails}
                            
                            
                            
                            
                            
                            /></TabPanel>
                            <TabPanel value='2'><ScheduleDetails data = {childData}/></TabPanel>
                            <TabPanel value='3'><ProcessDetails /></TabPanel>
                        </TabContext> */}
                    </Box>
                </Paper>
            </Box>
                
            <h2 style={heading}>Case Details</h2>
            <Box style={boxStyle2} mt={5} mb={10}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent:'space-between',
                        flexDirection: {xs:'column' , md: "row" },
                    }}>
                        <Paper elevation={10} className={classes.paper}>
                            <Grid>
                                <Typography style={headingStyle} >Reason for Admission</Typography>
                            </Grid>
                            <Grid> 
                                <Typography style={contentStyle}>{childData.reasonForAdmission}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Case History</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.caseHistory}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Document Completed</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.documentCompleted}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Document Pending</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.documentPending}</Typography>    
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Newspaper Publication Pending Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.newsPaperPublicationPending}</Typography>
                            </Grid>
                        </Paper>

                        <Paper elevation={10} className={classes.paper} >
                            <Grid>
                                <Typography style={headingStyle} >Reason for Flagging</Typography>
                            </Grid>
                            <Grid>    
                                <Typography style={contentStyle}>{childData.reasonForFlagging}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Last Call Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.lastCallSince}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Total Shelter Home Stay</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.totalShelterHomeStay}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Last Visit Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.lastVisitSince}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Police Report Pending Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.policeReportPending}</Typography>
                            </Grid>
                            
                        </Paper>

                        <Paper elevation={10} className={classes.paper} >
                            <Grid>
                                <Typography style={headingStyle}>Child Welfare Committee Last Review Date</Typography>
                            </Grid>
                            <Grid>    
                                <Typography style={contentStyle}>{childData.childWelfareCommitteLastReviewDate}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Last Child Welfare Committee Order</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.lastChildWelfareCommiteOrder}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Gaurdian</Typography>
                            </Grid>
                            <Grid>    
                                <Typography style={contentStyle}>{childData.guardian}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Sibling Details</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.siblingDetails}</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}>Surrender Pending Status</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}>{childData.surrenderPending}</Typography>
                            </Grid>
                        </Paper>
                    </Box>
            </Box>
        </>
    )
}