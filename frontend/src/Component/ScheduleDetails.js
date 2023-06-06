import { React , useState} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Grid, TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const rows= [
  { id: 1, col0:1, col1: 'Hello', col2: 'World' },
  { id: 2, col0:2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col0:3, col1: 'MUI', col2: 'is Amazing' },
];

const columns= [
  {field: 'col0', headerName: 'Column 0', width: 150 },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const categories = [
    {value : 'Abanduned' , label:'Abanduned'} , 
    {value : 'Parental Guidance' , label : 'Parental Guidance' }, 
    {value : 'Surrendared' , label: 'Surrendared'}
];

const btnStyle = {
    marginTop : '50px',
}

export default function App() {

    const [volunteer , setVolunteer] = useState('Amit Kumar');
    const [category , setCategory] = useState('Abanduned');

  return (
    <>
        <Box sx={{
                display: 'flex',
                flexDirection : {xs: "column" , md:"row"},
                justifyContent: 'space-between',
            }}>
                <Grid>
                    <Box sx={{display:'flex', gap: 1 , flexDirection : {xs:'column' , md : 'row'}}}>
                        <Typography>Select Volunteer : </Typography>
                        <TextField id="standard-basic"  variant="standard" value={volunteer} disabled fullWidth/>
                    </Box>
                    <Box mt={3} sx={{display:'flex', gap: 1 , flexDirection : {xs:'column' , md : 'row'}}}>
                        <Typography>Change Category : </Typography>
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
                    </Box>
                    <Button style={btnStyle} variant="contained">Sechedule the Case</Button>
                </Grid>
                <Grid>
                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid rows={rows} columns={columns}  slots={{ toolbar: GridToolbar }}/>
                    </div>
                </Grid>
        </Box>
    </>
  );
}
