import {
  
  Stack, Typography, 
  
} from '@mui/material';
import { useEffect } from 'react'; // Import useEffect hook
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import bg  from '../../assets/beranda/main.jpg';


export default function Beranda() {
  useEffect(() => {
    document.body.style.margin = '0'; // Set body margin to 0
    document.body.style.padding = '0'; // Optionally set body padding to 0 as well
    document.body.style.marginTop = '-120px';
  }, []);
  return (
    <Stack sx={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      marginLeft:'0px',}} gap={0}>

      <Stack sx={{
        background: `url(${bg}) center center / cover no-repeat`,
        backgroundSize: 'cover',
        display: 'flex',
        height: '1100px', 
        justifyContent: 'center',
        width: '100%', 
        margin: '0',    
      }}>
      </Stack>
      <Stack sx={{
        display: 'flex',
        height: '1024px',
        width: '100%',
        margin: '0',
        backgroundColor: '#04214c',
        borderRadius: '0 0 100px 100px',
      }}>
      
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: '2030px',
        width: '100%',
        paddingTop: '100px',
        // paddingRight: '100px',
        backgroundColor: 'white',}}>
      
        <Stack sx={{
        height: '1000px',
        width: '100%',
        backgroundColor: 'white',}}>
            
            <Stack sx={{
              height: '280px',
              width: '100%',
              backgroundColor: 'white',
              borderBottomRightRadius: '500px',
              }}>
              <Typography sx={{
                marginLeft: '100px',
                fontWeight: 700,
                color: '#ff010c',
                fontSize: '60px',
                alignItems: 'center',

              }}>
                Rekomendasi Hotel
              </Typography>

              <Typography sx={{
                marginLeft: '100px',
                fontWeight: 400,
                color: '#04214c',
                fontSize: '30px',
                alignItems: 'center'}}>
                Khusus T-Flyers aja lho~
              </Typography>
              
            </Stack>

            <Stack sx={{
              display: 'flex',
              height: '720px',
              width: '100%',
              margin: '0',
              backgroundColor: 'white'}}>
              
              <Typography sx={{
                  marginLeft: '100px',
                  fontWeight: 700,
                  color: '#ff010c',
                  fontSize: '60px',
                  alignItems: 'center',
              }}>
                Ayo Jalan-Jalan Sekarang!
              </Typography>
            </Stack>

        </Stack>
        
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: '530px',
        width: '100%',
        margin: '0',
        backgroundColor: '#04214c',
        borderRadius: '100px 100px 0 0',}}>
      </Stack>

        <Stack sx={{
        display: 'flex',
        height: '440px',
        width: '100%',
        margin: '0',
        backgroundColor: 'white'}}>

        </Stack>
    </Stack>

    
  );
}