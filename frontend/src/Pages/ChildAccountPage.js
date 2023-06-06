import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext , TabList , TabPanel} from '@mui/lab';
import { Grid, Paper } from "@mui/material"
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
export default function ChildAccountPage(){


    var state = useSelector((state) => ({ ...state }));

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
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h4>Profile</h4>
                    </Grid>

                    <Box>
                        <TabContext value={value} >
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
                            <TabPanel value='2'><ScheduleDetails childID = {childData._id}/></TabPanel>
                            <TabPanel value='3'><ProcessDetails /></TabPanel>
                        </TabContext>
                    </Box>

                </Paper>
            </Grid>
        </>
    )
}