import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import "../Css/Card.css";
import ChildProfile from "./ChildProfile";

function Card(props) {
  const goDetail = () => {return <ChildProfile /> };

  return (
    <div className="row">
      <div className="col">
        <div className="card zoom-effect card-style m-3 p-2">
          <img
            src={props.imgsrc}
            className="card-img-top"
            style={{ height: "160px" }}
            alt={props.alt}
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.name} , ID: BAT0{props.id}
            </h5>
            <p className="card-text"> Age : {props.age} <br /> location : {props.location} </p>
            <Button variant="contained" onClick={goDetail}> Detail </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
