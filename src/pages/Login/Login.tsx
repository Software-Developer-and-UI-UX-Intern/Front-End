import { Grid, Stack, Box, Typography, Input } from '@mui/material';
import {  Button, InputAdornment, IconButton,Link } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const customInputStyle = {
  width: '100%',
  height: '53px',
  '& input': {
    borderRadius: '30px',
    height: '53px',
    border: '1px solid #000', // Apply border directly to the input
    outline: 'none',
    padding:'0px 10px'
  },
  '& .MuiInputLabel-root': {
    color:  '#6E6C6C', // Initially make label transparent
    '&.Mui-focused': {
      color:'transparent', // Change label color when focused
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
      
    },
  },
};

import bg from '../../assets/login.png';
import logo from '../../assets/Trip-sel.png'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Box>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} md={6} sx={{ maxHeight: '100%' }}>
        <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
       
          <Stack direction={'column'} sx={{ display: { md: 'flex' },width:'100%', height: '100%', justifyContent:'center',alignContent:'center', alignItems:'center' }}>
          <Stack sx={{ width:'100%', justifyContent:'center', alignItems:'center' }}>
            <img
              src={
                logo
              }
              alt=""
              // height="100%"
              width="100%"
              style={{maxWidth:'314px'}}
            />
            </Stack>
            <img
              src={
                bg
              }
              alt=""
              // height="100%"
              width="100%"
              style={{maxWidth:'550px', maxHeight:'550px'}}
            />
             <Typography sx={{
            fontWeight: 700,
            fontSize: '42px',
            color:'#FF010C',
          }}>
          #TripwithTelkomsel
          </Typography>
          </Stack>
         
        </Stack>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          px={8}
          py={2}
          sx={{
            bgcolor: 'white',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            '@media screen and (max-width: 899px)': {
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              padding: '2rem',
            },
          }}
        >
          
          <Stack sx={{ width: '100%' }} spacing={3} >
            
          <Stack spacing={1} >
             <Typography sx={{
              fontWeight: 700,
              fontSize: '42px',
              color:'#FF010C',
          
            }}>
              Masuk
            </Typography>
            <Typography sx={{
              fontWeight: 500,
              fontSize: '32px',
              color:'#FF010C',
            }}>
              Selamat datang di Trip-sel
            </Typography>
          </Stack>
          
          <Stack spacing={2}>
          <Typography sx={{
              fontWeight: 500,
              fontSize: '24px',
              color:'black'
            }}>
              Email
            </Typography>
            <Input
              disableUnderline
              placeholder="Email"
              sx={customInputStyle}
              inputProps={{
                'aria-label': 'description',
              }}
            />
                <Typography sx={{
              fontWeight: 500,
              fontSize: '24px',
              color:'#FF010C'
            }}>
              *Nama lengkap tidak boleh kosong
            </Typography>
                <Typography sx={{
              fontWeight: 500,
              fontSize: '24px',
              color:'black'
            }}>
              Password
            </Typography>
          
            <Input
              disableUnderline
              id="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              sx={customInputStyle}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
              <Typography sx={{
              fontWeight: 500,
              fontSize: '24px',
              color:'#FF010C'
            }}>
              *Password Salah
            </Typography>
          </Stack>
          <Stack spacing={3} alignItems={'center'} width={'100%'}>
            <Button
              sx={{
                display: 'flex',
                width: '127px',
                height: '48px',
                padding: '10px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '25px',
                background: '#FF010C',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '20px',
                '&:hover': { background: 'white', color: 'red' },
              }}
            >
              Masuk
            </Button>
            <Stack direction={'row'}>
            <Typography>
              Belum punya akun?
            </Typography>
            <Link sx={{
                textDecoration: 'underline',
                fontWeight: 700, // Set to match the Typography component's font weight
                color: '#FF010C', // Set to match the Typography component's color
            }}>
            <Typography sx={{
              fontWeight:700,
              color:'#FF010C',
            }}>
              Daftar
            </Typography>
            </Link>
            </Stack>
          </Stack>


          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
