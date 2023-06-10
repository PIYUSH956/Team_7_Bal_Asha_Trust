import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

function DemoPage() {

    const [file, setFile] = useState();
    let dispatch = useDispatch();

    const state = useSelector((state) => ({ ...state }));

    var b = "";
    const handleClick = async (e) => {
        e.preventDefault();
       // const base64 = await convertToBase64(file);
        try {
            const x = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            console.log(x);
            setFile(x.data);
        } catch (err) {
            console.log(err);
        }
    }
    // useEffect(()=>{


    //     const f = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    //     console.log("S",f);
       
    


    // },[])
   
    // const ss = useSelector((state) => ({ ...state }));
    // console.log("SSS",ss);
   

    // function convertToBase64(file) {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result)
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         }
    //     })
    // }


    // function convertBase64ToImage(base64String) {
    //     var image = new Image();
    //     image.src = base64String;

    //     var canvas = document.createElement('canvas');
    //     canvas.width = image.width;
    //     canvas.height = image.height;

    //     var context = canvas.getContext('2d');
    //     context.drawImage(image, 0, 0);

    //     var imageDataURL = canvas.toDataURL('image/png');

    //     var newImage = new Image();
    //     newImage.src = imageDataURL;

    //     newImage.onload = function () {
    //         // The image has been loaded and can be used here.
    //         console.log("Image loaded successfully.");
    //     };
    // }



    return (

        <>
            {/* <input type="file" lable="image" accept=".jpeg ,.png" onChange={(e) => { setFile(e.target.files[0]) }} /> */}
            <button onClick={handleClick}> Submit </button>
            {/* {(file != null && file.data != null) ? file.title : "A"} */}
            <img src={b} />
        </>
    );
}

export default DemoPage;
