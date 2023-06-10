import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Component/Login';
import Dashboard from './Pages/Dashboard';
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import DemoPage from './Pages/DemoPage';
import CaseManagerDashboard from './Pages/CaseManagerDashboard';
import ChildDataForm from './Pages/ChildDataForm';
import { useSelector, useDispatch } from 'react-redux';
import PageNotFound from './Pages/PageNotFound';
import { useEffect } from 'react';
import AdminDashboard from './Pages/AdminDashboard';
import ChildAccountPage from './Pages/ChildAccountPage';
import PdfGenerator from './Component/PdfGenerator';
import Process from './Pages/Process';
import Dash from './Pages/Dash';
import ProfileForCm from './Pages/ProfileForCm';
import Abandond from './Pages/Abandond';
import PendingChildTable from './Component/PendingChildTable';
import OnGoingChildTable from './Component/OnGoingChildTable';
import CompletedChildTable from './Component/CompletedChildTable';
import ScheduleDetails from './Component/ScheduleDetails';
import ProcessDetails from './Component/ProcessDetails';
import Surrendered from './Pages/Surrendered';
import Orphaned from './Pages/Orphaned';
import AdmittedInCCI from './Pages/AdmittedInCCI';

import Detail from './Pages/Detail';


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
    console.log("PAYLOAD", payload);
  }, [])

  console.log(state);

  return (
    <>
    {state.user != null  ? <Dash/> : <Navbar />}
    {/* <Header /> */}

      {/* // All routes will go here */}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/pdf-generator" element={<PdfGenerator />} />
        {/* <Route path="/pdf-generator/:id" element={<PdfGenerator />} /> */}


        <Route path="/pending" element={<PendingChildTable />} /> 
        <Route path="/on-going" element={<OnGoingChildTable />} /> 
        <Route path="/completed" element={<CompletedChildTable />} /> 

        <Route path="/process-details" element={<ProcessDetails/>}/>
        <Route path="/schedule" element={<ScheduleDetails/>}/>


        <Route path="/process" element={<CompletedChildTable />} /> 

        <Route path="/abandond" element={<Abandond />} />
        <Route path="/surrendered" element={<Surrendered />} />
        <Route path="/orphaned-no-guardian" element={<Orphaned />} />
        <Route path="/child-admitted-in-cci-by-family" element={<AdmittedInCCI />} />

        <Route path="*" element={<PageNotFound />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="contact" element={<ContactPage/>} />
        {state.user  != null && <Route path="/profile/:id" element={<ChildAccountPage />} />}

        {state.user  != null && <Route path="/user-profile" element={<ProfileForCm />} />}

        {(state.user != null) && <Route path="/dashboard" element={<Dashboard />} /> }

        <Route path="/on-going-cases" element={<OnGoingChildTable />} />

        <Route path="/completed-cases" element={<CompletedChildTable />} />
       

        <Route path="/login" element={<Login />} />

        <Route path = "/completed-detail/:id" element = {<Detail />} />


        <Route path="/schedule/:id/:category" element={<ScheduleDetails />} />


        {state.user != null && <Route path="/process/:id/:category" element={<Process />} />}


        <Route path="/demo-category" element={<Process />} />

        


        { <Route path="/create-new-volunteer" element={<Signup />} />}


        {/* //TESTING PURPOSE */}
        <Route path="/demo" element={<DemoPage />} />


      
        {state.user != null  && state.user.role == "root" && <Route path="/child-data-form" element={<ChildDataForm />} />}

      </Routes>

    </>
  );
}

export default App;
