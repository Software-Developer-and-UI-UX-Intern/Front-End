import { Stack, Typography } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import logoTripsel from '../../assets/Trip-sel.png';
import logoTelkomsel from '../../assets/Telkomsel (full).png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  function handleTentangKamiClick() {
    navigate('/aboutus');  
  }
  
  function handleSocialMediaClick(url:string) {
   
    window.open(`${url}`, '_blank');
  }

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
            fontFamily:'TelkomselBatikBold'

          }}>
            Tentang Trip-sel
          </Typography>

          <Typography
            sx={{
              color: '#04214c',
              fontWeight: 400,
              fontSize: 20,
              paddingTop: 1,
              cursor: 'pointer', // Add cursor pointer for better UX
            }}
            onClick={handleTentangKamiClick} // Attach onClick event
          >
            Tentang Kami
          </Typography>
          <Typography
            sx={{
              color: '#04214c',
              fontWeight: 400,
              fontSize: 20,
              paddingTop: 1,
              cursor: 'pointer', // Add cursor pointer for better UX
            }}
            // onClick={handleTentangKamiClick} // Attach onClick event
          >
            Kontak
          </Typography>


          <Typography sx={{
            color: '#04214c',
            fontWeight: 600,
            fontSize: 25,
            paddingTop:'46px',
            fontFamily:'TelkomselBatikBold'
          }}>
            Ikuti Perjalanan Trip-sel
          </Typography>
          <Typography
            sx={{
              color: '#04214c',
              fontWeight: 400,
              fontSize: 20,
              paddingTop: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleSocialMediaClick('https://www.instagram.com/trip.sel?igsh=c3B3Njg2emNpeHl0')}
          >
            Instagram
          </Typography>

          <Typography
            sx={{
              color: '#04214c',
              fontWeight: 400,
              fontSize: 20,
              paddingTop: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleSocialMediaClick('https://www.tiktok.com/@tripwithtelkomsel?_t=8mgAFMj8Esi&_r=1')}
          >
            TikTok
          </Typography>

          <Typography
            sx={{
              color: '#04214c',
              fontWeight: 400,
              fontSize: 20,
              paddingTop: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleSocialMediaClick('https://youtube.com/@tripsel?si=O7GZD7Q0Wyb6SL82')}
          >
            YouTube
          </Typography>

        </Stack>

        <Typography sx={{
          color: '#04214c',
          fontWeight: 600,
          fontSize: 25,
          paddingTop: 7.5,
          paddingLeft: 15,
          fontFamily:'TelkomselBatikBold'
        }}>
          Ada kendala dengan Trip-mu?<br></br>
          QOS-an hadir disini!
        </Typography>

      </Stack>
  );
}
