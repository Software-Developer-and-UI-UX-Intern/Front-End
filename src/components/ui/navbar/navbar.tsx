import { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, Stack, Link, Typography, Button } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import logoTripsel from '../../../assets/Trip-sel.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Navbar() {
  const [isOpaque, setIsOpaque] = useState(false); // State to track if navbar is opaque or transparent

  useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
          const scrollTop = window.scrollY;
          setIsOpaque(scrollTop > 0); // Set navbar to opaque if not at the top of the page, otherwise transparent
      };

      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);

      // Clean up on unmount
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isOpaque ? 'white' : 'transparent',
        transition: 'background-color 0.3s ease-in-out', // Add transition effect
        boxShadow: isOpaque ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        margin: '0px 0px',
        padding: '25px 0px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Stack sx={{ width: '200px' }}>
            <img src={logoTripsel} alt="logo" />
          </Stack>
          <Stack style={{ justifyContent: 'space-between' }} width={'70%'} direction={'row'}>
          <Link style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" sx={{
              fontWeight: isOpaque ? 700 : 400, // Change font weight based on isOpaque
              color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
              '&:hover': { fontWeight: 700, color: 'red' },
            }}>
            <Typography
              sx={{
              alignContent: 'center',
              paddingLeft: '5px',
              paddingRight: '5px',
              paddingTop: '5px',
              fontSize: '24px',
              transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
             }}
            >
               Beranda
            </Typography>
             </Stack>
            </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" sx={{ 
            color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
            '&:hover':{fontWeight: 700, color: 'red'}}}>
              <Typography
                sx={{
                  alignContent: 'center',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  paddingTop: '5px',
                  fontSize: '24px',
                  color: 'inherit',
                  fontWeight: 'inherit',
                  transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                  
                }}
              >
                Hotel
              </Typography>
              <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '10px' }} />
            </Stack>
          </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" sx={{
              color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
              '&:hover':{fontWeight: 700, color: 'red'}}}>
              <Typography
                sx={{
                  alignContent: 'center',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  paddingTop: '5px',
                  fontSize: '24px',
                  color: 'inherit',
                  fontWeight: 400,
                  transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                  '&:hover': { fontWeight: 700, color: 'red' },
                }}
              >
                Restoran
              </Typography>
              <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '10px' }} />
            </Stack>
          </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" sx={{
              color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
              '&:hover':{fontWeight: 700, color: 'red'}}}>
              <Typography
                sx={{
                  alignContent: 'center',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  paddingTop: '5px',
                  fontSize: '24px',
                  color: 'inherit',
                  fontWeight: 400,
                  transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                  '&:hover': { fontWeight: 700, color: 'red' },
                }}
              >
                Oleh-Oleh
              </Typography>
              <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '10px' }} />
            </Stack>
          </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" sx={{
              color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
              '&:hover':{fontWeight: 700, color: 'red'}}}>
              <Typography
                sx={{
                  alignContent: 'center',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  paddingTop: '5px',
                  fontSize: '24px',
                  color: 'inherit',
                  fontWeight: 400,
                  transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                  '&:hover': { fontWeight: 700, color: 'red' },
                }}
              >
                Wisata
              </Typography>
              <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '10px' }} />
            </Stack>
          </Link>
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                display: 'flex',
                width: '127px',
                height: '48px',
                padding: '10px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '25px',
                background: 'var(--Primary-01, linear-gradient(270deg, #ff8702 0%, #FF010C 100%))',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '20px',
                '&:hover': { background: 'white', color: 'red', boxShadow: '0px 0px 0px 2px red', },
              }}
            >
              Masuk
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);
}
