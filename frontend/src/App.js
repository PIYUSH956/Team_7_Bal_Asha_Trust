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
import Dash from './Pages/Dash';
import ProfileForCm from './Pages/ProfileForCm';
import Abandond from './Pages/Abandond';
import PendingChildTable from './Component/PendingChildTable';
import OnGoingChildTable from './Component/OnGoingChildTable';
import CompletedChildTable from './Component/CompletedChildTable';

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
    {state.user != null  ? <Dash/> : <Navbar />}
    {/* <Header /> */}

      {/* // All routes will go here */}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/pdf-generator" element={<PdfGenerator />} />
        <Route path="/pending" element={<PendingChildTable />} /> 
        <Route path="/on-going" element={<OnGoingChildTable />} /> 
        <Route path="/completed" element={<CompletedChildTable />} /> 

        <Route path="/abandond" element={<Abandond />} />

        <Route path="/profile" element={<ProfileForCm />} />
        

        <Route path="*" element={<PageNotFound />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="contact" element={<ContactPage/>} />
        {state.user  != null && <Route path="/profile/:id" element={<ChildAccountPage />} />}

        {state.user  != null && <Route path="/user-profile" element={<ProfileForCm />} />}

        {(state.user != null && state.user.role == "root") &&  <Route path="/dashboard" element={<Dashboard />} /> }


        {(state.user != null && state.user.role == "manager") && <Route path="/manager-dashboard" element={<CaseManagerDashboard />} /> }
        {(state.user != null && state.user.role == "admin") && <Route path="/admin-dashboard" element={<AdminDashboard />} />  }


        <Route path="/login" element={<Login />} />


        {(state.user != null && state.user.role == "admin") && <Route path="/signup" element={<Signup />} />}


        {/* //TESTING PURPOSE */}
        <Route path="/demo" element={<DemoPage />} />


        {state.user != null && state.user.role == "manager" && <Route path="/case-manager" element={<CaseManagerDashboard />} />}

        {state.user != null && state.user.verified === true && state.user.role == "root" && <Route path="/child-data-form" element={<ChildDataForm />} />}

      </Routes>

    </>
  );
}

export default App;
