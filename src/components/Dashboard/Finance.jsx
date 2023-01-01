import React, {useState,useEffect} from "react";
import { Grid,Button,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export  const Finance=()=>{

    const [curr,setCurr]=useState({});
    const [paidamnt,setPaidamnt]=useState(0);
    const [bal,setbal]=useState(0);

    const navigate=useNavigate();
    const handleApprove=()=>{
        const payload={
            ...curr,
            paidamnt,
            bal,
        };
        localStorage.setItem("expclaim",JSON.stringify(payload))
        navigate("/");
        
    };

    const handleReject=()=>{
        localStorage.removeItem("expclaim");
        navigate("/");
    }

   useEffect(()=>{
    setbal(curr.tobepaid - paidamnt)
   },[paidamnt])
   
    useEffect(()=>{
        const currData=localStorage.getItem("expclaim")
          currData && setCurr(JSON.parse(currData));
    },[])
    return(
        <React.Fragment>
        {curr.tobepaid &&
            <Grid container spacing={2} align="center">
                <Grid item xs={2}>EmpId <br />{curr.empId}</Grid>
                <Grid item xs={2}>Amount <br />{curr.amnt}</Grid>
                <Grid item xs={2}>Eligible Amount <br />{curr.EligAmnt}</Grid>
                <Grid item xs={2}>Approved Amount <br />{curr.ApprAmnt}</Grid>
                <Grid item xs={2}>Outstanding <br />{curr.Outstanding}</Grid>
                <Grid item xs={2}>Tobe Paid <br />
                {curr.tobepaid}</Grid>
                <Grid item xs={2}>
                    <TextField onChange={(e)=>setPaidamnt(e.target.value)} variant="outlined" fullWidth label="PaidAmount" />
                </Grid>
                <Grid item xs={2}>
                   Balance Amount <br /> {bal}
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="success" onClick={handleApprove}>Approved</Button>
                </Grid>
                <Grid item xs={2}>
                <Button variant="contained" onClick={handleReject} color="error">Reject</Button>
                </Grid>
            </Grid>
        }
        </React.Fragment>
    )
}