import {
  
  Button,
  Stack, Typography,
  
} from '@mui/material';
import { useEffect } from 'react'; // Import useEffect hook
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
// import '@fontsource/Telkomsel Batik Sans.css'
import bg  from '../../assets/beranda/main.jpg';
import {BerandaButton} from '../../components/beranda/rekomenhotel';
import logoTripsel from '../../assets/Trip-sel.png';
import logoTelkomsel from '../../assets/Telkomsel (full).png';
import RowAndColumnSpacing from '../../../src/components/beranda/ayojalan';
import Grid from '@mui/material/Grid';




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
      
        <Typography sx={
                {
                fontWeight: 500,
                color: 'white',
                fontSize: '60px',
                paddingTop: '50px',
                textAlign: 'center'}}>
          Bali-Nusra Menunggumu
        </Typography>
        <Typography sx={
        {
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'center'}}>

          Jelajahi seluruh regionalnya sekarang!
        </Typography>
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: '2030px',
        width: '100%',
        paddingTop: '50px',
        // paddingRight: '100px',
        backgroundColor: 'white',}}>
      
        <Stack sx={{
        height: '1000px',
        width: '100%',
        backgroundColor: 'white',}}>
            
            <Stack sx={{
              height: '250px',
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
              height: 'auto',
              width: 'auto',
              marginLeft: '100px',
              marginRight: '100px',
              marginBottom: '50px',
              backgroundColor: 'white'}} direction='row' gap={5}>
              <BerandaButton/>
              <BerandaButton/>
              <BerandaButton/>
            </Stack>

              <Stack gap={5} direction='row' justifyContent='center' alignContent='center'>
              <Button sx={{alignContent: 'center', width: '100px', height: '40px', borderRadius: '30px', backgroundColor: '#ff010c'}}>   
              </Button>

              <Button sx={{alignContent: 'center', width: '40px', height: '40px', borderRadius: '30px', backgroundColor: '#ff010c'}}>
              </Button>

                <Button sx={{alignContent: 'center', width: '40px', height: '40px', borderRadius: '30px', backgroundColor: '#ff010c'}}>
                </Button>
                
              </Stack>
              <Stack justifyContent='center' alignContent='center' alignItems='center' sx={{marginTop: '35px'}}>
                <Button sx={{alignContent: 'center', width: 'auto', height: 'auto', borderRadius: '30px', backgroundColor: '#ff010c'}}>
                  <Typography sx={{
                    padding: '5px 25px', 
                    color: 'white', 
                    fontWeight:'600',
                    '&:hover': { width: 'auto', height: 'auto', background: 'white', color: 'red', boxShadow: '0px 0px 0px 2px red', borderRadius: '30px' },}}>
                      Jelajahi
                      </Typography>
                </Button>

              </Stack>

              <Typography sx={
                {
                fontWeight: 700,
                color: '#ff010c',
                fontSize: '60px',
                paddingTop: '50px',
                textAlign: 'center'}}>
                
                Ayo Jalan-Jalan
              </Typography>
        </Stack>
        
        <Grid container rowSpacing={7} columnSpacing={5} alignItems='center' justifyContent='center'  borderRadius='40px'>
        <Grid item lg={5}  borderRadius='40px'>
          
            <RowAndColumnSpacing/>
            
        </Grid>
        <Grid item lg={5}>
          
          <RowAndColumnSpacing/>
          
        </Grid>
        <Grid item lg={5}>
          
          <RowAndColumnSpacing/>
          
        </Grid>
        <Grid item lg={5}>
          
          <RowAndColumnSpacing/>
          
        </Grid>
      </Grid>

      </Stack>

      <Stack sx={{
        display: 'flex',
        height: '530px',
        width: '100%',
        margin: '0',
        backgroundColor: '#04214c',
        borderRadius: '100px 100px 0 0',}}>
          <Typography sx={{
                marginLeft: '100px',
                marginTop: '50px',
                fontWeight: 500,
                color: 'white',
                fontSize: '55px',
                alignItems: 'center',
                textAlign: 'center'}}>
                Pengalaman Trip-Sel
              </Typography>


      </Stack>

        
        <Stack direction='row' sx={{
        display: 'flex',
        height: '440px',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        }}>
            <Stack width='200px' sx={
              {
                padding: '175px 100px',
                alignContent: 'center',

              }
            }>
            <img src={logoTripsel} alt="Logo Tripsel" />
            <Stack direction = 'row' gap={1} paddingTop={1}>
              <Typography>
                 by
              </Typography>
            <img src={logoTelkomsel} alt="Logo Telkomsel" width='100px'/>
            </Stack>

            </Stack>

            <Stack sx={
              {
                padding: '50px',
              }
            }>
              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 600,
                  fontSize: 25,
                  
                }
              }>
                Tentang Trip-sel
              </Typography>

              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 400,
                  fontSize: 20,
                  paddingTop: 1,
                }
              }>
                Tentang Kami
              </Typography>

              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 400,
                  fontSize: 20,
                  paddingTop: 1,
                }
              }>
                Kontak
              </Typography>

              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 600,
                  fontSize: 25,
                  paddingTop: 7.5,
                }
              }>
                
                Ikuti Perjalanan Trip-sel
              </Typography>

              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 400,
                  fontSize: 20,
                  paddingTop: 1,
                }
              }>
                Instagram
              </Typography>

              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 400,
                  fontSize: 20,
                  paddingTop: 1,
                }
              }>
                TikTok
              </Typography>

              <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 400,
                  fontSize: 20,
                  paddingTop: 1,
                }
              }>
                YouTube
              </Typography>

            </Stack>

            <Typography sx={
                {
                  color: '#04214c',
                  fontWeight: 600,
                  fontSize: 25,
                  paddingTop: 7.5,
                  paddingLeft: 15,
                }
              }>
                
                Ada kendala dengan Trip-mu?<br></br>
                QOS-an hadir disini!
              </Typography>

        </Stack>

    </Stack>

    
  );
}