import { Alert, Avatar, Badge, Button, Card, Paper, Stack, Table, TableCell, TableRow, TextField, styled } from '@mui/material';
import React, { useState } from 'react';
import Logo from '../Assets/tourism.jpg';
import axios from 'axios';
import Video from '../Assets/loginpagebg.mp4';
import { useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function AdminLogin() {
  const [mail, setMail] = useState('');
  const [vmail, setVMail] = useState('');
  const [status, setStatus] = useState(false);
  const [firststatus, firstsetStatus] = useState(false);
  const [otpstatus, setOtpStatus] = useState(false);
  const [wstatus, setWStatus] = useState(false);
  const navigate = useNavigate();
  function handleEmailChange(e) {
    setMail(e.target.value);
  }

  function handleVEmailChange(e) {
    setVMail(e.target.value);
  }

  const isEmailValid = (email) => {
    return email === 'asankar2004@gmail.com';
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    firstsetStatus(true);
    if (isEmailValid(mail)) {
      setOtpStatus(true);
      try {
        await axios.post('http://localhost:5000/api/email_otp', {
          email: mail,
        });
      } catch (err) {
        console.log('error sending data', err);
      }
    } else {
      // Display an error message or handle the invalid email address.
    }
  }

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/email_otp/verify-otp', {
        otp: vmail,
      });
      console.log(res.data);
      if (res.data.status === 200) {
        navigate('/Adminpage')
        setStatus(true);
        setWStatus(false);
      
      }
    } catch (err) {
      console.log(err);
      setWStatus(true);
      setStatus(false);
    }
  }

  return (
    <div align="center">
      <video src={Video} autoPlay muted loop />
      <div className="content">
        <Stack>
          <Paper elevation={20} sx={{ m: 29, width: 450, backgroundColor: '#96B6C5', border: 2, borderColor: 'white' }}>
            <h1 align="center">Admin Login Page</h1>
            <Card elevation={24} sx={{ m: 2, backgroundColor: '#F8F0E5', border: 1, borderRadius: 2 }}>
              <Table>
                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
              </Table>
              <div align="center">
                <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                  <Avatar src={Logo} />
                </StyledBadge>
              </div>
              <Table>
                <TableRow>
                  <TableCell>Email: </TableCell>
                  <TableCell>
                    <TextField placeholder="Enter Mail Here" onChange={handleEmailChange} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>OTP:</TableCell>
                  {otpstatus && (
                    <TableCell>
                      <TextField placeholder="Enter Otp Here" onChange={handleVEmailChange} />
                    </TableCell>
                  )}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button variant="contained" onClick={handleOtp} disabled={!isEmailValid(mail)}>
                      Send OTP
                    </Button>
                  </TableCell>
                  {otpstatus && (
                    <TableCell>
                      <Button variant="contained" onClick={verifyOtp}>
                        Verify OTP
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
                <TableRow>
                  <TableCell>{firststatus && <Alert>OTP Sent Successfully!!!!!</Alert>}</TableCell>
                  <TableCell>
                    {status && <Alert>OTP Verified!!!!</Alert> }
                    {wstatus && <Alert severity="error">INVALID OTP!!!!</Alert>}
                  </TableCell>
                </TableRow>
              </Table>
            </Card>
          </Paper>
        </Stack>
      </div>
    </div>
  );
}
