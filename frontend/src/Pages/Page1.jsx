import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import Navbar from "../Component/Navbar";
import Home from "../Component/Home";
import Dashboard from "../Component/Dashboard"

function Page1() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default Page1;
