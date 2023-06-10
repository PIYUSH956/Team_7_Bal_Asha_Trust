import React, { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from './BasicMenu';
import {useSelector} from 'react-redux';
import axios from 'axios'


const NotificationBell = ({ color , id }) => {
    const [open, setOpen] = React.useState(false);
    const [clearMessage, setClearMessage] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notifications, setNotification] = React.useState([]);
    const newNotifications = `You have ${notifications.length} new notifications!`;
    const noNotifications = 'No new notifications';

    console.log(id);

    const clearBtn = (event) => {
        setClearMessage(true);
        setNotification([]);
        setOpen(false);

        async function fetchData() {
            try {
                var data = await axios.put("http://localhost:4000/api/clear-notification",{id});
                 

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
      };
    
    useEffect(() => {

        async function fetchData() {
            try {
                var data = await axios.post("http://localhost:4000/api/get-notification",{id});
                 console.log(data);
                data = data.data;
                console.log(data);
                 setNotification(data);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);

  
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box component="div" sx={{ display: 'inline' }}>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color='inherit'
                    onClick={notifications.length ? handleOpen : null}
                    anchorEl={anchorEl}
                >
                    <Badge
                        badgeContent={notifications.length}
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
                clearBtn={clearBtn}
            />
       </Box>
    )
}

export default NotificationBell