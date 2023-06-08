import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Process() {
    const id = "";
    const category = "";
    const [process, setProcess] = useState([]);
    const catg = "abandond";  /////useParams().id;



    useEffect(() => {

        async function fetchData() {
            try {

                const data = await axios.post("http://localhost:4000/api/get-process-by-category", { category: catg });
                console.log(data.data[0].steps);
                setProcess(data.data[0].steps);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
        , []);


    return (<>


        {process.map((pro) => {

            return (<>
                {pro.type == "text" ? <>

                <textarea value={pro.name} />
                <textarea value={pro.discussion} />
                <input type="text" />
                {/* Select status from Pending,OnGoing, completed */}
                <input type="date" />
                <br></br>
                
                

                </> : <>

                <textarea value={pro.name} />
                <textarea value={pro.discussion} />
                <input type="file" />
                {/* Select status from Pending,OnGoing, completed */}
                <input type="date" />
                <br></br>



                </>}
            </>);

        })}




    </>)



}