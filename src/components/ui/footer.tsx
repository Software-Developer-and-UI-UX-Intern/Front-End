import { Stack, Typography } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import logoTripsel from '../../assets/Trip-sel.png';
import logoTelkomsel from '../../assets/Telkomsel (full).png';

export default function Navbar() {
  

  
  return (
    <Stack direction='row' sx={{
        display: 'flex',
        height: '440px',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
      }}>
        <Stack width='200px' sx={{
          padding: '175px 100px',
          alignContent: 'center',
        }}>
          <img src={logoTripsel} alt="Logo Tripsel" />
          <Stack direction='row' gap={1} paddingTop={1}>
            <Typography>
              by
            </Typography>
            <img src={logoTelkomsel} alt="Logo Telkomsel" width='100px' />
          </Stack>
        </Stack>

        <Stack sx={{
          padding: '50px',
        }}>
          <Typography sx={{
            color: '#04214c',
            fontWeight: 600,
            fontSize: 25,
          }}>
            Tentang Trip-sel
          </Typography>

          <Typography sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: 20,
            paddingTop: 1,
          }}>
            Tentang Kami
          </Typography>

          <Typography sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: 20,
            paddingTop: 1,
          }}>
            Kontak
          </Typography>

          <Typography sx={{
            color: '#04214c',
            fontWeight: 600,
            fontSize: 25,
            paddingTop: 7.5,
          }}>
            Ikuti Perjalanan Trip-sel
          </Typography>

          <Typography sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: 20,
            paddingTop: 1,
          }}>
            Instagram
          </Typography>

          <Typography sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: 20,
            paddingTop: 1,
          }}>
            TikTok
          </Typography>

          <Typography sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: 20,
            paddingTop: 1,
          }}>
            YouTube
          </Typography>

        </Stack>

        <Typography sx={{
          color: '#04214c',
          fontWeight: 600,
          fontSize: 25,
          paddingTop: 7.5,
          paddingLeft: 15,
        }}>
          Ada kendala dengan Trip-mu?<br></br>
          QOS-an hadir disini!
        </Typography>

      </Stack>
  );
}
