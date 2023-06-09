import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CaseManagerDashboard from './CaseManagerDashboard';
import SidebarData from '../Component/SidebarData';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from "@mui/material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from '@mui/material/Badge';
import SocailWorkersIcon from '@mui/icons-material/Group';
import { useSelector, useDispatch } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "../Css/Sidebar.css";
import { deepPurple, purple } from '@mui/material/colors'; 
import NotificationBell from '../Component/NotificationBell';

const drawerWidth = 240;
const color = deepPurple[50];
const profileItems = ["Profile", "Dashboard", "Logout"];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function insertIfNotPresent(array, value) {
  if (array.indexOf(value) === -1) {
    array.push(value);
  }
}

export default function PersistentDrawerLeft() {

  var state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [drawer,setdrawer]=React.useState(false);
  const [anchorEl,setAnchorEl]=React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const openNotification=(event)=>{
    setAnchorEl(event.currentTarget);
    setdrawer(true);
  };

  const closeNotification=(event)=>{
    setdrawer(false);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {

    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/")
  }

  const handleProfile = () => {
    navigate("/user-profile")
  }

  const handleCloseUserMenu = (e, setting) => {
    if (setting == "Logout") {
      handleLogout();
    }
    if (setting == "Profile") {
      handleProfile();
    }
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const handleClickOnProfile = (e) => {
    console.log("C");
  }




  return (
    <>
      <CssBaseline />
      <AppBar position="static" open={open}>
        <Toolbar sx={{ backgroundColor: "#382A41" ,display:'flex' , justifyContent:'space-between'}}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <p className="heading-item" >Bal Asha Trust</p>
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <NotificationBell
              size="large"
              aria-label="show 17 new notifications"
              color={color}
              badgeContent={17}
              id={state.user._id}
              anchorEl={anchorEl}
              onClick={openNotification}
            />
              
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={state.user.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {profileItems.map((setting) => (
                <MenuItem   key={setting} onClick={(e) => handleCloseUserMenu(e, setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <div>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#382A41",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <p className="subheading-item">{state.user.role=="root" ? "Social Worker":
            state.user.role=="manager" ? "Case Manager" : "Admin"}
          </p>

            <IconButton sx={{marginTop: "15px"}}onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon sx={{ color: "#FFF" }} />
              ) : (
                <ChevronRightIcon sx={{ color: "#FFF" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {SidebarData.map((val, key) => {
              return (
                <ListItem
                  key={key}
                  className="rowitem"
                  id={window.location.pathname == val.link ? "active" : ""}
                  disablePadding
                  onClick={() => {
                    navigate(val.link);
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {React.cloneElement(val.icon, {
                        style: {
                          color:
                            window.location.pathname == val.link
                              ? "white"
                              : "white",
                        },
                      })}
                    </ListItemIcon>
                    <ListItemText primary={val.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <List >

          {state.user.role == "root" &&  
          <ListItem
              key={"child-data-form"}
              className="rowitem"
              id={window.location.pathname == "/child-data-form" ? "active" : ""}
              disablePadding
              onClick={() => {
                navigate("/child-data-form");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(<PersonAddIcon />, {
                    style: {
                      color:
                        window.location.pathname == "/child-data-form"
                          ? "white"
                          : "white",
                    },
                  })}
                </ListItemIcon>
                <ListItemText primary={"New Registration"} />
              </ListItemButton>
            </ListItem>}
          </List>
          <List >
          {state.user.role == "admin" && <> 
          
          <ListItem
              key={"Create Volunteer"}
              className="rowitem"
              id={window.location.pathname == "/create-new-volunteer" ? "active" : ""}
              disablePadding
              onClick={() => {
                navigate("/create-new-volunteer");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(<SocailWorkersIcon />, {
                    style: {
                      color:
                        window.location.pathname == "/create-new-volunteer"
                          ? "white"
                          : "#ff8100",
                    },
                  })}
                </ListItemIcon>
                <ListItemText primary={"Create Volunteer"} />
              </ListItemButton>
            </ListItem>
          
            <ListItem
              key={"abandond"}
              className="rowitem"
              id={window.location.pathname == "/abandond" ? "active" : ""}
              disablePadding
              onClick={() => {
                navigate("/abandond");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(<SocailWorkersIcon />, {
                    style: {
                      color:
                        window.location.pathname == "/abandond"
                          ? "white"
                          : "white",
                    },
                  })}
                </ListItemIcon>
                <ListItemText primary={"Abandoned"} />
              </ListItemButton>
            </ListItem>
            </>
            
            }
          </List>
        </Drawer>
      </div>
      {/* <Main open={open} className="dashboard-back">
        <DrawerHeader />
      </Main> */}
    </>
  );
}
