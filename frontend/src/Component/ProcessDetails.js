import { Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProcessStep1 from "./ProcessStep1";
import ProcessStep2 from "./ProcessStep2";
import ProcessStep3 from "./ProcessStep3";
import ProcessStep4 from "./ProcessStep4";

const gridStyle = {
   margin : '20px auto',
}

export default function ProcessDetails() {
    return(
        <>
            <Grid>
                <Grid style={gridStyle}>
                    <Accordion>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" color={'gray'}>Step 1</Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
                            <ProcessStep1 />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid style={gridStyle}>
                <Accordion>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" color={'gray'}>Step 2</Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
                            <ProcessStep2 />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid style={gridStyle}>
                    <Accordion>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" color={'gray'}>Step 3</Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
                            <ProcessStep3 />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid style={gridStyle}>
                    <Accordion>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" color={'gray'}>Step 4</Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
                            <ProcessStep4 />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
    )
}