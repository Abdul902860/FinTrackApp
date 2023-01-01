import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataListitem } from "./DataListitem";
// import { Grid } from "@mui/material";
 export const DataList=()=>{

        const [data,setData]=useState([]);
        const [refresh,setRefresh]=useState(false);
        const getData=async()=>{
                const result=await axios.get("http://localhost:3030/earnings")
                setData(result.data);
        }
const doRefresh=()=>{
        setRefresh(true);
}
        useEffect(()=>{
                if(refresh){
                        getData();
                        setRefresh(false);
                }
        },[refresh])

        useEffect(()=>{
                getData();
        },[])
    return(
            <React.Fragment>
            {
                    data.map((item)=>(
                              
                 <DataListitem item={item} doRefresh={doRefresh} />
                              
                        ))
                }
            </React.Fragment>
    )
}