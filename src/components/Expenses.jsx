import React from "react";

import {Card,CardContent} from "@mui/material";
import { AddExpenses } from "./Expenses/AddExpenses";
import { DataList } from "./Expenses/DataList";

export const Expenses=()=>{
    return(
        <React.Fragment>
            
                <Card  sx={{height:100}}>
                
                    
                      <AddExpenses />
                    
                </Card>

                <Card sx={{border:"2px solid grey"}}>
                    <CardContent > 

                        <DataList />

                    </CardContent>
                </Card>
        
        </React.Fragment>
    )
}