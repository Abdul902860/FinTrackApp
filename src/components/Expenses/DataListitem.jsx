import React from "react";
import {Grid,Button} from "@mui/material"
export  const DataListitem=({item})=>{
    return(
            <React.Fragment>
               <Grid item xs={3} sx={{border:"2px solid red"}}>{item.item}</Grid>
               <Grid item xs={3} sx={{border:"2px solid red"}}>{item.cat}</Grid>
               <Grid item xs={2} sx={{border:"2px solid green"}}>{item.amnt}</Grid>
               <Grid item xs={2} sx={{border:"2px solid blue"}}><Button variant="contained" color="success">Edit</Button></Grid>
               <Grid item xs={2} sx={{border:"2px solid grey"}}><Button variant="contained" color="error" >Delete</Button></Grid>

            </React.Fragment>
    )
}