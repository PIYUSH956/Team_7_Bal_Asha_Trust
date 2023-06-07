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
import {useParams} from 'react-router-dom';
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

const paperStyle = {
    padding:40,
    width:'80vw',
}

const headingStyle = {
    color:'white',
    fontSize:'18px',
    fontWeight:"lighter",
    backgroundColor:'purple',
    padding:10,
}

const contentStyle = {
    color:'gray',
}

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      [theme.breakpoints.only('xs')]: {
        marginTop:'20px',
        width: '80vw', // Custom width for xs breakpoint
      },
      [theme.breakpoints.only('md')]: {
        width: '25vw', // Custom width for md breakpoint
      },
    },
}));


export default function ChildAccountPage(){


    var state = useSelector((state) => ({ ...state }));
    const classes = useStyles();

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
            <Box style={boxStyle} mt={10}>
                <Paper elevation={10} style={paperStyle}>
                    <PersonalDetails />

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

                <Box style={boxStyle2} mt={5} mb={10}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent:'space-between',
                        flexDirection: {xs:'column' , md: "row" },
                    }}>
                        <Paper elevation={10} className={classes.paperStyle}>
                            <Grid>
                                <Typography style={headingStyle} >Reason for Admission</Typography>
                            </Grid>
                            <Grid> 
                                <Typography style={contentStyle}>Material UI uses rem units for the font size. The browser element default font size is 16px , but browsers have an option to change this value, so rem </Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Case History</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Document Completed</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Document Pending</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>    
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Newspaper Publication Pending Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                        </Paper>

                        <Paper elevation={10} className={classes.paper} mt={2}>
                            <Grid>
                                <Typography style={headingStyle} >Reason for Flagging</Typography>
                            </Grid>
                            <Grid>    
                                <Typography style={contentStyle}>Material UI uses rem units for the font size. The browser element default font size is 16px , but browsers have an option to change this value, so rem ...</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Last Call Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Total Shelter Home Stay</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} >Last Visit Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Police Report Pending Since</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle}  mt={2}>Surrender Pending Status</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                        </Paper>

                        <Paper elevation={10} className={classes.paper} mt={2}>
                            <Grid>
                                <Typography style={headingStyle}>Child Welfare Committee Last Review Date</Typography>
                            </Grid>
                            <Grid>    
                                <Typography style={contentStyle}>Material UI uses rem units for the font size. The browser  element default font size is 16px , but browsers have an option to change this value, so rem ...</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Last Child Welfare Committee Order</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Gaurdian</Typography>
                            </Grid>
                            <Grid>    
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={headingStyle} mt={2}>Sibling Details</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={contentStyle}></Typography>
                            </Grid>
                        </Paper>
                    </Box>
                </Box>
        </>
    )
}