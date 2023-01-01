import React from "react";
import axios from "axios";
import {Grid,Card,CardContent,Button,TextField,Alert} from "@mui/material";
import { useState } from "react";
import Select from "react-select";
import { useEffect } from "react";


  export const AddExpenses=()=>{
    const [item,setItem]=useState("");
    const [cat,setCat]=useState(0);
    const [amnt,setAmnt]=useState(0)
    const [options,setOptions]=useState([])
    const[msg,setMsg]=useState([])
    const[explist,setExplist]=useState([])
    const [isShow,setisShow]=useState("")


    const handleClick=async()=>{
        const payload={
            item,cat,amnt,
        }
        const result=await axios.post("http://localhost:3030/expenses",payload)
        setMsg(result.data)    
    }

        const getData=async()=>{
            const result=await axios.get("http://localhost:3030/catdd")
            setOptions(result.data);
        }
        const getDatas=async()=>{
            const result=await axios.get("http://localhost:3030/explist")
            // console.log(result.data);
            setExplist(result.data);
        }
        useEffect(()=>{
            getDatas();
        },[])

        const resetData=()=>{
            setItem("");
            setCat("");
            setAmnt("");
        }
        useEffect(()=>{
            getData();
        },[])
        
        
        useEffect(()=>{
                if(msg!==""){
                resetData();
                setisShow(true);
                setTimeout(()=>{
                    setMsg("")
                },3000)
                }else{
                    setisShow(false);
                }
        },[msg])
        
    return(
        <React.Fragment>
     
            
            <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Select options={options}  onChange={(opt)=>setCat(opt.value)} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField onChange={(e)=>setItem(e.target.value)} value={item}  variant="outlined"  fullWidth label="Item"></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField onChange={(e)=>setAmnt(e.target.value)} value={amnt}  variant="outlined" fullWidth label="Amount"></TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={handleClick} disabled={item.length<3 || amnt<5} variant="contained" fullWidth>Submit</Button>
                        </Grid>
                        <Grid item xs={12}>
                        {
                            isShow && <Alert severity="success">{msg}</Alert>

                        }
                        </Grid>
            </Grid>
                   
                
        </React.Fragment>
    )
}