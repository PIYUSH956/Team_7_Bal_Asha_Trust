import React from "react";
import "../Css/HomePage.css";
import fimg from "../Images/Download.jpeg"
import {Box, Card , CardContent, Typography, Button, CardActionArea, CardMedia, CardActions, Grid} from '@mui/material'

function HomePage() {
  return (
   <>
   
   <section className="header-img">

     <div className="header-text-box">
      <h1>Every vulnerable and abondoned child</h1>
      <h2>has a future at Bal Asha Trust</h2>
     </div>
    
   </section>

   {/* cards */}

   <Grid container className="childCard">
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={fimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            Abondonned
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Children who have been left or separated from their parents or legal guardians and are in need of care and support. 
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Grid> 

    <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={fimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Grid>

    <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={fimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Grid>

    <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={fimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Grid>


   </Grid>

   
   
   
   </>
  );
}

export default HomePage;
