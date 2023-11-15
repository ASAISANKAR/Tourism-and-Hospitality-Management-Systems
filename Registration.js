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


export default function Registration() {

const [studList,setStudList]=useState([]);
const navigate=useNavigate('');
const [res, setRes] = useState(null); 
 

const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    axios.post('http://localhost:6969/Register',{
      firstName:data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    }).then((response)=>{ 
    console.log(response.data); 
    setRes(response.data) 
    notify(); 
    navigate("/Login"); 

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
      <Banner title="Registration" smtitle="Registration"/> 
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
             <form onSubmit={handleSubmit}> 
                    <h3>Register</h3> 
                    <label>firstName</label> 
                    <input type="text" placeholder="firstName" name='firstName'/> 
                    <label>lastName</label> 
                    <input type="text" placeholder="lastName" name='lastName'/> 
                    <label>Email</label> 
                    <input type="email" placeholder="EMAIL" name='email' /> 
                    <label>Password</label> 
                    <input type="password" placeholder="PASSWORD" name='password'/> 
                    <button class="login6_submit">submit</button> 
                  </form> 
                 
      </Container>
    </ThemeProvider>
   
    
    {studList.map((val,key)=>{
  return <div key={key} class="student">
    <h1>{val.firstName}</h1>
    <h1>{val.lastName}</h1>
    <h1>{val.email}</h1>
    <h1>{val.password}</h1>
  
  </div>
    })},
    </>
  );
}


