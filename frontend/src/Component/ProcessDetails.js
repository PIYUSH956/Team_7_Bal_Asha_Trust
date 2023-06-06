import { Grid } from "@mui/material";
import ProcessStep1 from "./ProcessStep1";
import ProcessStep2 from "./ProcessStep2";
import ProcessStep3 from "./ProcessStep3";
import ProcessStep4 from "./ProcessStep4";

const gridStyle = {
//    margin : '20px auto',
}

export default function ProcessDetails() {
    return(
        <>
            <Grid>
                <Grid style={gridStyle}>
                    <ProcessStep1 />
                </Grid>
                <Grid style={gridStyle}>
                    <ProcessStep2 />
                </Grid>
                <Grid style={gridStyle}>
                    <ProcessStep3 />
                </Grid>
                <Grid style={gridStyle}>
                    <ProcessStep4 />
                </Grid>
            </Grid>
        </>
    )
}