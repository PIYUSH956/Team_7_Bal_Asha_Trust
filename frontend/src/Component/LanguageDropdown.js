import React from "react"
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';


function LanguageDropdown(props){
    return (
        <FormControl sx={{ backgroundColor:"white", m: 1, minWidth: 80 }} size="small">
            <InputLabel id="demo-simple-select-table"><LanguageIcon/></InputLabel>
            <Select onChange={props.onChange}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="hi">हिन्दी</MenuItem>
            <MenuItem value="mr">मराठी</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LanguageDropdown;