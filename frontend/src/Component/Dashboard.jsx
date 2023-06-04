import React from "react";
import Card from "./Card.jsx";
import children from "./ChildrenDetails";


const Dashboard = () => {
  return (
    <div>
      <div className="container text-center">
      <h2> Ground Level Dashboard </h2> <br /> <br />
        <h2> Stage-1 Child </h2> <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {children.map((val) => {
            if(val.stage==='1')
            return (
              <Card
                key={val.id}
                id={val.id}
                name={val.name}
                location={val.location}
                age={val.age}
                imgsrc={val.photo}
                alt="photo"
                detail=""
              />
            );
          })}
        </div>
        <h2> Stage-2 Child </h2> <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {children.map((val) => {
            if(val.stage === '2')
            return (
              <Card
                key={val.id}
                id={val.id}
                name={val.name}
                location={val.location}
                age={val.age}
                imgsrc={val.photo}
                alt="photo"
                detail=""
              />
            );
          })}
        </div>
        <h2> Stage-3 Child </h2> <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {children.map((val) => {
            if(val.stage==='3')
            return (
              <Card
                key={val.id}
                id={val.id}
                name={val.name}
                location={val.location}
                age={val.age}
                imgsrc={val.photo}
                alt="photo"
                detail=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
