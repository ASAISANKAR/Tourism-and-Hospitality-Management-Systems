import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { Alert,  Table, TableCell, TableRow} from '@mui/material';
import {useNavigate } from 'react-router-dom';



const theme = createTheme();

export default function Login() {



    
const [mail, setMail] = useState('');
const [vmail, setVMail] = useState('');
const [status, setStatus] = useState(false);
const [firststatus, firstsetStatus] = useState(false);
const [otpstatus,setotpstatus] = useState(false); 
const [wstatus, wsetStatus] = useState(false);
const navigate = useNavigate();

function handlEmailChange(e) {
  setMail(e.target.value);
}

function handlVEmailChange(e) {
  setVMail(e.target.value);
}


const handleOtp = async (e) => {
  e.preventDefault();
  firstsetStatus(true);
  setotpstatus(true);
  try {
    await axios.post('http://localhost:5000/api/email_otp', {
      email: mail,
    });
    
    
  } catch (err) {
    console.log('error sending data', err);
  }
};

const verifyOtp = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/email_otp/verify-otp', {
      otp: vmail,
    });
    console.log(res.data);
    if (res.data.status === 200) {
      navigate('/home')
      setStatus(true);
      wsetStatus(false);
      
    }
  } catch (err) {
    console.log(err);
    wsetStatus(true);
    setStatus(false);
  }
};

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      // TODO: handle successful login
    } catch (error) {
      console.error(error);
    };

    // ...
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

<Table>
                <TableRow>
                  <TableCell>Email: </TableCell> <TableCell><TextField placeholder="Enter Mail Here" onChange={handlEmailChange} /></TableCell>
                </TableRow>
                <TableRow>
                 
               <TableCell>OTP:</TableCell>  {otpstatus &&  (  <TableCell> <TextField placeholder="Enter Otp Here" onChange={handlVEmailChange} /></TableCell> )}
                 
                </TableRow>
                <TableRow>
                  <TableCell> <Button variant='contained' onClick={handleOtp} >send otp</Button></TableCell>
                   
                { otpstatus && (<TableCell><Button variant='contained'  onClick={verifyOtp} >Verify OTP</Button> </TableCell> )}
               </TableRow>
                <TableRow>
              <TableCell>  {firststatus && <Alert>OTP Sent Successfully!!!!!</Alert>}</TableCell>
                 <TableCell> {status && <Alert>OTP Verified!!!!</Alert> && navigate("/Home") } {wstatus && <Alert severity="error">INVALID OTP!!!!</Alert>}</TableCell>
                 </TableRow>

              </Table>


            
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
 }