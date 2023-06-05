import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext , TabList , TabPanel} from '@mui/lab';
import { Grid, Paper } from "@mui/material"
import React from "react"
import PersonalDetails from '../Component/PersonalDetails';
import CaseDetails from '../Component/CaseDetails';
import ScheduleDetails from '../Component/ScheduleDetails';

export default function ChildAccountPage(){

    const paperStyle = {
        padding:20,
        width:'80vw',
        margin:'50px auto',
    }

    const [value, setValue] = React.useState(0);

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
                                    <Tab label="Schedule" value='2' />
                                </TabList>
                            </Box>

                            <TabPanel value='0'><PersonalDetails /></TabPanel>
                            <TabPanel value='1'><CaseDetails /></TabPanel>
                            <TabPanel value='2'><ScheduleDetails /></TabPanel>
                        </TabContext>
                    </Box>

                </Paper>
            </Grid>
        </>
    )
}