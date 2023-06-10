import React from "react"
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";


function LanguageDropdown(props){
    return (
        <FormControl sx={{ backgroundColor:"white", m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-simple-select-table">Language</InputLabel>
            <Select onChange={props.onChange}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="hi">Hindi</MenuItem>
            <MenuItem value="mr">Marathi</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LanguageDropdown;