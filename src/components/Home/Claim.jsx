import React, { useState } from "react";
import {Grid,TextField,Button} from "@mui/material"
 export const Claim=()=>{

    const[empId,setempId]=useState(0);
    const [amnt,setAmnt]=useState(0);

    const handleSubmit=()=>{
        const payload={
            empId,
            amnt,
        };
        localStorage.setItem("expclaim",JSON.stringify(payload))
    
    }

    return(
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField variant="outlined" onChange={(e)=>setempId(e.target.value)} fullWidth label="EmpId" />
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined"  onChange={(e)=>setAmnt(e.target.value)} fullWidth label="Amount" />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={handleSubmit} color="success" fullWidth>Submit</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}