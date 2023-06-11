import React from "react";
import { Box, Grid } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import ChildrenDetails from "./ChildrenDetails";
import "../Css/ListItemComponent.css";
import { useEffect } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { useState } from "react";

const ChildList = () => {


  const [childData, setChildData] = useState([]);
  var state = useSelector((state) => ({ ...state }));
  const URL = process.env.REACT_APP_URL;
  console.log(state);


  useEffect(() => {

    async function fetchData() {
      try {
        if (state.user != null && state.user.role == "manager") {
          const data = await axios.post(URL + "/get-child-data", { status: "notAssigned" });
          console.log(data);
          setChildData(data.data);
        }

        else if (state.user != null && state.user.role == "root") {
         
            var data = await axios.post(URL + "/get-assign-case", { assignedWorkerID: state.user._id });
            data = data.data;
            console.log(data);
            var tempArr = [];
            for(const item of data){
              tempArr.push(item.childID);
            }
            setChildData(tempArr);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }
    , []);



  return (
    <>
      <Box
        sx={{
          margin: "0px",
          padding: "0px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
          <Grid
            item
            md={4}
            xs={11}
            style={{
              maxHeight: '600px',
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
              padding: "0px",
            }}
          >
            <h3 className="list-heading" style={{ background: "linear-gradient(to bottom right, #f9dede, #fa96c1)" }}>{state.user.role == "manager" ? "Not Assigned" : "Assigned"}</h3>
            {childData.map((val) => {

              return (
                <ListItemComponent
                  key={val._id}
                  uid={val._id}
                  id={val.caseNumber}
                  location={val.district + " , " + val.state}
                  age={val.age}
                />
              );
            })}
          </Grid>
          <Grid
            item
            md={4}
            xs={11}
            style={{
              maxHeight: '600px',
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
              padding: "0px",
            }}
          >
            <h3 className="list-heading" style={{ background: "linear-gradient(to bottom right, #e2def9, #b196fa)" }}> Ongoing </h3>
            {ChildrenDetails.map((val) => {
              if (val.stage === "1" || val.stage === "2" || val.stage === "3")
                return (
                  <ListItemComponent
                    key={val.id}
                    id={"BAT_" + val.id}
                    location={val.location}
                    age={val.age}
                  />
                );
            })}
            <br />
          </Grid>
          <Grid
            item
            md={4}
            xs={11}
            style={{
              maxHeight: '600px',
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
              padding: "0px",
            }}
          >
            <h3 className="list-heading" style={{ background: "linear-gradient(to bottom right, #def9e3, #96fab7)" }}> Completed </h3>
            {ChildrenDetails.map((val) => {
              if (val.stage === "3")
                return (
                  <ListItemComponent
                    key={val.id}
                    id={"BAT_" + val.id}
                    location={val.location}
                    age={val.age}
                  />
                );
            })}
            <br />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChildList;
