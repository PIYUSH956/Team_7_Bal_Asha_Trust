import React from "react";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../Css/ChildTable.css";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  centerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh", // Optional, to center vertically on the screen
  },
  hoverRow: {
    "&:hover": {
      backgroundColor: "#CD366B",
      cursor: "pointer",
      "& > *": {
        color: "white",
      },
    },
  },
  tableHeader: {
    backgroundColor: "#382A41",
    color: "white",
    fontWeight: 1000,
  },
}));

const columns = [
  { id: "position", label: "Position", minWidth: 120 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "type", label: "Type", minWidth: 120 },
  {
    id: "step",
    label: "Step",
    minWidth: 200,
  },
  {
    id: "part",
    label: "Part",
    minWidth: 200,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
  },
];

const Surrendered = () => {
  const classes = useStyles();
  var index = 0;

  const [name, setName] = useState();
  const [nameD, setNameD] = useState();
  const [type, setType] = useState();
  const [step, setStep] = useState(0);
  const [part, setPart] = useState(0);
  const [num, setNum] = useState(0);
  const [desc, setDesc] = useState("");

  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const p = await axios.get("http://localhost:4000/api/get-surrendered");
        console.log(p.data);
        console.log(p.data[0].steps);
        setSteps(p.data[0].steps);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (e) => {
    console.log(nameD);
    try {
      const pp = await axios.post(
        "http://localhost:4000/api/delete-surrendered",
        { nameD }
      );
      console.log(pp);
      index = 0;
      fetchData();
    } catch (err) {
      console.log(err);
    }
    try {
      const p = await axios.get("http://localhost:4000/api/get-surrendered");
      console.log(p.data);
      console.log(p.data[0].steps);
      setSteps(p.data[0].steps);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    console.log(name, type, step, part, num);

    try {
      const po = await axios.post("http://localhost:4000/api/add-surrendered", {
        name,
        type,
        step,
        part,
        num,
        description: desc,
      });
      console.log(po);
      index = 0;
      fetchData();
    } catch (err) {
      console.log(err);
    }

    //     console.log(nameD);
    //     try {
    //         const pp = await axios.post("http://localhost:4000/api/update-abandond", { uname, utype, ustep, upart, unum , udesc });
    //         console.log(pp);
    //         index = 0;
    //         fetchData();
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     try {
    //         const p = await axios.get("http://localhost:4000/api/get-abandond");
    //         console.log(p.data);
    //         console.log(p.data[0].steps);
    //         setSteps(p.data[0].steps);
    //     } catch (err) {
    //         console.log(err);
    //     }
  };

  const fetchData = async () => {
    try {
      const p = await axios.get("http://localhost:4000/api/get-surrendered");
      console.log(p.data);
      console.log(p.data[0].steps);
      setSteps(p.data[0].steps);
    } catch (err) {}
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper
        elevation={8}
        sx={{ margin: "50px auto", padding: "10px", width: "80vw" }}
      >
        <Grid
          container
          sx={{ margin: "10px" }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid item xs={11} md={6} sx={{ textAlign: "center" }}>
            <TextField
              size="small"
              sx={{ margin: "10px", width: "80%" }}
              id="outlined"
              onChange={(e) => {
                setNum(e.target.value);
              }}
              label="Position"
              type="number"
            />
            <br />
            <TextField
              size="small"
              sx={{ margin: "10px", width: "80%" }}
              id="outlined-required"
              label="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <TextField
              size="small"
              sx={{ margin: "10px", width: "80%" }}
              id="outlined-required"
              label="Text or Pdf"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={11} md={6} sx={{ textAlign: "center" }}>
            <TextField
              size="small"
              sx={{ margin: "10px", width: "80%" }}
              id="outlined-required"
              label="Step"
              type="number"
              onChange={(e) => {
                setStep(e.target.value);
              }}
            />
            <br />
            <TextField
              size="small"
              sx={{ margin: "10px", width: "80%" }}
              id="outlined-required"
              label="Part"
              type="number"
              onChange={(e) => {
                setPart(e.target.value);
              }}
            />
            <br />
            <TextField
              size="small"
              sx={{ margin: "10px", width: "80%" }}
              id="outlined-required"
              label="Description"
              type="text"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <div className={classes.centerButton}>
          <Button
            variant="contained"
            onClick={handleUpdate}
            sx={{
              bgcolor: "#382A41",
              fontSize: "15px",
              ":hover": {
                bgcolor: "#CD366B",
                color: "white",
              },
            }}
          >
            Add Step
          </Button>
        </div>
      </Paper>
      <div>
        <h3>** Double Click on a row to delete that particular step.</h3>
      </div>

      {/* <Paper elevation={8} sx={{margin:'50px auto', padding:'10px', width:'80vw'}}>
            <Grid container sx={{margin:'10px'}} component="form" noValidate autoComplete='off'>
                <Grid item xs={12} sx={{ textAlign:'center'}}>
                    <TextField
                    size="small" 
                        sx={{ margin: "10px", minWidth:'50%' }}
                        required
                        id="outlined-required"
                        onChange={(e) => { setNameD(e.target.value) }}
                        label="Name"

                    />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button 
                    variant="contained" 
                    onClick={handleDelete}
                    sx={{bgcolor:'#382A41' , fontSize:'15px' , ":hover": {
                        bgcolor: "#CD366B",
                        color: "white"
                    }}}
                >
                    Delete
                </Button>
                </Grid>
                
                </Grid>
            </Paper> */}

      <div className="table-content">
        <Paper sx={{ width: "90%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 580 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
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
                {steps.length != 0 &&
                  steps
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((val) => {
                      return (
                        <TableRow role="checkbox" tabIndex={-1} key={val.id}>
                          {columns.map((column) => {
                            const value =
                              column.id == "position"
                                ? index++
                                : val[column.id];
                            console.log(column, val);
                            return (
                              <TableCell
                                className={classes.hoverCell}
                                key={column.id}
                                align={column.align}
                              >
                                {column.format && typeof value === "number"
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
  );
};
export default Surrendered;
