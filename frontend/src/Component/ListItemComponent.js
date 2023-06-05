import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Typography
} from "@mui/material";
import "../Css/ListItemComponent.css";
import { useNavigate } from "react-router-dom";
const ListItemComponent = (props) => {
  const navigate = useNavigate();
  const handleClick = (event) => {

    console.log("clicked on " + props.uid);
    navigate(`/profile/${props.uid}`);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} className="z">
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h5" style={{fontFamily:'"Merriweather", serif', fontSize:'18px', fontWeight:'bold', color:"#2a1818"}}>
                {`ID: ${props.id}`}
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{fontFamily:'"Roboto Slab", serif', fontSize:'19px', color:"#777"}}>
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
