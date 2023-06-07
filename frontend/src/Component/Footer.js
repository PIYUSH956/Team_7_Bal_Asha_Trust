import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from "../Images/logo.png"
import "../Css/HomePage.css";

function Footer(){
    return (
        <section className="footer">
        {/* <h4>About Us</h4> */}
        <img src={Logo} />
        <p className="para">
          The Bal Asha Trust is an awarded charitable organization that helps abandoned and marginalized children in the city of Mumbai. It was founded in 1985.
        </p>
        <div className="icons">
          <FacebookIcon sx={{ margin: "0px 5px" }} />
          <TwitterIcon sx={{ margin: "0px 5px" }} />
          <InstagramIcon sx={{ margin: "0px 5px" }} />
          <LinkedInIcon sx={{ margin: "0px 5px" }} />
        </div>
        <p style={{marginTop:"5px"}} className="para">Bal Asha © 2019 | All Rights Reserved.</p>
      </section>
    );
}

export default Footer;