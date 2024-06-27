import { useEffect, useState } from 'react';
import { Stack, Typography, useMediaQuery, useTheme  } from '@mui/material';
import bg from '../../assets/beranda/Bali.png';
import RowAndColumnSpacing from '../../../src/components/beranda/ayojalan';
import SwipeableHotelCarousel from '../../components/beranda/SwipeableHotelCaraousel';
import YoutubeVideo from '../../components/beranda/youtube';
import Balimenunggu from '../../components/beranda/balimenunggu';
// import BerandaData from './berandadata';
import '../../assets/font/telkomselbatik.css';

interface BerandaData {
  imageSrc: string;
  textContent: string;
}

interface Area {
  domisili: string;
  jenis: string;
  coverabout: string;
  footerabout: string;
  coverhotel: string;
  coveroleh: string;
  coverresto: string;
  deskripsiabout: string;
  lokasi: string;
}

export default function Beranda() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    window.scrollTo(0, 0);
  }, []);

  const [berandaData, setBerandaData] = useState<BerandaData[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tripselbe.fly.dev/area');
        const data = await response.json();
        const formattedData = data.map((item: Area) => ({
          imageSrc: item.coverabout,
          textContent: item.domisili,
        }));
        setBerandaData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '0px',
      }}
      gap={0}
    >
      <Stack
        sx={{
          backgroundImage: `linear-gradient(180deg, transparent 20%, #04214C 100%), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          height: { xs: '500px', md: '920px' },
          justifyContent: 'center',
          width: '100%',
          margin: '0',
        }}
      >
        <Stack marginLeft={{ xs: '16px', md: '127px' }} paddingX={{ xs: '16px', md: '0' }}>
          <Typography
            sx={{
              fontWeight: 500,
              color: 'white',
              fontSize: { xs: '32px', sm: '50px', md: '100px' },
              textAlign: 'left',
              fontFamily: 'TelkomselBatikBold',
            }}
          >
            Selamat Datang T-Flyers!
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              color: 'white',
              fontSize: { xs: '16px', sm: '24px', md: '32px' },
              textAlign: 'left',
            }}
          >
            Temukan berbagai rekomendasi yang kamu inginkan di regional Bali-Nusra, spesial hanya untuk T-Flyers.
          </Typography>
        </Stack>
      </Stack>
      <Stack width={'100%'} height={'10px'} sx={{ backgroundColor: '#04214C' }} marginTop={'-3px'} />

      <Stack
        sx={{
          display: 'flex',
          height: 'auto',
          width: '100%',
          margin: '0',
          backgroundColor: '#04214c',
          borderRadius: '0 0 100px 100px',
          paddingBottom: { xs: '80px', md: '145px' },
          paddingX: { xs: '0px', md: '0' },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            color: 'white',
            fontSize: { xs: '28px', sm: '45px', md: '60px' },
            paddingTop: '50px',
            textAlign: 'center',
            fontFamily: 'TelkomselBatikBold',
          }}
        >
          Bali-Nusra Menunggumu
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            color: 'white',
            fontSize: { xs: '16px', sm: '20px', md: '25px' },
            textAlign: 'center',
            marginBottom: '85px',
          }}
        >
          Jelajahi seluruh regionalnya sekarang!
        </Typography>

        <Balimenunggu orangeData={berandaData} />
      </Stack>

      {!isMobile && (
        <Stack
          sx={{
            display: 'flex',
            height: 'auto',
            width: '100%',
            paddingTop: '50px',
            backgroundColor: 'white',
            paddingX: { xs: '0px', md: '0' },
          }}
        >
          <Stack
            sx={{
              height: 'auto',
              width: '100%',
              backgroundColor: 'white',
            }}
          >
            <Stack
              paddingBottom={'64px'}
              sx={{
                height: 'auto',
                width: '100%',
                backgroundColor: 'white',
                borderBottomRightRadius: { xs: '0', md: '500px' },
              }}
            >
              <Typography
                sx={{
                  marginLeft: { xs: '16px', md: '100px' },
                  fontWeight: 700,
                  color: '#ff010c',
                  fontSize: { xs: '32px', sm: '45px', md: '60px' },
                  alignItems: 'center',
                  fontFamily: 'TelkomselBatikBold',
                }}
              >
                Rekomendasi Hotel
              </Typography>

              <Typography
                sx={{
                  marginLeft: { xs: '16px', md: '100px' },
                  fontWeight: 400,
                  color: '#04214c',
                  fontSize: { xs: '16px', sm: '24px', md: '30px' },
                  alignItems: 'center',
                }}
              >
                Khusus T-Flyers aja lho~
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: 'flex',
                height: 'auto',
                width: 'auto',
                marginLeft: { xs: '16px', md: '100px' },
                marginRight: { xs: '16px', md: '100px' },
                backgroundColor: 'white',
              }}
              direction="row"
              gap={5}
            >
              <SwipeableHotelCarousel />
            </Stack>
            {/* <Stack justifyContent="center" alignContent="center" alignItems="center" sx={{ marginTop: '46px', marginBottom: '126px' }}>
              <Button
                sx={{
                  alignContent: 'center',
                  width: { xs: '160px', md: '288px' },
                  height: { xs: '50px', md: '80px' },
                  borderRadius: '40px',
                  backgroundColor: '#ff010c',
                  color: 'white',
                  '&:hover': {
                    background: 'white',
                    color: 'red',
                    boxShadow: '0px 0px 0px 2px red',
                    borderRadius: '40px',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: 'inherit',
                    fontWeight: '600',
                    fontSize: { xs: '16px', md: '32px' },
                  }}
                >
                  Jelajahi
                </Typography>
              </Button>
            </Stack> */}
          </Stack>
        </Stack>
      )}

      <Stack>
        <Typography
          sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: { xs: '32px', sm: '45px', md: '60px' },
            textAlign: 'center',
            fontFamily: 'TelkomselBatikBold',
            paddingTop: '30px',
          }}
        >
          Ayo Jalan-Jalan
        </Typography>
      </Stack>

      <Stack
        width="auto"
        height="auto"
        marginLeft={{ xs: '16px', md: '100px' }}
        marginRight={{ xs: '16px', md: '100px' }}
        marginTop="30px"
        marginBottom="55px"
      >
        <RowAndColumnSpacing backendLink="https://tripselbe.fly.dev/recommendationwisata" />
      </Stack>

      <Stack
        sx={{
          display: 'flex',
          height: 'auto',
          width: '100%',
          margin: '0',
          backgroundColor: '#04214c',
          borderRadius: '100px 100px 0 0',
          paddingBottom: '60px',
        }}
      >
        <Typography
          sx={{
            marginLeft: { xs: '16px', md: '100px' },
            marginTop: '50px',
            fontWeight: 500,
            color: 'white',
            fontSize: { xs: '32px', sm: '45px', md: '55px' },
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: '60px',
            fontFamily: 'TelkomselBatikRegular',
          }}
        >
          Pengalaman Trip-Sel
        </Typography>
        <YoutubeVideo />
      </Stack>
    </Stack>
  );
}
