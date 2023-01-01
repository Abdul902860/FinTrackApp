import React  from 'react';
import { Addearning } from './Earning/Addearning';
import {Card,CardContent} from "@mui/material"
import { DataList } from './Earning/DataList';

export const Earnings = () => {
  

  return (
    <React.Fragment>
        <Card sx={{height:100}}>
          <CardContent>
              <Addearning />
              </CardContent>
              </Card>
        <Card>
           <CardContent>
                <DataList />
              
          </CardContent>
        </Card>
    </React.Fragment>
  )
}
