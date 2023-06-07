import React from "react";
import { Box, Grid } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import ChildrenDetails from "./ChildrenDetails";
import "../Css/ListItemComponent.css";

const CaseManagerList = () => {
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
        <Grid container sx={{justifyContent:'center'}}>
          <Grid
            item
            lg={3}
            md={6}
            xs={11}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
            }}
          >
            <h3 className="list-heading" style={{background:"linear-gradient(to bottom right, #f9dede, #fa96c1)"}}>Allotted</h3>
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
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={11}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
            }}
          >
            <h3 className="list-heading" style={{background:"linear-gradient(to bottom right, #e2def9, #b196fa)"}}> Ongoing </h3>
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
            <br/>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={11}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
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
            <br/>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={11}
            style={{
              maxHeight: 600,
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f5f5f5",
              marginTop: "30px",
            }}
          >
            <h3 className="list-heading" style={{background:"linear-gradient(to bottom right, #f9dede, #fa96c1)"}}>Heading</h3>
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
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default CaseManagerList;
