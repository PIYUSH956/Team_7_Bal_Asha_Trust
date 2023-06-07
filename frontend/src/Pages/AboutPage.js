import { Typography, Divider, useTheme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import "../Css/About.css"
import Footer from "../Component/Footer"


function AboutPage() {

    return (
        <>
                <div className="top-div">
                    <Typography variant="h2">Why we Care?</Typography>
                    <div className="content">
                    <Typography variant="body1" className="paragraph">Reports suggest that India is home to 31 million orphaned children. In 2010, the Times of India reported that 90% of the 11 million abandoned children in India were girls.</Typography>
                    <Typography variant="body1" className="paragraph">The government of India released a report in 2016 which put the number of disabled Indians at 2.68 crores. Out of this, a staggering 78 lakh were children.</Typography>
                    <Typography variant="body1" className="paragraph">The` Census 2011 reveals that 8.4 crore children in India do not attend school at all. These statistics may seem like numbers to most, but the lives which they represent are harmed to an unimaginable degree.</Typography>
                    <Typography variant="body1" className="paragraph">This makes the work of organizations such as Bal Asha extremely pivotal since we help rescue the children who have been separated from their families and works day and night to help reunite these children with their biological parents.</Typography>
                    </div>
                </div>

                <Divider className="divider" />

                <div className="bottom-div">
                    <div className="content">
                    <p className="description">
                        The Bal Asha Trust is an awarded charitable organization that helps
                        abandoned and marginalized children in the city of Mumbai. It was
                        founded in 1985.
                    </p>
                    <p className="description">
                        Here at Bal Asha Trust, we rescue abandoned and destitute children,
                        providing them with a safe home. The Children’s Home has tie-ups with
                        outstanding government, private and municipal hospitals. This includes
                        Jaslok Hospital and Research Center, offering excellent medical services.
                    </p>
                    <p className="description">
                        We work with local authorities and media to find a way to unite them
                        with their biological parents. In most cases, the child is unable to find
                        a way back home, and in these cases, we care for them until they find a new
                        loving adoptive family through a legal process.
                    </p>
                    <p className="description">
                        We support the children of our locality through educational, health and
                        nutritional projects in Mumbai and its surrounding areas. In such a densely
                        populated metropolitan area, it proves to be a great challenge to tackle, but
                        we do it to the best of our abilities.
                    </p>
                    <p className="description">
                        Every child has a right to a family, a loving environment that we provide for
                        them until we can send them to a permanent family. Our team at Bal Asha treats
                        every child with love and respect and works tirelessly to give them the best
                        possible childhood and a future of hope.
                    </p>
                    <p className="award">
                        We have been awarded the Ahilyabai Holkar Award by the Government of Maharashtra.
                        We have provided education and training to childcare functionaries throughout India.
                    </p>
                    </div>
                    
                </div>

                <Footer />
                
        </>
    );
}

export default AboutPage;