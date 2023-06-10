import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../Css/ChildTable.css";
import ChildrenDetails from "./ChildrenDetails";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img1 from "../Images/LoginPageImage.jpg";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: "#382A41",
    color: "white",
  },
  hoverRow: {
    "&:hover": {
      backgroundColor: "#CD366B", // Change this to your desired hover color
      cursor: "pointer",
      "& > *": {
        color: "white", // Change this to your desired hover text color
      },
    },
  },
}));

const columns = [
  { id: "caseNumber", label: "Case Id", minWidth: 120 },
  { id: "childName", label: "Name", minWidth: 150 },
  {
    id: "age",
    label: "Age",
    minWidth: 120,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "state",
    label: "State",
    minWidth: 200,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "district",
    label: "District",
    minWidth: 200,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "shelter",
    label: "Shelter",
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
];

export default function PendingChildTable() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [childData, setChildData] = useState([]);
  var state = useSelector((state) => ({ ...state }));
  // const [id,setID] = useState(state.user._id);
  console.log(state);

  useEffect(() => {
    async function fetchData() {
      try {
        if (
          state.user != null &&
          (state.user.role == "manager" || state.user.role == "admin")
        ) {
          const data = await axios.post(
            "http://localhost:4000/api/get-on-going-child-data-for-admin"
          );
          console.log("ON GOING", data);
          setChildData(data.data);
        } else if (state.user != null && state.user.role == "root") {
          var data = await axios.post(
            "http://localhost:4000/api/get-on-going-case",
            { assignedWorkerID: state.user._id }
          );
          data = data.data;
          console.log(data);
          var tempArr = [];
          for (const item of data) {
            if (item.caseID != null) tempArr.push(item.caseID.childID);
          }
          setChildData(tempArr);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleCellClick = (e) => {
    navigate("/profile/" + e._id);
    localStorage.setItem("temp-profile", JSON.stringify(e));
  };

  return (
    <>
      {childData.length == 0 ? (
        <>
          <div className="alert-box">
          <div style={{border:'1px solid gray', boxShadow:'10px 10px 5px #aaaaaa', padding:'10px', borderRadius:'20px'}}>
            <Card className= "cardItem" style={{ maxWidth: '445px', backgroundColor:'#382A41', overflow:'hidden', borderRadius:'20px', padding:'25px', transition:'transform 2.5s, box-shadow 0.5s'}}>
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={img1} alt="child-img" className="img-style" />
                </CardContent>
                <CardContent>
                  <Typography
                    textAlign="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{color:'white'}}
                  >
                    No On Going Cases Currently
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          </div>
        </>
      ) : (
        <>
          <div className="table-content">
            <Paper sx={{ width: "90%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 580 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                          className={classes.tableHeader}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {childData.length != 1 &&
                      childData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((val) => {
                          return (
                            <TableRow
                              className={classes.hoverRow}
                              role="checkbox"
                              tabIndex={-1}
                              key={val.id}
                            >
                              {columns.map((column) => {
                                const value =
                                  column.id == null ? null : val[column.id];
                                console.log(column, val);
                                return (
                                  <TableCell
                                    onClick={() => {
                                      handleCellClick(val);
                                    }}
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
                count={ChildrenDetails.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </>
      )}
    </>
  );
}
