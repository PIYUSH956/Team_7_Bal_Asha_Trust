import React from "react";
import { Box, Grid } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import ChildrenDetails from "./ChildrenDetails";
import "../Css/ListItemComponent.css";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

const ChildList =  () => {


 const [childData,setChildData] = useState([]);


  useEffect(()=>{

    async function fetchData() {
      try {
        const data = await axios.get("http://localhost:4000/api/get-child-data",{status:""});
        setChildData(data.data);
      } catch (err) {
          console.log(err);
      }
  }
  fetchData();

   
   }
  ,[]);

  console.log(childData);


  return (
    <>
      <Box
        sx={{
          margin: "20px",
          padding: "10px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid container spacing={2} >
          <Grid
            item
            md={4}
            xs={10}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              margin: "0",
              padding: "0",
            }}
            sx={{ p: 10 }}
          >
            <h3 className="list-heading" style={{background:"linear-gradient(to bottom right, #f9dede, #fa96c1)"}}>Allotted</h3>
            {childData.map((val) => {
             
                return (
                  <ListItemComponent
                    key={val.id}
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
            xs={10}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              margin: "0",
              padding: "0",
            }}
          >
            <h3 className="list-heading" style={{background:"linear-gradient(to bottom right, #e2def9, #b196fa)"}}> Ongoing </h3>
            {ChildrenDetails.map((val) => {
              if (val.stage === "2")
                return (
                  <ListItemComponent
                    key={val.id}
                    id={"BAT_" + val.id}
                    location={val.location}
                    age={val.age}
                  />
                );
            })}
          </Grid>
          <Grid
            item
            md={4}
            xs={10}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              margin: "0",
              padding: "0",
            }}
          >
            <h3 className="list-heading" style={{background:"linear-gradient(to bottom right, #def9e3, #96fab7)"}}> Completed </h3>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChildList;
