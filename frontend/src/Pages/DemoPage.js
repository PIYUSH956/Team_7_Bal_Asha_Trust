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
        const base64 = await convertToBase64(file);
        try {
            const x = await axios.post("http://localhost:4000/api/insert-data", {
                image: base64
            });
            console.log(x);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{

        const payload = {
            email: "temp mail",
            role: "temp role",
        };

        console.log(payload);
        // navigate("/")
    
        dispatch({
            type: "LOGGED_IN_USER",
            payload,
        });
    

    },[])

   

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }


    function convertBase64ToImage(base64String) {
        var image = new Image();
        image.src = base64String;

        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        var imageDataURL = canvas.toDataURL('image/png');

        var newImage = new Image();
        newImage.src = imageDataURL;

        newImage.onload = function () {
            // The image has been loaded and can be used here.
            console.log("Image loaded successfully.");
        };
    }



    return (

        <>
            <input type="file" lable="image" accept=".jpeg ,.png" onChange={(e) => { setFile(e.target.files[0]) }} />
            <button onClick={handleClick}> Submit </button>
            <h1>I am Demo Page </h1>
            <img src={b} />
        </>
    );
}

export default DemoPage;
