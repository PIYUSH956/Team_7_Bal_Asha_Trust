import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography, MenuItem, Select } from '@mui/material';
import { Card } from '@material-ui/core';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import '../Css/Process.css'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector } from 'react-redux';
import Box1 from '../Component/Box1';
import Box2 from '../Component/Box2';




export default function Process() {

    const [process, setProcess] = useState([]);


    const [one, setOne] = useState();

    const [two, setTwo] = useState();

    const [three, setThree] = useState();

    const [four, setFour] = useState();



    var objData = [];





    var state = useSelector((state) => ({ ...state }));
    const category = useParams().category;
    const childID = useParams().id;
    const assignedWorkerID = state.user._id;

    useEffect(() => {

        async function fetchData() {
            try {

                const processStep = await axios.post("http://localhost:4000/api/get-process-by-category", { category });
                const processData = await axios.post("http://localhost:4000/api/get-data-in-process", { childID, assignedWorkerID });
                const A = processStep.data[0].steps;
                const B = processData.data != null ? processData.data.data : "";
                console.log(A, B);

                for (var itemA in A) {
                    for (var itemB in B) {
                        if (A[itemA].name == B[itemB].name) {
                            A[itemA].value = B[itemB].value;
                            A[itemA].status = B[itemB].status;
                            A[itemA].date = B[itemB].date;
                        }
                    }
                }

                console.log(A);


                console.log(processData);
                setProcess(A);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);


        console.log(process);






  




    return (<>


        {process.map((pro) => {

            return (<>

                <h3>{"Step " + pro.step}  {"Part " + pro.part}</h3>
                {pro.type == "text" ? <>

                    <Box1 
                    
                    category ={category}
                    assignedWorkerID = {assignedWorkerID}
                    childID = {childID}
                    name={pro.name} desc={pro.description} step={pro.step} part={pro.part} value={pro.value} type={pro.type} date={pro.date} status={pro.status} />

                </> : <>

                    <Box2  
                      
                    category ={category}
                    assignedWorkerID = {assignedWorkerID}
                    childID = {childID}
                    name={pro.name} desc={pro.description} step={pro.step} part={pro.part} value={pro.value} type={pro.type} date={pro.date} status={pro.status} />



                </>}
            </>);

        })}




    </>)



}