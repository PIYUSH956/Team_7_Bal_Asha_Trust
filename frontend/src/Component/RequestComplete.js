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
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import IconButton from "@mui/material/IconButton";
import { Grid, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: "#382A41",
    color: "white",
  },
  hoverRow1: {
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

export default function RequestComplete() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [childData, setChildData] = useState([]);
  var state = useSelector((state) => ({ ...state }));
  // const [id,setID] = useState(state.user._id);
  console.log(state);
  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        {
          const data = await axios.post(
            URL + "/get-on-going-child-data-for-admin"
          );
          console.log("ON GOING", data);
          setChildData(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {childData.map((pro) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Paper sx={{ width: "90%", overflow: "hidden", padding: "20px" }}>
              <h3>Request For Closing</h3>
              <Grid
                container
                sx={{
                  margin: { xs: "10px", md: "25px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                <Grid item xs={12} md={6} sx={{ textAlign: "center", mb: 2 }}>
                  <p>Case Id : temp </p> <br />
                  <p>Social Worker Name : temp </p>
                </Grid>

                <Grid item xs={12} md={6} sx={{ textAlign: "center", mb: 2 }}>
                  <p>Notes : temp </p> <br />
                  <p>
                    Document :{" "}
                    <IconButton sx={{ marginLeft: "15px", padding: "0px" }}>
                      <DownloadForOfflineIcon
                        style={{
                          height: "40px",
                          width: "40px",
                          color: "#CD366B",
                        }}
                      />
                    </IconButton>{" "}
                  </p>
                </Grid>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    margin: "20px",
                    bgcolor: "#CD366B",
                    fontSize: "15px",
                    ":hover": { bgcolor: "#382A41", color: "white" },
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    margin: "20px",
                    bgcolor: "#CD366B",
                    fontSize: "15px",
                    ":hover": { bgcolor: "#382A41", color: "white" },
                  }}
                >
                  Regect
                </Button>
              </Grid>
            </Paper>
          </div>
        );
      })}
    </>
  );
}
