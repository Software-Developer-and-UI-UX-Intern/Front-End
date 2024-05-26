// Beranda.tsx
import { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import bg from '../../assets/hotel/bali/up.png';
import down from '../../assets/about us/down.png';
// import { RekomenHotel } from '../../components/beranda/rekomenhotel';
import Orangewithimage from '../../components/beranda/orangewithimage';
import '../../assets/font/telkomselbatik.css'
import Kaksam from '../../assets/about us/kak sam.jpg'
import Kakida from '../../assets/about us/kak ida.jpg'
import Kakkadek from '../../assets/about us/kak kadek.jpg'
import Kakhani from '../../assets/about us/kak hani.jpg'
import martin from '../../assets/about us/martin.jpg'
import tata from '../../assets/about us/tata.jpg'
import nana from '../../assets/about us/nana.jpg'
import adi from '../../assets/about us/adi.jpg'
import {  useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    window.scrollTo(0, 0);
  }, []);
  const handleberanda = () => {
    navigate(`/`)
  }
  // const startIndex = activeIndex * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} gap={0}>

      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 20%, white 100%), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '920px',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
        gap:5
      }}>
        <Stack >
         <Typography sx={{
          fontWeight: 700,
          color: 'white',
          fontSize: '72px',
          textAlign: 'center',
          fontFamily: 'TelkomselBatikBold',
          textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>
Apa itu Trip-sel?        </Typography>
        <Typography sx={{
          fontWeight: 500,
          color: 'white',
          fontSize: '42px',
          textAlign: 'center',
          textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
          padding:'0px 120px'
        }}>
Trip-sel atau Trip with Telkomsel merupakan wadah untuk T-Flyers dalam mencari rekomendasi kamar hotel, restoran, tempat wisata dan tempat mencari oleh-oleh dengan harga terbaik.        </Typography>
        </Stack>
      </Stack>
      <Stack width={'100%'} height={'10px'} sx={{backgroundColor:'#FF010C'}} marginTop={'-3px'}>

      </Stack>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        margin: '0',
        backgroundColor: '#FF010C',
        // borderRadius: '0 0 100px 100px',
        paddingBottom:'145px'
      }}>
   <Typography sx={{
          fontWeight: 700,
          color: 'white',
          fontSize: '72px',
          textAlign: 'center',
          fontFamily: 'TelkomselBatikBold'
        }}>
          Mengapa Trip-sel?
        </Typography>
        <Stack direction={'row'} gap={'30px'} padding={'30px'} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={'column'} gap={'30px'} >
          <Stack width={'579px'} height={'260px'} padding={'36px'} sx={{backgroundColor:'white',borderRadius:'40px 0px'}}>
          <Typography sx={{
          fontWeight: 700,
          color: '#04214C',
          fontSize: '32px',
          textAlign: 'left',
          }}>
          Harga spesial Khusus T-Flyers!
        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: '#04214C',
          fontSize: '28px',
          textAlign: 'justify',
          }}>
Harga yang ditawarkan pastinya sudah sangat spesial hanya untuk T-Flyers lho! Yuk, jelajahi rekomendasi dari Trip-sel.        </Typography>
          </Stack>
          <Stack width={'579px'} height={'260px'} padding={'36px'} sx={{backgroundColor:'white',borderRadius:'40px 0px'}}>
          <Typography sx={{
          fontWeight: 700,
          color: '#04214C',
          fontSize: '32px',
          textAlign: 'left',
          }}>
Rekomendasi Terbaik        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: '#04214C',
          fontSize: '28px',
          textAlign: 'justify',
          }}>
Trip-sel menjadi media rekomendasi terbaik untuk T-Flyers dalam melakukan perjalanan wisata.  </Typography>
          </Stack>
          </Stack>
          <Stack direction={'column'} gap={'30px'}>
          <Stack width={'579px'} height={'260px'}  padding={'36px'} sx={{backgroundColor:'white',borderRadius:'40px 0px'}}>
          <Typography sx={{
          fontWeight: 700,
          color: '#04214C',
          fontSize: '32px',
          textAlign: 'left',
          }}>
Destinasi Terpilih        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: '#04214C',
          fontSize: '28px',
          textAlign: 'justify',
          }}>
Destinasi yang kami tawarkan merupakan destinasi terpilih dan pastinya tidak membuat kamu menyesal deh. </Typography>
          </Stack>
          <Stack width={'579px'} height={'260px'} padding={'36px'} sx={{backgroundColor:'white',borderRadius:'40px 0px'}}>
          <Typography sx={{
          fontWeight: 700,
          color: '#04214C',
          fontSize: '32px',
          textAlign: 'left',
          }}>
Mencakup seluruh Regional        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: '#04214C',
          fontSize: '28px',
          textAlign: 'justify',
          }}>
Trip-sel sudah mencakup seluruh regional Telkomsel pastinya. Jadi jangan ragu untuk mencari rekomendasi di Trip-sel!</Typography>
          </Stack>
          </Stack>
        </Stack>
     
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
          backgroundColor: 'white',
        }}>

          <Stack paddingBottom={'64px'} sx={{
            height: 'auto',
            backgroundColor: 'white',
            borderBottomRightRadius: '500px',
          }}>

          </Stack>


          <Stack>
          <Typography sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: '60px',
            textAlign: 'center',
            // fontFamily: 'TelkomselBatikBold',
          }}>
            OUR TEAM
          </Typography>
        </Stack>

        <Stack width={'auto'} height={'auto'} marginTop={'30px'} marginBottom={'55px'} gap={3}>
        <Stack direction={'row'} gap={3}>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={Kaksam} textContent='Kak Sam' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={Kakida} textContent='Kak Ida' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={Kakkadek} textContent='Kak Kadek' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={Kakhani} textContent='Kak Hani' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
        </Stack>
        <Stack direction={'row'} gap={3}>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={adi} textContent='Adi' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={martin} textContent='Martin' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={nana} textContent='Nana' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
          <Stack width={'100%'}>
          <Orangewithimage imageSrc={tata} textContent='tata' fontsize='42px' height='480px' imgheight='105px' width='100%'/>
          </Stack>
        </Stack>
        </Stack>
        </Stack>
      </Stack>

      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 20%, white 100%), url(${down})`,
        backgroundSize: 'cover',
        backgroundPosition: 'start center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '1036px',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
   
      }}>
       <Stack alignItems={'center'} gap={5} justifyContent={'center'}>
         <Typography sx={{
          fontWeight: 700,
          color: 'white',
          fontSize: '72px',
          textAlign: 'center',
          fontFamily: 'TelkomselBatikBold',
          textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}>
Ayo Jelajahi!        </Typography>
        <Typography sx={{
          fontWeight: 500,
          color: 'white',
          fontSize: '42px',
          textAlign: 'center',
          textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'

        }}>
Jelajahi tempat yang akan Anda kunjungi sekarang</Typography>
        </Stack>
        <Stack paddingTop={'40px'}>
        <Button onClick={handleberanda} sx={{width:'500px', height:'100px',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius:'100px', color:'white',fontSize:'44px', fontWeight:700,     background: 'linear-gradient(360deg, #fb8c2a, #FF010C)'}}>jelajahi</Button>
        </Stack>

      </Stack>



    </Stack>
  );
}
