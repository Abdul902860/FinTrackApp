import React from 'react'
import { Claim } from './Claim';
import {Grid,Card,CardContent} from "@mui/material"
import { Account } from './Account';
import { Reset } from '../Reset';

export const HomeContent = () => {
  return (
    <React.Fragment>
        <Reset />
        <Card>
          <CardContent>
          <Claim />
          </CardContent>
        </Card>
        
        <Card sx={{bgcolor:"aqua"}}>
          <CardContent>
          <Account  />

          </CardContent>
        </Card>
       
    </React.Fragment>
  )
}
