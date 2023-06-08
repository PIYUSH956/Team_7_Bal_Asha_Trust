import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  { useState, useEffect } from 'react';
import axios from 'axios'

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
                >
                    <Box sx={{ flexDirection: 'column' }}>
                        {item.message}
                        


                    </Box>
                </MenuItem>


            ))}

            <MenuItem>
                <Box 
                onClick={clearBtn}
                >
                        {"clear messages"}



                    </Box>
            </MenuItem>
        </Menu>

    )
}

export default BasicMenu