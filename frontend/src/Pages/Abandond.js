import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "../Css/ChildTable.css"
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    centerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh', // Optional, to center vertically on the screen
    },
    hoverRow: {
        '&:hover': {
            backgroundColor: '#ff8100', // Change this to your desired hover color
            cursor: 'pointer',
            '& > *': {
                color: 'white', // Change this to your desired hover text color
            },
        },
    },
    tableHeader: {
        backgroundColor: '#ffe2cb',
        color: "#ff8100",
        fontWeight: 1000,

    },
}));

const columns = [
    { id: 'position', label: 'Position', minWidth: 120 },
    { id: 'name', label: 'Name', minWidth: 150 },
    { id: 'type', label: 'Type', minWidth: 120, },
    {
        id: 'step',
        label: 'Step',
        minWidth: 200,
    }
    ,
    {
        id: 'part',
        label: 'Part',
        minWidth: 200,
    }
    ,
    {
        id: 'desc',
        label: 'Description',
        minWidth: 170,
    },
];




const Abandond = () => {

    const classes = useStyles();
    var index = 0;

    const [name, setName] = useState();
    const [nameD, setNameD] = useState();
    const [type, setType] = useState();
    const [step, setStep] = useState(0);
    const [part, setPart] = useState(0);
    const [num, setNum] = useState(0);
    const [desc, setDesc] = useState("");

    const [uname, setUname] = useState();
    const [utype, setUtype] = useState();
    const [ustep, setUstep] = useState(0);
    const [upart, setUpart] = useState(0);
    const [unum, setUnum] = useState(0);
    const [udesc, setUdesc] = useState("");

    const [steps, setSteps] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {

                const p = await axios.get("http://localhost:4000/api/get-abandond");
                console.log(p.data);
                console.log(p.data[0].steps);
                setSteps(p.data[0].steps);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();

    }, []);

    const handleAdd = async (e) => {

        console.log(name, type, step, part, num);

        try {

            const po = await axios.post("http://localhost:4000/api/add-abandond", { name, type, step, part, num ,desc});
            console.log(po);
            index = 0;
            fetchData();

          

        } catch (err) {
            console.log(err);
        }


    }



    const handleDelete = async (e) => {


        console.log(nameD);

        try {

            const pp = await axios.post("http://localhost:4000/api/delete-abandond", { nameD });
            console.log(pp);
            index = 0;

            fetchData();

         


        } catch (err) {
            console.log(err);
        }

        try {
            const p = await axios.get("http://localhost:4000/api/get-abandond");
            console.log(p.data);
            console.log(p.data[0].steps);
            setSteps(p.data[0].steps);
        } catch (err) {
            console.log(err);
        }


    }


    const handleUpdate = async (e) => {


        console.log(nameD);

        try {

            const pp = await axios.post("http://localhost:4000/api/update-abandond", { uname, utype, ustep, upart, unum , udesc });
            console.log(pp);
            index = 0;
            fetchData();

          

        } catch (err) {
            console.log(err);
        }

        try {
            const p = await axios.get("http://localhost:4000/api/get-abandond");
            console.log(p.data);
            console.log(p.data[0].steps);
            setSteps(p.data[0].steps);
        } catch (err) {
            console.log(err);
        }


    }



    const fetchData  = async ()=>{
        try{
        const p = await axios.get("http://localhost:4000/api/get-abandond");
        console.log(p.data);
        console.log(p.data[0].steps);
        setSteps(p.data[0].steps);
        }catch(err){

        }
    }




    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return <>





        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setNum(e.target.value) }}
                    placeholder="Position"
                />
                <TextField
                    required
                    id="outlined-required"
                    onChange={(e) => { setName(e.target.value) }}
                    label="Required"
                    placeholder='Name'
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    onChange={(e) => { setType(e.target.value) }}
                    placeholder="text or pdf"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setStep(e.target.value) }}
                    placeholder="Step"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setPart(e.target.value) }}
                    placeholder="part"
                />
                 <TextField
                    id="outlined-required"
                    label="Required"
                    type="text"
                    onChange={(e) => { setDesc(e.target.value) }}
                    placeholder="part"
                />
            </div>


        </Box>


        <div className={classes.centerButton}>
            <Button variant="contained" onClick={handleAdd}>Add</Button>
        </div>

        {/* <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setUnum(e.target.value) }}
                    placeholder="Position"
                />
                <TextField
                    required
                    id="outlined-required"
                    onChange={(e) => { setUname(e.target.value) }}
                    label="Required"
                    placeholder='Name'
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    onChange={(e) => { setUtype(e.target.value) }}
                    placeholder="text or pdf"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setUstep(e.target.value) }}
                    placeholder="Step"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setUpart(e.target.value) }}
                    placeholder="part"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="text"
                    onChange={(e) => { setUdesc(e.target.value) }}
                    placeholder="part"
                />
            </div>


        </Box>

        <div className={classes.centerButton}>
            <Button variant="contained" onClick={handleUpdate}>Update</Button>
        </div> */}

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    onChange={(e) => { setNameD(e.target.value) }}
                    label="Required"
                    defaultValue="Name"
                />
            </div>
        </Box>

        <div className={classes.centerButton}>
            <Button variant="contained" onClick={handleDelete}>Delete</Button>
        </div>


        <div className="table-content">
            <Paper sx={{ width: '90%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 580 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead   >
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        className={classes.tableHeader}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {steps.length != 0 && steps
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((val) => {
                                    return (
                                        <TableRow

                                            role="checkbox" tabIndex={-1} key={val.id}>
                                            {columns.map((column) => {

                                                const value = column.id == "position" ? index++ : val[column.id];
                                                console.log(column, val);
                                                return (
                                                    <TableCell className={classes.hoverCell} key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30, 50]}
                    component="div"
                    count={steps.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>



    </>
}
export default Abandond;