import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Banner from "../Components/Nav/Banner/Banner";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify'; 


export default function Booking() {

const navigate=useNavigate('');
const [res, setRes] = useState(null); 


const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    axios.post('http://localhost:6969/Booking',{
      name: data.get('name'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
    }).then((response)=>{ 
    console.log(response.data); 
    setRes(response.data) 
    notify(); 
    navigate("/Home"); 

  }).catch((err)=>{console.log(err) 
  notify1(err)}) 
} 
function notify(){ 

  toast.success("Registration Successful", { 
    position: "bottom-right", 
    autoClose: 5000, 
    hideProgressBar: false, 
    closeOnClick: true, 
    pauseOnHover: true, 
    draggable: true, 
    progress: undefined, 
    theme: "colored", 
    // autoClose:false 
    }); 
} 
function notify1(err) 
{ 
toast.error(err, { 
  position: "bottom-right", 
  autoClose: 5000, 
  hideProgressBar: false, 
  closeOnClick: true, 
  pauseOnHover: true, 
  draggable: true, 
  progress: undefined, 
  theme: "colored", 
  }) 
} 

  return (
    <>
      <Banner title="Booking" smtitle="Booking"/> 
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
             <form onSubmit={handleSubmit}> 
                    <h3>Booking</h3> 
                    <label>Name</label> 
                    <input type="text" placeholder="Name" name='name'/> 
                     <label>Email</label> 
                    <input type="email" placeholder="Email" name='email' /> 
                    <label>Password</label> 
                    <input type="text" placeholder="Password" name='phoneNumber'/> 
                    <button class="login6_submit">submit</button> 
                  </form> 
                
      </Container>
    </ThemeProvider>

    
    
    </>
  );
}


