import React from "react";
import {Grid,Button,Card,CardContent} from "@mui/material"
import axios from "axios";

export const DataListitem=({item,doRefresh})=>{

    const handledelete=async(_id)=>{
        const payload= {_id};
        await axios.post("http://localhost:3030/deleteearning",payload)
        doRefresh();
    }
    return(
            <React.Fragment>
            <Card sx={{border:"2px solid grey"}}>
            <CardContent>
            <Grid container spacing={3}>
            
            <Grid item xs={3}>{item.item} </Grid>
            <Grid item xs={3}>{item.cat} </Grid>
            <Grid item xs={2}>{item.amnt} </Grid>
            <Grid item xs={2}><Button variant="contained" color="success">Edit</Button> </Grid>
            <Grid item xs={2}><Button variant="contained" color="error" onClick={()=>handledelete(item._id)}>Delete</Button> </Grid>
            </Grid>
            </CardContent>
            </Card>
            </React.Fragment>
    )
}