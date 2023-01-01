import React, { useEffect } from "react";
import { Grid} from "@mui/material";
import { DataListitem } from "./DataListitem";
import axios from "axios";
import { useState } from "react";

export  const DataList=()=>{
    const [data,setData]=useState([]);
    const [refresh,setRefresh]=useState([]);
    const getData=async()=>{
        const result=await axios.get("http://localhost:3030/expensess")
        setData(result.data)
    }

    const doRefresh=()=>{
        setRefresh(true);
}
 

useEffect(()=>{
getData();
},[])


    return(
            <React.Fragment>
                <Grid container spacing={3}>
                    {
                        data.map((item)=>
                        <DataListitem item={item} />
                        )
                    }
                </Grid>
            </React.Fragment>
    )
}