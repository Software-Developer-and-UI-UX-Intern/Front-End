// Beranda.tsx
import { useEffect } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import bg from '../../assets/beranda/Bali.png';
// import { RekomenHotel } from '../../components/beranda/rekomenhotel';
import RowAndColumnSpacing from '../../../src/components/beranda/ayojalan';
import SwipeableHotelCarousel from '../../components/beranda/SwipeableHotelCaraousel';
import YoutubeVideo from '../../components/beranda/youtube';
import Balimenunggu  from '../../components/beranda/balimenunggu';
import BerandaData from './berandadata'
import '../../assets/font/telkomselbatik.css'
// interface HotelRecommendationsProps {
//   hotels: Hotel[];
// }

// const HotelRecommendations: React.FC<HotelRecommendationsProps> = ({ hotels }) => {
//   return (
//     <Stack direction={'row'} spacing={2}>
//       {hotels.map((hotel) => (
//         <RekomenHotel
//           key={hotel.id}
//           name={hotel.name}
//           stars={hotel.stars}
//           image={hotel.image}
//         />
//       ))}
//     </Stack>
//   );
// };


export default function Beranda() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    window.scrollTo(0, 0);
  }, []);

  // const startIndex = activeIndex * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '0px',
    }} gap={0}>

      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 20%, #04214C 100%), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '920px',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
      }}>
        <Stack marginLeft={'127px'}>
         <Typography sx={{
          fontWeight: 500,
          color: 'white',
          fontSize: '100px',
          textAlign: 'left',
          fontFamily: 'TelkomselBatikBold'
        }}>
          Selamat Datang T-Flyers!
        </Typography>
        <Typography sx={{
          fontWeight: 500,
          color: 'white',
          fontSize: '32px',
          textAlign: 'left'
        }}>
          Temukan berbagai rekomendasi yang kamu inginkan di regional Bali-Nusra, spesial hanya untuk T-Flyers.
        </Typography>
        </Stack>
      </Stack>
      <Stack width={'100%'} height={'10px'} sx={{backgroundColor:'#04214C'}} marginTop={'-3px'}>

      </Stack>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        margin: '0',
        backgroundColor: '#04214c',
        borderRadius: '0 0 100px 100px',
        paddingBottom:'145px'
      }}>

        <Typography sx={{
          fontWeight: 500,
          color: 'white',
          fontSize: '60px',
          paddingTop: '50px',
          textAlign: 'center',
          fontFamily: 'TelkomselBatikBold'
        }}>
          Bali-Nusra Menunggumu
        </Typography>

        <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'center',
          marginBottom:'85px'
        }}>
          Jelajahi seluruh regionalnya sekarang!
        </Typography>

        <Balimenunggu orangeData={BerandaData} />
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        paddingTop: '50px',
        backgroundColor: 'white',
      }}>

        <Stack sx={{
          height: 'auto',
          width: '100%',
          backgroundColor: 'white',
        }}>

          <Stack paddingBottom={'64px'} sx={{
            height: 'auto',
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
              fontFamily: 'TelkomselBatikBold'
            }}>
              Rekomendasi Hotel
            </Typography>

            <Typography sx={{
              marginLeft: '100px',
              fontWeight: 400,
              color: '#04214c',
              fontSize: '30px',
              alignItems: 'center'
            }}>
              Khusus T-Flyers aja lho~
            </Typography>

          </Stack>

          <Stack sx={{
            display: 'flex',
            height: 'auto',
            width: 'auto',
            marginLeft: '100px',
            marginRight: '100px',
            backgroundColor: 'white'
          }} direction='row' gap={5}>
            {/* <HotelRecommendations hotels={hotelData.slice(startIndex, endIndex)} /> */}
            <SwipeableHotelCarousel/>
          </Stack>
          <Stack justifyContent='center' alignContent='center' alignItems='center' sx={{ marginTop: '46px', marginBottom:'126px' }}>
            <Button sx={{ alignContent: 'center', width: '288px', height: '80px', borderRadius: '40px', backgroundColor: '#ff010c', color:'white',
                          '&:hover': { background: 'white', color: 'red', boxShadow: '0px 0px 0px 2px red', borderRadius: '40px' }
                        }}>
              <Typography sx={{
                color: 'inherit',
                fontWeight: '600',
                fontSize:'32px',
              }}>
                Jelajahi
              </Typography>
            </Button>
          </Stack>
          <Stack>
          <Typography sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: '60px',
            textAlign: 'center',
            fontFamily: 'TelkomselBatikBold',
          }}>
            Ayo Jalan-Jalan
          </Typography>
        </Stack>

        <Stack width={'auto'} height={'auto'} marginLeft={'100px'} marginRight={'100px'} marginTop={'30px'} marginBottom={'55px'}>
        <RowAndColumnSpacing backendLink="https://tripselbe.fly.dev/recommendationwisata" />
        </Stack>
        </Stack>
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        margin: '0',
        backgroundColor: '#04214c',
        borderRadius: '100px 100px 0 0',
        paddingBottom: '60px',

      }}>
        <Typography sx={{
          marginLeft: '100px',
          marginTop: '50px',
          fontWeight: 500,
          color: 'white',
          fontSize: '55px',
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom: '60px',
          fontFamily: 'TelkomselBatikRegular',
        }}>
          Pengalaman Trip-Sel
        </Typography>
        <YoutubeVideo/>

      </Stack>



    </Stack>
  );
}
