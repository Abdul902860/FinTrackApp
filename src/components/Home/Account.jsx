import React,{useState} from "react";
import {Grid,TextField,Button} from "@mui/material"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

  export const Account=()=>{


    const [curr,setCurr]=useState({})
    const [elig,setElig]=useState(0);
    const [appr,setAppr]=useState(0);
    const [outs,setOuts]=useState(0);
    const [tobepaid,setTobepaid]=useState(0);
    const navigate=useNavigate();


    const handleAprroved=()=>{
        const payload={
            ...curr,
            EligAmnt:elig,
            ApprAmnt:appr,
            Outstanding:outs,
            tobepaid,

        };
        localStorage.setItem("expclaim",JSON.stringify(payload))
        alert("Your Amount Ready To Approve")
       navigate("/dash")
    };
    const handleReject=()=>{
        localStorage.removeItem("expclaim");
        setCurr({});
        
    }

    useEffect(()=>{
        const currData=localStorage.getItem("expclaim");
       currData && setCurr(JSON.parse(currData));
    },[])

useEffect(()=>{
    setTobepaid(appr-outs);
},[appr,outs])
return(
    <React.Fragment>
    {curr.empId && !curr.tobepaid && ( 
        <Grid container spacing={2} align="center">
            <Grid item xs={3}>
               { curr.empId   }         
            </Grid>
            <Grid item xs={3}>
                {curr.amnt}
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" onChange={(e)=>setElig(e.target.value)} fullWidth label="Eligible Amount"></TextField>
            </Grid>

            <Grid item xs={3}>
                <TextField  variant="outlined" onChange={(e)=>setAppr(e.target.value)} fullWidth label="approved amount"/>
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" onChange={(e)=>setOuts(e.target.value)} fullWidth label="Outstanding amnt" />
            </Grid>
            <Grid item xs={3}>
                To be Paid:{tobepaid}
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={handleAprroved} fullWidth color="success">Approved</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={handleReject} fullWidth color="error">Reject</Button>
            </Grid>
        </Grid>
)}
    </React.Fragment>
)
 }