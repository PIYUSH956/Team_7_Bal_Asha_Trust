import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  { useState, useEffect } from 'react';
import axios from 'axios'
import "../Css/Notification.css"

const BasicMenu = ({ anchorEl, handleClose, open, menuItems,clearBtn }) => {
    

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            
        >
            {menuItems.map((item) => (
                <MenuItem
                    onClick={handleClose}
                    sx={{":hover": {
                        bgcolor: "#CD366B",
                        color: "white"
                    }}}
                >
                    <Box sx={{flexDirection: 'column', maxWidth:'20vw',width:1 ,":hover": {
                        bgcolor: "#CD366B",
                        color: "white"
                    }}}>
                        <div className='text'>
                        {item.message}
                        </div>
                    </Box>
                </MenuItem>


            ))}

            <MenuItem>
                <Box 
                onClick={clearBtn}
                sx={{width : 1 , display:'flex' ,justifyContent:'center',bgcolor:'#CD366B', color:'white' , ":hover": {
                    bgcolor: "#382A41",
                    color: "white"
                }}}
                >
                        {"Clear Messages"}



                    </Box>
            </MenuItem>
        </Menu>

    )
}

export default BasicMenu