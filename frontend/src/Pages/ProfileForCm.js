import Box from "@mui/material/Box";
import { Grid, Paper } from "@mui/material";
import React from "react";
import Temp from "../Component/Temp";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";


const heading = {
  color:'#382A41',
}

const ProfileForCm = () => {



  var state = useSelector((state) => ({ ...state }));


  // const paperStyle = {
  //   padding: 20,
  //   width: "80vw",
  //   margin: "50px auto",
  // };

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
      <div style={{minHeight:'100vh', width:'100%',  display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Grid>
        <Paper elevation={10} style={{margin:'50px auto', padding:'20px', minWidth:'60vw', borderRadius:'20px'}}>
          <Grid align="center">
            <h3 style={heading}>Profile</h3>
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
      </div>
    </>
  );
};

export default ProfileForCm;

// image, verified, username, role, password, email
