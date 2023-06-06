import React from "react";
import "../Css/HomePage.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AdoptionImg from "../Images/Adoption.jpg"
import ChildrenHomeImg from "../Images/ChildrenHome.jpg"
import AwarenessImg from "../Images/Awareness.jpg"
import ChildDevelopmentImg from "../Images/Development.jpg"
import {Box, Card , CardContent, Typography, Button, CardActionArea, CardMedia, CardActions, Grid} from '@mui/material'
import ChildAccountPage from "./ChildAccountPage";

function HomePage() {
  return (
   <>
   <section className="header-img">
     <div className="header-text-box">
     <Typography sx={{fontSize:"100px", fontFamily:"initial"}}>Bal Asha Trust</Typography>
     <Typography sx={{fontSize:"25px",fontFamily:"-moz-initial"}}>where every child has a future</Typography>
     </div>
   </section>

   {/* cards */}

   <Typography variant="h2" sx={{textAlign:"center", margin: "80px auto 0px auto"}}>What We Do</Typography>

   <Grid spacing={2} container sx={{marginTop:"0px", paddingTop:"20px" }} className="childCard">
    <Grid item  xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ChildrenHomeImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            Children's Home
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

    <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={AdoptionImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            Adoption
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

    <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ChildDevelopmentImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            Child Development Center
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

    <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={AwarenessImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            Awareness and Training
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



   {/* About Bal Asha */}

   <section className="about">
    <Typography sx={{fontFamily:"sans-serif", fontSize:"1.5rem"}} className="about-text" variant="h6">
    Bal Asha Trust is one of India’s most trusted. We give life changing quality care to abandoned and destitute children. Our team provides systematic approach of care to our children so they are safe, healthy, educated and happy! We want every child to grow in a family, so we work hard to reunite children with their families or place them in loving and caring Adoptive families children through a legal process.
    </Typography>
   </section>


   {/* OUr Journey */}
   <section className="our-journey">
    <Typography sx={{marginBottom:"20px"}}  variant="h2">Our Journey</Typography>
    <Typography variant="body1">Bal Asha’s journey- from a small charity  founded in 1985, to one of India’s most reputed organisations- has been as special as it is inspiring. Bal Asha is one of the few NGOs in India which specialize in taking care of children with special needs and placing such children in adoption. Bal Asha has been successful In placing many children in loving adoptive families and aims to continue to reach out to any  vulnerable child who is in need of care and protection</Typography>
   </section>


   {/* <!-- footer --> */}

   <section className="footer">
        <h4>About Us</h4>
        <p>
        The Bal Asha Trust is an awarded charitable organization that helps abandoned and marginalized children in the city of Mumbai. It was founded in 1985.  
        </p>
        <div className="icons">
            <FacebookIcon sx={{margin: "0px 5px"}} />
            <TwitterIcon sx={{margin: "0px 5px"}} />
            <InstagramIcon sx={{margin: "0px 5px"}} />
            <LinkedInIcon sx={{margin: "0px 5px"}} />
        </div>
        <p>Bal Asha © 2019 | All Rights Reserved.</p>
    </section>
   
   </>
  );
}

export default HomePage;
