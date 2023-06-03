import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import Navbar from "../Component/Navbar";
import Home from "../Component/Home";
import Dashboard from "../Component/Dashboard"

function Page1() {
  return (
   <h1>I am Home Page </h1>
  );
}

export default Page1;
