import React from "react";
import Card from "../Component/Card.js";
import children from "../Component/ChildrenDetails";
import SocialWorkerDashboard from "./SocialWorkerDashboard.js";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import CaseManagerDashboard from "./CaseManagerDashboard.js";
import AdminDashboard from "./AdminDashboard.js";


const Dashboard = () => {

  var state = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  if(state.user == null){
    navigate("/");
  }

  return (
    <div>
      <div >
       { (state.user.role == "root") && 
      <SocialWorkerDashboard/>}

{ (state.user.role == "manager") && 
      <CaseManagerDashboard/>}

{ (state.user.role == "admin") && 
      <AdminDashboard/>}
      
      </div>

    </div>
  );
};

export default Dashboard;
