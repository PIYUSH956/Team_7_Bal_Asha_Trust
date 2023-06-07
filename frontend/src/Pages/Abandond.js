import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
    centerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh', // Optional, to center vertically on the screen
    },
}));



const Abandond = () => {


    const [name, setName] = useState();
    const [nameD, setNameD] = useState();
    const [type, setType] = useState();
    const [step, setStep] = useState(0);
    const [part, setPart] = useState(0);
    const [num, setNum] = useState(0);
    const [steps, setSteps] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {

                const p = await axios.get("http://localhost:4000/api/get-abandond");
                console.log(p.data);
                console.log(p.data[0].steps);
                setSteps(p.data[0].steps);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();

    }, []);

    const handleUpdate = async (e) => {

        console.log(name,type,step,part,num);

        try {

            const p = await axios.post("http://localhost:4000/api/add-abandond", { name, type, step, part, num });
            console.log(p);

        } catch (err) {
            console.log(err);
        }


    }



    const handleDelete = async (e) => {


        console.log(nameD);

        try {

            const pp = await axios.post("http://localhost:4000/api/delete-abandond", { nameD });
            console.log(pp);

            const p = await axios.get("http://localhost:4000/api/get-abandond");
            console.log(p.data);
            console.log(p.data[0].steps);
            setSteps(p.data[0].steps);


        } catch (err) {
            console.log(err);
        }

        try{
            const p = await axios.get("http://localhost:4000/api/get-abandond");
            console.log(p.data);
            console.log(p.data[0].steps);
            setSteps(p.data[0].steps);
        }catch(err){
            console.log(err);
        }


    }

    const classes = useStyles();

    return <>





        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    onChange={(e) => { setName(e.target.value) }}
                    label="Required"
                    placeholder='Name'
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    onChange={(e) => { setType(e.target.value) }}
                    placeholder="text or pdf"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setStep(e.target.value) }}
                    placeholder="Step"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setPart(e.target.value) }}
                    placeholder="part"
                />
                <TextField
                    id="outlined-required"
                    label="Required"
                    type="number"
                    onChange={(e) => { setNum(e.target.value) }}
                    placeholder="Position"
                />
            </div>


        </Box>


        <div className={classes.centerButton}>
            <Button variant="contained" onClick={handleUpdate}>Add</Button>
        </div>

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    onChange={(e) => { setNameD(e.target.value) }}
                    label="Required"
                    defaultValue="Name"
                />
            </div>
        </Box>

        <div className={classes.centerButton}>
            <Button variant="contained" onClick={handleDelete}>Delete</Button>
        </div>


        {steps.map((val) => {
            if (val.type === "pdf") {
                return (
                    <>
                    <TextField
                        required
                        id="outlined-required"
                        disabled
                        type="file"
                        label={val.name}
                    />
                    <br></br>
                    </>
                );
            }
            else {
                return (
                    <>
                    <TextField
                        required
                        id="outlined-required"
                        disabled
                        type="text"
                        label="Required"
                        value={val.name}
                    />
                    <br></br>
                    </>
                );
            }
        }
        )}











    </>
}
export default Abandond;