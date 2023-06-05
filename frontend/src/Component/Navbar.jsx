import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../Css/Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  var state = useSelector((state) => ({ ...state }));
  
  console.log(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/")
  }

  const handleDashboardClick = (e)=>{
    e.preventDefault();
    const role = state.user.role;
    console.log("ROLE",role);
    if(role == "root")
    navigate("/dashboard");
    else if(role == "admin")
    navigate("/admin-dashboard");
    else if(role == "manager")
    navigate("/manager-dashboard");
  }

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Bal Asha Trust
            <HomeIcon />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {state.user != null && <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-links"
                onClick={handleDashboardClick}
              >
                Dashboard
              </NavLink>
            </li>}
            <li className="nav-item">
              { state.user == null && <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>}
            </li>
            <li className="nav-item">
              { state.user != null && <NavLink
                exact
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>}
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                signup
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
