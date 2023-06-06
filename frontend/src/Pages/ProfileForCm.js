import Box from "@mui/material/Box";
import { Grid, Paper } from "@mui/material";
import React from "react";
import Temp from "../Component/Temp";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ProfileForCm = () => {
  const paperStyle = {
    padding: 20,
    width: "80vw",
    margin: "50px auto",
  };

  const uid = useParams().id;
  console.log(uid);

  const [value, setValue] = React.useState("0");
  const [cmData, setCmData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.post(
          "http://localhost:4000/api/get-child-data",
          { _id: uid }
        );
        console.log(data);
        setCmData(data.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h4>Profile CM</h4>
          </Grid>

          <Box>
            <Temp
              image={cmData.image}
              verified={cmData.verified}
              username={cmData.username}
              role={cmData.role}
              email={cmData.email}
              password={cmData.password}
            />
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ProfileForCm;

// image, verified, username, role, password, email
