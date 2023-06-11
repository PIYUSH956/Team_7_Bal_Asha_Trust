import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotAssignedIcon from '@mui/icons-material/PendingActions';
import OnGoingIcon from '@mui/icons-material/Assignment';
import CompletedIcon from '@mui/icons-material/AssignmentTurnedIn';
import SocailWorkersIcon from '@mui/icons-material/Group';
import SocialWorkerDashboard from "../Pages/SocialWorkerDashboard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


// const {t} = useTranslation();
// var dash = {t('Dashboard')}

const SidebarData= [ 
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard",
    },
    {
        title: "Pending Cases",
        icon: <NotAssignedIcon/>,
        link: "/pending",
    },{
        title: "On Going Cases",
        icon: <OnGoingIcon/>,
        link: "/on-going-cases",
    },{
        title: "Completed Cases",
        icon: <CompletedIcon/>,
        link: "/completed-cases",
    },
    // {
    //     title: "Newspaper Article",
    //     icon: <CompletedIcon/>,
    //     link: "/pdf-generator",
    // },
]

export function Side(){

    var state = useSelector((state) => ({ ...state }));

   
}

export default SidebarData;

