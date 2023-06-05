import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Component/Login';
import Dashboard from './Pages/RootDashboard';
import Signup from './Component/Signup';
import Header from './Component/Header';

import DemoPage from './Pages/DemoPage';
import CaseManagerDashboard from './Pages/CaseManagerDashboard';
import ChildDataForm from './Pages/ChildDataForm';
import { useSelector, useDispatch } from 'react-redux';
import PageNotFound from './Pages/PageNotFound';
import { useEffect } from 'react';
import AdminDashboard from './Pages/AdminDashboard';
function App() {

  let dispatch = useDispatch();
  var state = useSelector((state) => ({ ...state }));

  console.log(state);
  useEffect(() => {

    const payload = JSON.parse(localStorage.getItem('user-detail'));
    if (payload != null) {
      dispatch({
        type: "LOGGED_IN_USER",
        payload,
      });
    }
    console.log(payload);

  }, [])

  console.log(state);

  return (
    <>
    {/* <Navbar /> */}
    <Header />

      {/* // All routes will go here */}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<PageNotFound />} />

        {(state.user != null && state.user.role == "root") &&  <Route path="/dashboard" element={<Dashboard />} /> }


        {(state.user != null && state.user.role == "manager") && <Route path="/manager-dashboard" element={<CaseManagerDashboard />} /> }
        {(state.user != null && state.user.role == "admin") && <Route path="/admin-dashboard" element={<AdminDashboard />} />  }


        <Route path="/login" element={<Login />} />


        {true && <Route path="/signup" element={<Signup />} />}


        {/* //TESTING PURPOSE */}
        <Route path="/demo" element={<DemoPage />} />


        {state.user != null && state.user.role == "manager" && <Route path="/case-manager" element={<CaseManagerDashboard />} />}

        {state.user != null && state.user.verified === true && state.user.role == "root" && <Route path="/child-data-form" element={<ChildDataForm />} />}

      </Routes>

    </>
  );
}

export default App;
