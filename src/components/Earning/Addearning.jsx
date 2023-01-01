import React, { useEffect }  from 'react';
import {Grid,TextField,Button,Alert} from "@mui/material"
import axios from 'axios';
import { useState } from 'react';
import Select from 'react-select';

export const Addearning= () => {
  const [item,setItem]=useState("");
  const [cat,setCat]=useState(0)
  const  [amnt,setAmnt]=useState(0)
  const [msg,setMsg]=useState("");
  const [isShow,setisShow]=useState(false)
  const[options,setOptions]=useState([
    {value:1,label:"red"},
    {value:2,label:"green"},
    {value:3,label:"purple"},
  ])
 
  
  const handleClick=async()=>{
      const payload={
        item,
        cat,
        amnt
      };
    const result=await  axios.post("http://localhost:3030/addearning",payload)
    setMsg(result.data);
  
  };

  const getData =async()=>{
    const result= await axios.get("http://localhost:3030/catdd")
    setOptions(result.data);

  }
    const resetData=()=>{
      setItem("");
      setAmnt("");
      setCat("");
    }

useEffect(()=>{
  getData()
},[])

  useEffect(()=>{
      if(msg!==""){
        resetData();
        setisShow(true);
        setTimeout(()=>{
          // setisShow(false)
          setMsg("");
        },5000)
      }else{
        setisShow(false)
      }
  },[msg])
  return (
    <React.Fragment>
        <Grid container spacing={3} >
            <Grid item xs={3} >
              <Select  options={options}   onChange={(opt)=>setCat(opt.value)} />
            </Grid>
            <Grid item xs={3}>
              <TextField variant='outlined' value={item}  onChange={(e)=>setItem(e.target.value)} fullWidth label="Item"></TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField variant='outlined' value={amnt} type="number" onChange={(e)=>setAmnt(e.target.value)} fullWidth label="Amount"></TextField>
            </Grid>
            <Grid item xs={3}>
              <Button variant='contained' disabled={item.length<3 || amnt<5}  onClick={handleClick} fullWidth sx={{height:55}}>Submit</Button>
            </Grid>
            <Grid item xs={12}>
            {
              isShow  && <Alert   severity="success">{msg}</Alert>
            }
              
            </Grid>
        </Grid>
    </React.Fragment>
  )
}
