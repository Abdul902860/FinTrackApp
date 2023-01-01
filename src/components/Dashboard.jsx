import React from "react";
import {Grid,Card,CardContent} from "@mui/material"
import { Finance } from "./Dashboard/Finance";

 export const Dashboard =()=>{
    return(
        <React.Fragment>
           
                <Card sx={{bgcolor:"coral"}}>
                    <CardContent>
                       <Finance /> 
                       
                     </CardContent>
                </Card>
            
        </React.Fragment>
    )
}