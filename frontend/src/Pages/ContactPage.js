import { Grid, Typography } from "@mui/material";
import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Footer from "../Component/Footer.js"

function ContactPage() {
    return (
        <>
            <Grid container sx={{ margin: "100px 0", backgroundColor: "dimgray", color: "white", padding: "30px 0" }} spacing={2}>
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
                    <LocationOnIcon sx={{ fontSize: 40, marginRight: 2, color: '#CD366B', marginBottom: '10px' }} />
                    <div>
                        <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                            Bal Asha Trust, King George V
                        </Typography>
                        <Typography sx={{ marginBottom: 1 }}>
                            Memorial, Dr. E. Moses Road,
                        </Typography>
                        <Typography sx={{ marginBottom: 1 }}>
                            Mahalaxmi, Mumbai, MH 400011.
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }} >
                    <VolunteerActivismIcon sx={{ fontSize: 40, marginRight: 2, color: '#CD366B', marginBottom: '10px' }} />
                    <div>
                        <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                            Bal Asha Child Development Centre,
                        </Typography>
                        <Typography sx={{ marginBottom: 1 }}>
                            B2 Saifee Park Opp. Isable School,
                        </Typography>
                        <Typography sx={{ marginBottom: 1 }}>
                            Dr. Mascaranes Road, Mazgon,
                        </Typography>
                        <Typography sx={{ marginBottom: 1 }}>
                            Mumbai 400 010.
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ fontSize: 40, marginBottom: 1, color: '#CD366B', marginBottom: '10px' }} />
                        <div sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                            <LocalPhoneIcon dksjcn sx={{ fontSize: 20, marginRight: 2, color: '#CD366B' }} />
                            <span>+91 9930986400</span>
                        </div>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ fontSize: 20, marginRight: 2, color: '#CD366B' }} />
                            <span>info@balashatrust.org</span>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Footer />

        </>

    );
}

export default ContactPage;