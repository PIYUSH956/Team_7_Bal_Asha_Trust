import { React, useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Grid, TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useSelector} from 'react-redux';

const columns = [
    { field: 'col0', headerName: 'Name', width: 220 },
    { field: 'col1', headerName: 'Email', width: 480 },
    { field: 'col2', headerName: 'Username', width: 250 },
];

const categories = [
    { value: 'abandoned', label: 'Abandoned' },
    { value: 'surrendered', label: 'Surrendared by Parents' },
    { value: 'orphanedNoGuardian', label: 'Orphaned - No Guardian' },
    { value: 'childAdmittedInCCIByFamily', label: 'Child Admitted In CCI By Family' }
];

const btnStyle = {
    marginTop: '50px',
    fontSize: "15px",
    backgroundColor: "#ff8100",
}

const headingstyle = {
    color:'#ff8100',
    fontSize:'18px',
    fontWeight:"bolder",
    marginBottom: '10px',
}

export default function App(props) {

    const [volunteer, setVolunteer] = useState({});
    const [category, setCategory] = useState('Abanduned');
    const [rootData, setRootData] = useState([]);
    const [row, setRow] = useState([]);
    var state = useSelector((state) => ({ ...state }));
   
    const managerID = state.user != null ? state.user._id : "";


    useEffect(() => {

        async function fetchData() {
            try {
                var data = await axios.get("http://localhost:4000/api/get-social-worker");
                console.log(data);
                data = data.data;
                var arr = [];
                for (const item of data) {
                    const name = "Abc Xyz";
                    const email = item.email;
                    const id = item._id;
                    const username = item.username;
                    arr.push({ id, col0: name, col1: email, col2: username });
                }
                setRow(arr);
                console.log(arr);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);


    const onRowsSelectionHandler = (ids) => {
        console.log(ids);
        const selectedRowsData = ids.map((id) => row.find((rows) => rows.id === id));
        console.log(selectedRowsData[0]);
        setVolunteer(selectedRowsData[0]);
    };

    const handleSchedule= async (e) => {
        console.log(props.childID,volunteer.id,managerID);
        const data = {
            childID : props.childID,
            assignedWorkerID : volunteer.id,
            caseManagerID : managerID
        }
        try{
            const res = await axios.post("http://localhost:4000/api/assign-case",data);
            console.log(res);
        }catch(err){
            if(err.response == null){
                alert(err.message);
            }else{
                alert(err.response.data.message);
            }
        }
    };



    return (
        <>
            <Box sx={{
                flexDirection: { xs: "column", md: "row" },
                margin: {xs: "5px", md: "50px"},
                padding: '25px',
            }}>
                <Grid>
                    <Grid container spacing={3}>
                        <Grid sx={{ paddingX: {xs: "5px", md: "100px"}}} item xs={12} md={6}>
                            <Typography style={headingstyle}>Select Volunteer : </Typography>
                            <TextField id="standard-basic" variant="standard" value={volunteer.col1} disabled fullWidth />
                        </Grid>
                        <Grid sx={{ paddingX: {xs: "5px", md: "100px"}}} item xs={12} md={6}>
                            <Typography style={headingstyle}>Change Category : </Typography>
                            <TextField
                                id="standard-select-currency"
                                select
                                value={category}
                                variant="standard"
                                fullWidth
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center', marginBottom: {xs: "25px", md: "50px"}}}>
                    <Button style={btnStyle} onClick={handleSchedule} variant="contained">Sechedule the Case</Button>
                    </Grid>
                    
                </Grid>

                <Grid sx={{display: 'flex',justifyContent: 'center', alignItems: 'center',}}>
                    <div style={{ height: 350, width: '80%' }}>
                        <DataGrid rows={row} columns={columns}
                        
                        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                        slots={{ toolbar: GridToolbar }} />
                    </div>
                </Grid>
            </Box>
        </>
    );
}
