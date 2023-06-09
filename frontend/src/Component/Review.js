import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import {useState} from 'react';
import "../Css/Review.css"


// const personalDetail = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

function formatString(inputString) {
  // Capitalize the first letter of the string
  const formattedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

  // Add a space before every capital letter
  const finalString = formattedString.replace(/([A-Z])/g, ' $1');

  return finalString;
}




export default function Review() {

  var state = useSelector((state) => ({ ...state }));
  console.log(state);
  var formData = state.form;
  console.log(formData);
  const [caseDetails,setCaseDetails] = useState([]);
  const [image,setImage] = useState();

  React.useEffect(()=>{


    var arr = [];
    for(var key in formData){

      if (formData.hasOwnProperty(key)) {

        if(key == "image") {
          setImage(formData[key]);
          continue;
        }

        if(formatString(key).includes("Date")){
          var dateObject = formData[key];
          console.log(dateObject);
          var date = dateObject.$D + "/" + (dateObject.$M + 1) + "/" + dateObject.$y;
          console.log(date);
          arr.push([formatString(key), date]);
        }else{
          arr.push([formatString(key), formData[key]]);
        }
        
      }

    }
    setCaseDetails(arr);

  },[])


  console.log(caseDetails);
  


  return (
    <React.Fragment>
      
      
      <Grid container spacing={2}>
        
        <Grid item container direction="column" xs={12}>

          <Grid display="flex" justifyContent="center" alignItems="center">
          <img className="image" src={image} />
          </Grid>
          
          <Grid container>
            {caseDetails.map((caseDetail,i) => (
              <React.Fragment key={i}>
                <Grid item xs={6} display="flex" justifyContent="left" alignItems="left">
                  <Typography fontWeight="700" textAlign="left" gutterBottom>{caseDetail[0]}</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="left" alignItems="left">
                  <Typography textAlign="left" gutterBottom>{caseDetail[1]}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
