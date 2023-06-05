import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Typography
} from "@mui/material";
import "../Css/ListItemComponent.css";

const ListItemComponent = (props) => {
  const handleClick = (event) => {
    console.log("clicked on " + props.id);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} className="z">
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h5" style={{fontFamily:'"Merriweather", serif', fontSize:'13px', fontWeight:'bold', color:"#2a1818"}}>
                {`ID: ${props.id}`}
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{fontFamily:'"Merriweather", serif', fontSize:'14px', color:"#777"}}>
                {`Age: ${props.age}, Location: ${props.location}`}
              </Typography>
            }
          />
        </ListItem>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default ListItemComponent;
