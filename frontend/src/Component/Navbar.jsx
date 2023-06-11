import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/logo.png";
import "../Css/Navbar.css";
import LanguageDropdown from "./LanguageDropdown";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

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

  const handleProfile = (e) =>{
    e.preventDefault();
    navigate("/user-profile");
  }

  const handleChange=(e) =>{
    i18next.changeLanguage(e.target.value);
    //now store the current language in local storage
    localStorage.setItem('i18lang',e.target.value);
  }

  useEffect(() => {
    let currenLang = localStorage.getItem('i18lang');
    i18next.changeLanguage(currenLang);
  },[])

  const {t} = useTranslation();

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* navbar logo added */}
            <img src={Logo} alt="Bal Asha Trust" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links btn-clr"
                onClick={handleClick}
              >
                {t('Home')}
              </NavLink>
            </li>

            {/* language dropdown */}
            <li >
              <LanguageDropdown onChange={(e) => handleChange(e)} />
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links btn-clr"
                onClick={handleClick}
              >
               {t('Login')}
              </NavLink>
            </li>


            {state.user != null && <li className="nav-item">
              { state.user != null && <NavLink
                exact
                activeClassName="active"
                className="nav-links"
                onClick={handleProfile}
              >
                {t('Profile')}
              </NavLink>}
            </li>}

            <li className="nav-item">
              { state.user != null && <NavLink
                exact
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
                {t('Logout')}
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
