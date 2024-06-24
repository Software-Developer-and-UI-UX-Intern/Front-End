import { Stack, Typography } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import logoTripsel from '../../assets/Trip-sel.png';
import logoTelkomsel from '../../assets/Telkomsel (full).png';
import { useNavigate } from 'react-router-dom';
import qos from '../../assets/qrcode.png';

export default function Navbar() {
  const navigate = useNavigate();

  function handleTentangKamiClick() {
    navigate('/aboutus');
  }

  function handleSocialMediaClick(url: string) {
    window.open(`${url}`, '_blank');
  }

  const handleImageClick = () => {
    window.open(`https://apps.powerapps.com/play/e/default-fc743075-93ed-4a5c-82c0-ca5eac914220/a/bccfe7f8-7c3c-4e11-9661-5cd973c98eb8?tenantId=fc743075-93ed-4a5c-82c0-ca5eac914220&hint=6ce95ae7-4cb9-45db-8533-40032515a739&sourcetime=1714621426691&pa_isFromQRCode=true`, '_blank');
  };

  return (
    <Stack 
      direction={{ xs: 'column', md: 'row' }} 
      sx={{
        display: 'flex',
        height: { xs: 'auto', md: '440px' },
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        padding: { xs: '0px', md: '20' },
        alignItems:'center',
      }}
    >
      <Stack 
        width={{ xs: '200px', md: '200px' }} 
        sx={{
          justifyContent:'center',
          padding: { xs: '20px 0', md: '175px 100px' },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'center' },
        }}
      >
        <img src={logoTripsel} alt="Logo Tripsel" width={'100%'} />
        <Stack direction='row' gap={1} paddingTop={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Typography>
            by
          </Typography>
          <img src={logoTelkomsel} alt="Logo Telkomsel" style={{ width: '100px', maxWidth: '100%' }} />
        </Stack>
      </Stack>

      <Stack 
        sx={{
          padding: { xs: '20px', md: '50px' },
          textAlign: { xs: 'center', md: 'left' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography sx={{
          color: '#04214c',
          fontWeight: 600,
          fontSize: { xs: 20, md: 25 },
          fontFamily: 'TelkomselBatikBold'
        }}>
          Tentang Trip-sel
        </Typography>

        <Typography
          sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: { xs: 18, md: 20 },
            paddingTop: 1,
            cursor: 'pointer',
          }}
          onClick={handleTentangKamiClick}
        >
          Tentang Kami
        </Typography>
        <Typography
          sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: { xs: 18, md: 20 },
            paddingTop: 1,
            cursor: 'pointer',
          }}
        >
          Kontak
        </Typography>

        <Typography sx={{
          color: '#04214c',
          fontWeight: 600,
          fontSize: { xs: 20, md: 25 },
          paddingTop: '46px',
          fontFamily: 'TelkomselBatikBold'
        }}>
          Ikuti Perjalanan Trip-sel
        </Typography>
        <Typography
          sx={{
            color: '#04214c',
            fontWeight: 400,
            fontSize: { xs: 18, md: 20 },
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
            fontSize: { xs: 18, md: 20 },
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
            fontSize: { xs: 18, md: 20 },
            paddingTop: 1,
            cursor: 'pointer',
          }}
          onClick={() => handleSocialMediaClick('https://youtube.com/@tripsel?si=O7GZD7Q0Wyb6SL82')}
        >
          YouTube
        </Typography>

      </Stack>

      <Stack 
        direction={'column'} 
        justifyContent={'center'} 
        alignItems={'center'}
        sx={{ padding: { xs: '20px', md: '0' }, textAlign: 'center' }}
      >
        <Typography sx={{
          color: '#04214c',
          fontWeight: 600,
          fontSize: { xs: 20, md: 25 },
          paddingTop:  { xs: 0, md: 7.5 },
          paddingLeft: { xs: 0, md: 15 },
          fontFamily: 'TelkomselBatikBold'
        }}>
          Ada kendala dengan Trip-mu?<br />
          QOS-an hadir disini!
        </Typography>
        <Stack height={'100%'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
          <img 
            src={qos} 
            alt="Logo Tripsel" 
            style={{ height: 'auto', width: '80%', maxWidth: '250px', cursor: 'pointer' }} 
            onClick={handleImageClick}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
