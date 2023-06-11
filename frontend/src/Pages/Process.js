import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Typography, MenuItem, Select } from "@mui/material";
import { Card } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Css/Process.css";
import { useSelector } from "react-redux";
import Box1 from "../Component/Box1";
import Box2 from "../Component/Box2";
import JsPDF from "jspdf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Process() {
  const [process, setProcess] = useState([]);
  // const [value, setValue] = useState(props.value);

  const [one, setOne] = useState();

  const [two, setTwo] = useState();

  const [three, setThree] = useState();

  const [four, setFour] = useState();

  var objData = [];

  var state = useSelector((state) => ({ ...state }));
  const category = useParams().category;
  const childID = useParams().id;
  const assignedWorkerID = state.user._id;
  const URL ="http://localhost:4000/api";
  console.log(URL, "cds");

  useEffect(() => {
    async function fetchData() {
      try {
        const processStep = await axios.post(URL + 
          "/get-process-by-category",
          { category }
        );
        const processData = await axios.post(URL +
          "/get-data-in-process",
          { childID, assignedWorkerID }
        );
        const A = processStep.data[0].steps;
        const B = processData.data != null ? processData.data.data : "";
        console.log(A, B);

        for (var itemA in A) {
          for (var itemB in B) {
            if (A[itemA].name == B[itemB].name) {
              A[itemA].value = B[itemB].value;
              A[itemA].status = B[itemB].status;
              A[itemA].date = B[itemB].date;
            }
          }
        }

        console.log(A);

        console.log(processData);
        setProcess(A);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleProcessComplete = async (e) => {
    e.preventDefault();
    for (var item in process) {
      try {
        const res = await axios.post(URL + "/get-value-present", { key: process[item].name, childID });
        console.log(process[item].name, res.data);
        if (res.data.m == false) {
          toast.error(`Complete ${process[item].name} Steps`);
          return;
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
        return;
      }
      
    }

    // SET STATUS COMPLETED

    try {
      const res = await axios.post(URL + "/change-to-completed", {childID });
      toast.success("Completed Succesfully");
      console.log(res);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }


  }


  const generatePdf = () => {
    try {
      const report = new JsPDF("portrait", "pt", [795.28, 1241.89]);

      report.html(document.querySelector("#report"), {}).then(() => {
        report.save();
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div>
      <ToastContainer/>
     {/* <div onClick={generatePdf} id = "report" style={{ width: '210mm', height: '297mm', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Child Name:</p>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Case Manager:</p>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Steps</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Type</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {process.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.type}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
      {process.map((pro) => {
        return (
          <>
            <h3>
              {"Step " + pro.step} {"Part " + pro.part}
            </h3>
            {pro.type == "text" ? (
              <>
                <Box1
                  category={category}
                  assignedWorkerID={assignedWorkerID}
                  childID={childID}
                  name={pro.name}
                  desc={pro.description}
                  step={pro.step}
                  part={pro.part}
                  value={pro.value}
                  type={pro.type}
                  date={pro.date}
                  status={pro.status}
                />
              </>
            ) : (
              <>
                <Box2
                  category={category}
                  assignedWorkerID={assignedWorkerID}
                  childID={childID}
                  name={pro.name}
                  desc={pro.description}
                  step={pro.step}
                  part={pro.part}
                  value={pro.value}
                  type={pro.type}
                  date={pro.date}
                  status={pro.status}
                />
              </>
            )}
          </>
        );
      })}

<Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          marginX: { xs: "5px", md: "200px" },
          padding: "25px",
          marginBottom: "20px",
        }}
      >
        <Card>
          <Grid
            sx={{ margin: { xs: "10px", md: "25px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
            container
            
          >
            {/* <Grid item xs={12} md={4} sx={{display:'flex' , justifyContent:'center', mb:2}}>
              <TextField
                variant="standard"
                // sx={{ color: "#ff8100" }}
                // value={value}
                disabled={!(state.user.role == "root")}
                // onChange={(e) => setValue(e.target.value)}
                id="outlined-required"
                label="Notes"
                placeholder="Notes"
                focused
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{display:'flex' , justifyContent:'center',mb:2}}>
              <Button variant="contained" component="label" sx={{bgcolor:'#CD366B' , fontSize:'15px' , ":hover": {
                        bgcolor: "#382A41",color: "white"}}}>
                {value == null ? "Upload File" : "Uploaded"}
                Upload File
                <input
                  id="file-upload-button"
                  type="file"
                  hidden
                  disabled={!(state.user.role == "root")}
                // onChange={(e) => { updatePDF(e.target.files[0]) }}
                />
              </Button>
              {value != null && <Typography onClick={(e) => { downloadPDF(value) }} sx={{ marginLeft: '10px', marginTop: '17px' }}>Download</Typography>}
            </Grid> */}
            <Grid item xs={12} md={4} sx={{display:'flex' , justifyContent:'center',mb:2}}>
              <Button
                variant="contained"
                // onClick={handleCompleted}
                sx={{bgcolor:'#382A41' , fontSize:'15px' , ":hover": {
                  bgcolor: "#CD366B",
                  color: "white"
                }}}
                onClick={handleProcessComplete}
              >
                Process Completed
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>

    </div>
  );
}
