import React from "react";
import {Grid,Button} from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const LeftNav=()=>{
    const[data,setData]=useState([])

    const getData=async()=>{
        const result= await axios.get("http://localhost:3030/categories")
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    },[])
    return(
            <React.Fragment>
                <Grid container spacing={3}>
                    {
                        data.map((item)=>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="secondary">{item.name}</Button>
                            </Grid>
                        )
                    }
                </Grid>
            </React.Fragment>
    )
}