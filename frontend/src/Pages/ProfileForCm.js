import Box from "@mui/material/Box";
import { Grid, Paper } from "@mui/material";
import React from "react";
import Temp from "../Component/Temp";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";




const ProfileForCm = () => {



  var state = useSelector((state) => ({ ...state }));


  const paperStyle = {
    padding: 20,
    width: "80vw",
    margin: "50px auto",
  };

  var state = useSelector((state) => ({ ...state }));

  const [value, setValue] = React.useState("0");
  const [cmData, setCmData] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     try {  console.log("sche"+state.user._id);
  //       const res = await axios.get(
  //         `http://localhost:4000/api/get-user/${state.user._id}`);
  //       console.log(res);
  //       setCmData(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h4>Profile</h4>
          </Grid>

          <Box>
            <Temp
              // image={cmData.image}
  
              image={state.user.image==null?"":state.user.image}
              verified={state.user.verified}
              username={state.user.username}
              role={state.user.role}
              email={state.user.email}
              
    
            />
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ProfileForCm;

// image, verified, username, role, password, email
