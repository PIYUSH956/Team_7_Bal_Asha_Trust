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

// import { useTransition } from "react";
// import i18next from "i18next";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTranslation } from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const useStyles = makeStyles((theme) => ({
  circularGridContainer: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  circularGridItem: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
}));

function HomePage() {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <>
      <section className="header-img">
        <div className="header-text-box">
          <p className="tag-line">{t('Bal Asha Trust')}</p>
          <p className = "border-line">{t('Where every child has a future')}</p>
        </div>
      </section>

      {/* cards */}

      <p className="head-size">{t('What We Do')}</p>

      <Grid spacing={2} container sx={{ marginTop: "0px", fontFamily: "initial",paddingTop: "20px" }}  className="childCard text-style classes.circularGridContainer">
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
                <p className="head-black-under">
                  {t("Children's Home")}
                </p>
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
                <p className="head-black-under">
                  {t("Adoption")}
                </p>
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
                <p className="head-black-under">
                  {t("Child Development Center")}
                </p>
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
                <p className="head-black-under">
                  {t("Awareness and Training")}
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


      </Grid>



      {/* About Bal Asha */}

      <section className="about">
        <p className="para" >
          {t("Bal Asha trust us one of...")}
        </p>
        <br></br>
        <p className="para" >
          {t("We actively...")}
        </p>
      </section>

      {/* icons */}

      <section className="icon-collection">
        <Grid container item lg={12} className="container">
          <Grid item lg={4} xs={12}>
            <AccessibilityNewIcon sx={{fontSize: "3rem"}} />
            <Typography >4340</Typography>
          </Grid>
          <Grid  item lg={4} xs={12}>
            <FamilyRestroomOutlined sx={{fontSize: "3rem"}} />
            <Typography >329</Typography>
          </Grid>
          <Grid  item lg={4} xs={12}>
            <VolunteerActivismIcon sx={{fontSize: "3rem"}} />
            <Typography >477</Typography>
          </Grid>
        </Grid>

        <Grid container item lg={12} className="container">
          <Grid item lg={4} xs={12}>
            <AccessibilityNewIcon sx={{fontSize: "3rem"}} />
            <Typography >4340</Typography>
          </Grid>
          <Grid  item lg={4} xs={12}>
            <FamilyRestroomOutlined sx={{fontSize: "3rem"}} />
            <Typography >329</Typography>
          </Grid>
          <Grid  item lg={4} xs={12}>
            <VolunteerActivismIcon sx={{fontSize: "3rem"}} />
            <Typography >477</Typography>
          </Grid>
        </Grid>
        <Grid container item lg={12} className="container">
          <Grid item lg={4} xs={12}>
            <AccessibilityNewIcon sx={{fontSize: "3rem"}} />
            <Typography >4340</Typography>
          </Grid>
          <Grid  item lg={4} xs={12}>
            <FamilyRestroomOutlined sx={{fontSize: "3rem"}} />
            <Typography >329</Typography>
          </Grid>
          <Grid  item lg={4} xs={12}>
            <VolunteerActivismIcon sx={{fontSize: "3rem"}} />
            <Typography >477</Typography>
          </Grid>
        </Grid>

      </section>


      {/* OUr Journey */}
      <p className="head-size">{t('Our Journey')}</p>
      <section className="our-journey">
        
        <p className="para">{t('our journey para')}</p>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
