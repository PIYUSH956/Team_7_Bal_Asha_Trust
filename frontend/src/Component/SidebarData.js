import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotAssignedIcon from '@mui/icons-material/PendingActions';
import OnGoingIcon from '@mui/icons-material/Assignment';
import CompletedIcon from '@mui/icons-material/AssignmentTurnedIn';
import SocailWorkersIcon from '@mui/icons-material/Group';
import SocialWorkerDashboard from "../Pages/SocialWorkerDashboard";

export const SidebarData= [ 
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/manager-dashboard",
    },
    {
        title: "Not Assigned Cases",
        icon: <NotAssignedIcon/>,
        link: "/dashboard",
    },{
        title: "On Going Cases",
        icon: <OnGoingIcon/>,
        link: "/dashboard",
    },{
        title: "Completed Cases",
        icon: <CompletedIcon/>,
        link: "/dashboard",
    },{
        title: "Social Workers",
        icon: <SocailWorkersIcon/>,
        link: "/dashboard",
    },
]