import React from "react";
import "../Css/HomePage.css";
import AdoptionImg from "../Images/Adoption.jpg"
import ChildrenHomeImg from "../Images/ChildrenHome.jpg"
import AwarenessImg from "../Images/Awareness.jpg"
import ChildDevelopmentImg from "../Images/Development.jpg"
import { Box, Card, CardContent, Typography, Button, CardActionArea, CardMedia, CardActions, Grid } from '@mui/material'
import ChildAccountPage from "./ChildAccountPage";
import Footer from "../Component/Footer"

// icon-collection
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { FamilyRestroomOutlined } from "@mui/icons-material";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  roundedImage: {
    borderRadius: '50%',
    // width: '100%',
    height: "80%",
    objectFit: 'cover',
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <section className="header-img">
        <div className="header-text-box">
          <Typography sx={{ fontSize: "100px", fontFamily: "initial" }}>Bal Asha Trust</Typography>
          <Typography sx={{ fontSize: "25px", fontFamily: "-moz-initial" }}>where every child has a future</Typography>
        </div>
      </section>

      {/* cards */}

      <Typography variant="h2" sx={{ textAlign: "center", margin: "80px auto 0px auto" }}>What We Do</Typography>

      <Grid spacing={2} container sx={{ marginTop: "0px", paddingTop: "20px" }} className="childCard">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                className={classes.roundedImage}
                image={ChildrenHomeImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
                  Children's Home
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                className={classes.roundedImage}
                image={AdoptionImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
                  Adoption
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                className={classes.roundedImage}
                image={ChildDevelopmentImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
                  Child Development Center
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                className={classes.roundedImage}
                image={AwarenessImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
                  Awareness and Training
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


      </Grid>



      {/* About Bal Asha */}

      <section className="about">
        <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.5rem" }} className="about-text" variant="h6">
          Bal Asha Trust is one of India’s most trusted. We give life changing quality care to abandoned and destitute children. Our team provides systematic approach of care to our children so they are safe, healthy, educated and happy! We want every child to grow in a family, so we work hard to reunite children with their families or place them in loving and caring Adoptive families children through a legal process.
        </Typography>
        <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.5rem", marginTop: "60px" }} className="about-text" variant="h6">
          We actively support vulnerable children and strengthen families in their difficult times through our Nutrition, Medical, Education and Awareness programmes. We are recipients of the prestigious Ahilyabai Holkar award from the Government of Maharashtra.
        </Typography>
      </section>

      {/* icons */}

      <section className="icon-collection">
        <div className="container">
          <div>
            <AccessibilityNewIcon sx={{fontSize: "3rem"}} />
            <Typography >4340</Typography>
          </div>
          <div>
            <FamilyRestroomOutlined sx={{fontSize: "3rem"}} />
            <Typography >329</Typography>
          </div>
          <div>
            <VolunteerActivismIcon sx={{fontSize: "3rem"}} />
            <Typography >477</Typography>
          </div>
        </div>

        <div className="container">
          <div>
            <LocalDiningIcon sx={{fontSize: "3rem"}} />
            <Typography >102325</Typography>
          </div>
          <div>
            <QueryBuilderIcon sx={{fontSize: "3rem"}} />
            <Typography >102325</Typography>
          </div>
          <div>
            <EditNoteIcon sx={{fontSize: "3rem"}} />
            <Typography >37692</Typography>
          </div>
        </div>

        <div className="container">
          <div>
            <FavoriteIcon sx={{fontSize: "3rem"}} />
            <Typography >4451</Typography>
          </div>
          <div>
            <MonitorHeartIcon sx={{fontSize: "3rem"}} />
            <Typography >3851</Typography>
          </div>
          <div>
            <MedicalServicesIcon sx={{fontSize: "3rem"}} />
            <Typography >676</Typography>
          </div>
        </div>

      </section>


      {/* OUr Journey */}
      <section className="our-journey">
        <Typography sx={{ marginBottom: "20px" }} variant="h2">Our Journey</Typography>
        <Typography variant="body1">Bal Asha’s journey- from a small charity  founded in 1985, to one of India’s most reputed organisations- has been as special as it is inspiring. Bal Asha is one of the few NGOs in India which specialize in taking care of children with special needs and placing such children in adoption. Bal Asha has been successful In placing many children in loving adoptive families and aims to continue to reach out to any  vulnerable child who is in need of care and protection</Typography>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
